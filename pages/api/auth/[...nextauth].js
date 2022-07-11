import NextAuth from "next-auth";
import { prisma } from "../../../lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
let userAccount = null;

const bcrypt = require("bcrypt");

const confirmPasswordHash = (
    plainPassword,
    hashedPassword
) => {
    return new Promise((resolve) => {
        bcrypt.compare(
            plainPassword,
            hashedPassword,
            function (err, res) {
                resolve(res);
            }
        );
    });
};

// const configuration = {
//     cookie: {
//         secure:
//             process.env.NODE_ENV &&
//             process.env.NODE_ENV === "production",
//     },
//     session: {
//         jwt: true,
//         maxAge: 30 * 24 * 60 * 60,
//     },
//     jwt: {
//         secret: "SUPER_SECRET_JWT_SECRET",
//     },
//     providers: [
//         CredentialsProvider({
//             id: "credentials",
//             name: "credentials",
//             credentials: {},
//             async authorize(credentials) {
//                 try {
//                     const user =
//                         await prisma.user.findFirst({
//                             where: {
//                                 email: credentials.email,
//                             },
//                         });

//                     if (user !== null) {
//                         //Compare the hash
//                         const res =
//                             await confirmPasswordHash(
//                                 credentials.password,
//                                 user.password
//                             );
//                         if (res === true) {
//                             userAccount = {
//                                 userId: user.Id,
//                                 firstName: user.firstName,
//                                 lastName: user.lastName,
//                                 email: user.email,
//                                 isActive: user.isActive,
//                             };
//                             return userAccount;
//                         } else {
//                             console.log(
//                                 "Hash not matched logging in"
//                             );
//                             return null;
//                         }
//                     } else {
//                         return null;
//                     }
//                 } catch (err) {
//                     console.log("Authorize error:", err);
//                 }
//             },
//         }),
//     ],
//     callbacks: {
//         async signIn(user, account, profile) {
//             try {
//                 //the user object is wrapped in another user object so extract it
//                 console.log(user);
//                 user = user.user;
//                 console.log("Sign in callback", user);
//                 console.log("User id: ", user.userId);
//                 if (
//                     typeof user.userId !== typeof undefined
//                 ) {
//                     if (user.isActive === "1") {
//                         console.log("User is active");
//                         return user;
//                     } else {
//                         console.log("User is not active");
//                         return false;
//                     }
//                 } else {
//                     console.log("User id was undefined");
//                     return false;
//                 }
//             } catch (err) {
//                 console.error(
//                     "Signin callback error:",
//                     err
//                 );
//             }
//         },
//         async register(
//             firstName,
//             lastName,
//             email,
//             password
//         ) {
//             try {
//                 await prisma.users.create({
//                     data: {
//                         firstName: firstName,
//                         lastName: lastName,
//                         email: email,
//                         password: password,
//                     },
//                 });
//                 return true;
//             } catch (err) {
//                 console.error(
//                     "Failed to register user. Error",
//                     err
//                 );
//                 return false;
//             }
//         },
//         async session(session, token) {
//             if (userAccount !== null) {
//                 session.user = userAccount;
//             } else if (
//                 typeof token.user !== typeof undefined &&
//                 typeof session.user === typeof undefined
//             ) {
//                 session.user = token.user;
//             } else if (typeof token !== typeof undefined) {
//                 session.token = token;
//             }
//             return session;
//         },
//         async jwt(
//             token,
//             user,
//             account,
//             profile,
//             isNewUser
//         ) {
//             if (typeof user !== typeof undefined) {
//                 token.user = user;
//             }
//             return token;
//         },
//     },
// };

const providers = [
    CredentialsProvider({
        name: "credentials",
        authorize: async (credentials) => {
            const user = await prisma.user.findFirst({
                where: {
                    email: credentials.email,
                },
            });

            if (user) {
                const res = await confirmPasswordHash(
                    credentials.password,
                    user.password
                );
                if (res === true) {
                    userAccount = {
                        userId: user.Id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        isActive: user.isActive,
                        name:
                            user.firstName +
                            " " +
                            user.lastName,
                    };
                    return userAccount;
                } else {
                    console.log("Hash not matched");
                    return null;
                }
            } else {
                console.log("Nieznany error");
                return null;
            }
        },
    }),
];

const callbacks = {
    // Getting the JWT token from API response
    async jwt(token, user) {
        if (
            user !== typeof undefined &&
            token !== undefined
        ) {
            token.user = user;
            return token;
        }

        console.log(user, token);

        return token;
    },

    async session(session, token) {
        if (
            userAccount !== typeof undefined &&
            userAccount !== null
        ) {
            console.log("tutaj:", userAccount);
            session.user = userAccount;
            return session;
        } else {
            session.token = token;
        }
        // console.log(session);
        return null;
    },
};

const options = {
    providers,
    callbacks,
    jwt: {
        secret: "SUPER_SECRET_JWT_SECRET",
    },
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
};

export default (req, res) => NextAuth(req, res, options);
