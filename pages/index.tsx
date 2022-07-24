import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import Button from "../components/Button/Button";
import Loader from "../components/Icons/Loader";
import Input from "../components/Input/Input";
import SignLayout from "../components/Layout/SignLayout";

const Home: NextPage = () => {
    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        setIsLoading(true);
        e.preventDefault();
        setUserEmail("");
        setUserPassword("");
        await signIn("credentials", {
            email: userEmail,
            password: userPassword,
            callbackUrl: `/admin`,
            redirect: false,
        }).then(function (result) {
            if (result?.error !== null) {
                if (result?.status === 401) {
                    console.log("Login failed", result.error);
                    setIsLoading(false);
                } else {
                    console.log("Login failed", result?.error);
                    setIsLoading(false);
                }
            } else {
                router.push("/admin");
            }
        });
    };

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favico.ico" />
            </Head>
            <SignLayout>
                <div className="pt-10">
                    <h1 className="text-3xl">
                        Welcome Back, Pleas login
                        <br />
                        to your account
                    </h1>
                    {!isLoading && (
                        <div className="pt-8">
                            <form
                                className="space-y-5"
                                onSubmit={(e) => handleSubmit(e)}
                            >
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="E-mail"
                                    value={userEmail}
                                    onChange={(string) => setUserEmail(string)}
                                />
                                <Input
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    type="password"
                                    value={userPassword}
                                    onChange={(string) =>
                                        setUserPassword(string)
                                    }
                                />
                                <Button type="submit">Sign In</Button>
                            </form>
                        </div>
                    )}
                    {isLoading && (
                        <div className="py-5">
                            <Loader />
                        </div>
                    )}
                </div>
            </SignLayout>
        </>
    );
};

export default Home;
