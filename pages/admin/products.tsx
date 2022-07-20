import type { NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu/Menu";
import SideMenu from "../../components/Menu/SideMenu";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { PlusCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";

const Products: NextPage = () => {
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
                <div className="px-10">
                    <div>
                        <Link href="/admin/add-product">
                            <a>
                                <button className="flex items-center px-3 py-2 mt-10 space-x-2 duration-150 rounded-md shadow-md bg-sky-600 shadow-sky-600/40 hover:scale-105 active:scale-90">
                                    <PlusCircleIcon className="w-6 h-6" />
                                    <span>Dodaj</span>
                                </button>
                            </a>
                        </Link>
                    </div>
                    <div className="mt-10 overflow-hidden rounded-lg shadow-lg bg-neutral-800">
                        <div className="grid grid-cols-8 py-4 mx-auto border-b place-items-center border-zinc-900">
                            <div>Image</div>
                            <div>Name</div>
                            <div>Price</div>
                            <div>Quantity</div>
                            <div>Rate</div>
                            <div>Is New</div>
                            <div>Is Future</div>
                            <div>Is Bestseller</div>
                        </div>
                        <div className="">
                            <div className="grid grid-cols-8 py-4 mx-auto duration-150 ease-in cursor-pointer place-items-center hover:bg-neutral-700">
                                <div>
                                    <Image
                                        src="https://ortelli.pl/environment/cache/images/300_300_productGfx_9427/Lampa-podlogowa-z-czarnym-abazurem-z-serii-ALICE-L-4963-Nowodvorski.webp"
                                        alt=""
                                        width={100}
                                        height={100}
                                        className="rounded-md"
                                    />{" "}
                                </div>
                                <div>
                                    Lampa podłogowa z czarnym abażurem z serii
                                    ALICE L 4963 Nowodvorski
                                </div>
                                <div>999,00 zł</div>
                                <div>99 szt</div>
                                <div className="flex">
                                    <StarIcon className="w-6 h-6 text-yellow-400" />
                                    <span>4.5</span>
                                </div>
                                <div>false</div>
                                <div>true</div>
                                <div>false</div>
                            </div>

                            <div className="grid grid-cols-8 py-4 mx-auto duration-150 ease-in cursor-pointer place-items-center hover:bg-neutral-700">
                                <div>
                                    <Image
                                        src="https://ortelli.pl/environment/cache/images/300_300_productGfx_9427/Lampa-podlogowa-z-czarnym-abazurem-z-serii-ALICE-L-4963-Nowodvorski.webp"
                                        alt=""
                                        width={100}
                                        height={100}
                                        className="rounded-md"
                                    />{" "}
                                </div>
                                <div>
                                    Lampa podłogowa z czarnym abażurem z serii
                                    ALICE L 4963 Nowodvorski
                                </div>
                                <div>999,00 zł</div>
                                <div>99 szt</div>
                                <div className="flex">
                                    <StarIcon className="w-6 h-6 text-yellow-400" />
                                    <span>4.5</span>
                                </div>
                                <div>false</div>
                                <div>true</div>
                                <div>false</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Products;
