"use client"
import {FC, JSX} from "react";
import { useSession } from "next-auth/react"

const GreetingElem:FC = ():JSX.Element => {
    const { data: session } = useSession()


    if (session?.user?.role === "admin") {
        return <h1>You are an admin, welcome!</h1>
    }

    return <p>You are not authorized to view this page!</p>
}
export default GreetingElem