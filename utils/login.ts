import { prisma } from "../lib/prisma";
const bcrypt = require("bcrypt");

export async function loginUser(email: string, password: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            console.log("No user found");
            return null;
        }
        console.log(password, user.password);
        const matched = await bcrypt
            .compare(password, user.password)
            .then((res: any) => {
                console.log("BCRYPT:", res);
                return res;
            });

        if (!matched) {
            console.log("Decoder password dont matched to hash password");
            return null;
        }
        console.log("All its ok, welcome aboard!");

        return { user: { ...user, id: user.id } };
    } catch (error) {
        console.log(error);
        return null;
    }
}
