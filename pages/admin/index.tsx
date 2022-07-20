import type { NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu/Menu";
import SideMenu from "../../components/Menu/SideMenu";
import Layout from "../../components/Layout/Layout";

const Home: NextPage = () => {
    const { data: session, status } = useSession();
    console.log("status:", status, session);

    const router = useRouter();

    if (status === "unauthenticated") {
        router.push("/");
    }

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
            <Layout>
                <h1>Home Page</h1>
            </Layout>
        </>
    );
};

export default Home;
