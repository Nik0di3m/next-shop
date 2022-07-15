// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;
    const { email, password } = req.body;

    switch (method) {
        case "POST":
            try {
                const users = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                });
                if (users?.password === password) {
                    return res
                        .status(202)
                        .json({ users, ok: true });
                } else {
                    console.error("nie ma");
                    return res
                        .status(401)
                        .end(`Bad login or password`);
                }
            } catch (e) {
                console.error("Request error", e);
            }
            break;
        default:
            res.setHeader("Allow", ["POST"]);
            res.status(405).end(
                `Method ${method} Not Allowed`
            );
    }
}
