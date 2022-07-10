// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req
    const { login, password } = req.body

    switch (method) {
        case 'POST':
            try {
                const users = await prisma.user.findUnique({
                    where: {
                        email: login,
                    },
                })
                res.status(200).json({ users: users })
                console.error('ok')
            } catch (e) {
                console.error('Request error', e)
            }
            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
