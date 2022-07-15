// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import bcrypt from "bcrypt";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;
    console.log(method);
    const { firstName, lastName, email, password } =
        req.body;

    if (method === "POST") {
        try {
            const hash = await bcrypt.hash(password, 0);
            await prisma.user.create({
                data: {
                    name: firstName + " " + lastName,
                    email: email,
                    password: hash,
                },
            });
            return res.status(201).end();
        } catch (err) {
            console.log(err);
            return res.status(503).json({ err });
        }
    } else {
        return res.status(405).json({
            error: "This request only support POST request",
        });
    }
}
