"use client"
import {FC, JSX} from "react";
import {signIn} from "next-auth/react";
import type {FormEventHandler} from 'react';
import {useRouter} from "next/navigation";
const LoginForm:FC = ():JSX.Element => {
    const router = useRouter()
    const handleSubmit:FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const res = await signIn("credentials",{
            email : formData.get('email'),
            password : formData.get('password'),
            redirect: false
        })
        if (!res?.error) {
            router.push("/admin");
        } else {
            console.log("Ошибка авторизации:", res.error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className={"bg-white p-16 rounded flex flex-col gap-[20px]"}>
            <h1 className={"text-black text-xl text-center"}>Sign in</h1>
            <input type={"email"} name={"email"} required={true} className={"rounded border p-[4px]"}/>
            <input type={"password"} name={"password"} required={true} className={"rounded border p-[4px]"}/>
            <button type={"submit"}>Submit</button>
        </form>
    )
}
export default LoginForm