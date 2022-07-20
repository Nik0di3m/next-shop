import type { NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu/Menu";
import SideMenu from "../../components/Menu/SideMenu";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";

interface ProductData {
    title: string;
    description: string;
    price: number;
    qty: number;
    isNew: boolean;
    isFuture: boolean;
    isBestseller: boolean;
    slug: string;
}

const AddProduct: NextPage = () => {
    const [productData, setProductData] = useState<ProductData>(
        {} as ProductData
    );

    const { data: session, status } = useSession();
    console.log("status:", status, session);
    const router = useRouter();
    if (status === "unauthenticated") {
        router.push("/");
    }

    const handleSaveProduct = async () => {
        await axios
            .post("/api/admin/add-product", {
                product: productData,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err.response));
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
            <Layout>
                <div className="p-10">
                    <h1 className="text-2xl font-bold">Nowy produkt</h1>
                    <div className="bg-neutral-800">sdf</div>
                </div>
            </Layout>
        </>
    );
};

export default AddProduct;