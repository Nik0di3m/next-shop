import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Input from "../Input/Input";
interface LoginData {
    email: string;
    password: string;
}

const LoginForm = () => {
    const [userData, setUserData] = useState<LoginData>({
        email: "",
        password: "",
    });

    const router = useRouter();

    const sendLoginForm = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios
            .post(`/api/login`, {
                email: userData.email,
                password: userData.password,
            })
            .then((res) => {
                router.push("/admin");
            })
            .catch((err) => {
                alert("Bad credentials");
            });
    };

    const handleChangeLogin = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUserData((prev) => ({
            ...prev,
            email: e.target.value,
        }));
    };

    const handleChangePassword = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUserData((prev) => ({
            ...prev,
            password: e.target.value,
        }));
    };

    return (
        <div className="px-4 py-6 border rounded-md w-[400px] bg-zinc-800 shadow-md">
            <div>
                <h1 className="text-xl">Next E-commerce</h1>
            </div>
            <form
                onSubmit={(e) => sendLoginForm(e)}
                className="w-full mt-8 space-y-3"
            >
                <div>
                    <Input onChange={handleChangeLogin} />
                </div>
                <div>
                    <Input
                        type="password"
                        onChange={handleChangePassword}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="reset"
                        className="px-5 py-3 duration-150 bg-yellow-800 rounded-md shadow-md hover:scale-105 active:scale-75"
                    >
                        Wróć
                    </button>
                    <button
                        type="submit"
                        className="px-5 py-3 duration-150 bg-green-800 rounded-md shadow-md hover:scale-105 active:scale-75"
                    >
                        Zaloguj
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
