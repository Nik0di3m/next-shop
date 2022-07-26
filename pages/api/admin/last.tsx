import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const lastItem = await prisma.product.findFirst({
        orderBy: {
            id: "desc",
        },
        select: {
            id: true,
        },
    });

    res.status(200).json(lastItem);
}
