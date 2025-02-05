"use client"
import {FC, FormEventHandler, JSX, useEffect, useState} from "react";
import {ISingletonPage} from "@/utils/types/admin/ISingletonPage";
import {useSession} from "next-auth/react";
import {fetchPageData} from "@/utils/data/admin/pages/fetchPageData";

const SingletonForm:FC<ISingletonPage> = ({title,children,dataUrl}):JSX.Element => {
    const { data: session } = useSession();
    const [data, setData] = useState(null);

    useEffect(() => {
        if (session?.user.token) {
            (async () => {
                const res = await fetchPageData({ url: dataUrl, token: session.user.token });
                if (res) {
                    setData(res);
                }
            })();
        }
    }, [session?.user.token]);

    const submitHandler:FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
    }

    return (
        <div className={"p-8 rounded bg-white text-gray"}>
            <form className={"flex flex-col gap-[15px]"} onSubmit={submitHandler}>
                {children}
                <button className={"px-[25px] py-[10px] bg-black text-white max-w-fit rounded mx-auto"} type={"submit"}>Submit</button>
            </form>
        </div>
    )
}
export default SingletonForm