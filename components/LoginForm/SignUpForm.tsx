import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Input from "../Input/Input";
interface LoginData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const SignUpForm: React.FC = () => {
    const [userData, setUserData] = useState<LoginData>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const router = useRouter();

    const sendLoginForm = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios
            .post(`/api/auth/sign-up`, {
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                password: userData.password,
            })
            .then((res) => {
                console.log(res);
                setUserData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                });
            })
            .catch((err) => {
                alert("Bad credentials");
            });
    };

    const handleChangeFirstName = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUserData((prev) => ({
            ...prev,
            firstName: e.target.value,
        }));
    };

    const handleChangeLastName = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUserData((prev) => ({
            ...prev,
            lastName: e.target.value,
        }));
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
                <h1 className="text-xl">SignUp</h1>
            </div>
            <form
                onSubmit={(e) => sendLoginForm(e)}
                className="w-full mt-8 space-y-3"
            >
                <div>
                    <Input
                        placeholder="Enter First Name"
                        onChange={handleChangeFirstName}
                    />
                </div>
                <div>
                    <Input
                        placeholder="Enter Last Name"
                        onChange={handleChangeLastName}
                    />
                </div>
                <div>
                    <Input
                        placeholder="Enter Email"
                        onChange={handleChangeLogin}
                    />
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

export default SignUpForm;
