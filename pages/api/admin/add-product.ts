import { NextApiRequest, NextApiResponse } from "next";
import S3 from "aws-sdk/clients/s3";
import { getToken } from "next-auth/jwt";
import { prisma } from "../../../lib/prisma";
import console from "console";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    // Get signedRequestUrl from AWS to image product upload

    const secret = process.env.NEXTAUTH_SECRET;

    // Validate user credentials
    const token = await getToken({ req, secret });

    console.log(token);

    const s3Bucket = process.env.AWS_BUCKET;
    const s3 = new S3({
        region: "eu-central-1",
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        signatureVersion: "v4",
    }); // Create a new instance of S3

    const fileName: string = req.body.fileName;
    const fileType = req.body.fileType;
    const productIdFromBody = req.body.productId;

    // Validate role in the token
    if (token?.role == "admin") {
        // Get last id of product from database
        const lastProductId = await prisma.product
            .findFirst({
                orderBy: {
                    id: "desc",
                },
                select: {
                    id: true,
                },
            })
            .then((res) => res?.id)
            .catch((err) => err.message);

        const s3Params = {
            Bucket: s3Bucket,
            Key: `products/${
                lastProductId ? lastProductId + 1 : productIdFromBody
            }/${fileName}`,
            ContentType: fileType,
            Expires: 600,
        };

        console.log("Product id:", lastProductId);
        try {
            s3.getSignedUrl("putObject", s3Params, async (err, data) => {
                if (err) {
                    return res.json({ success: false, error: err });
                }
                const returnData = {
                    signedRequest: data,
                    url: `https://${s3Bucket}.s3.amazonaws.com/products/${
                        lastProductId ? lastProductId + 1 : productIdFromBody
                    }/${fileName}`,
                };

                return res.status(200).json(returnData);
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        // Not Signed in or is common user
        res.status(401);
        res.end();
    }
}
