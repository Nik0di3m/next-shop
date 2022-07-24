import console from "console";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "../../../utils/login";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            authorize: async (credentials) => {
                // database look up

                const userFromDb = await loginUser(
                    credentials.email,
                    credentials.password
                );

                // console.log(userFromDb.user);

                if (userFromDb != null) {
                    return {
                        id: userFromDb.user.id,
                        name: userFromDb.user.name,
                        email: userFromDb.user.email,
                        image: userFromDb.user.image,
                        role: userFromDb.user.role,
                    };
                }

                // login failed
                return null;
            },
        }),
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            // first time jwt callback is run, user object is available
            if (user) {
                // console.log("User from nextauth jwt:", user);
                token.id = user.id;
                // Add role to token for user type middleware handler
                token.role = user.role;
            }

            return token;
        },
        session: ({ session, token }) => {
            if (token) {
                // console.log("Token from nextauth session:", token);
                session.id = token.id;
            }

            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        encryption: true,
    },
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
});
