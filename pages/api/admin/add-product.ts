import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { prisma } from "../../../lib/prisma";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;
    const { product } = req.body;
    const secret = process.env.NEXTAUTH_SECRET;

    const token = await getToken({ req, secret });

    if (token) {
        if (method === "POST") {
            try {
                await prisma.product.create({
                    data: {
                        name: product.title,
                        description: product.description,
                        price: product.price,
                        quantity: product.qty,
                        isNew: product.isNew,
                        isFutures: product.isFuture,
                        slug: product.slug,
                    },
                });
                return res.status(201).json({
                    message: "Product added successfully",
                });
            } catch (error) {
                return res
                    .status(409)
                    .json({ message: "Database conflict" });
            }
        }
    } else {
        res.status(401).end();
    }

    res.status(405).json({
        message: "Only POST requests are allowed.",
    });
}
