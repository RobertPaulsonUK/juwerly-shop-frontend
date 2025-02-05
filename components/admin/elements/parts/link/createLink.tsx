"use client"
import {FC, JSX, useEffect, useState} from "react";
import {LinkInterface} from "@/utils/types/admin/BuilderElementsInterface";
import ModalLink from "@/components/admin/elements/parts/link/modalLink";
import Link from "next/link";

interface Props {
    createHandler : (data:LinkInterface | null) => void
}
const CreateLink:FC<Props> = ({createHandler}):JSX.Element => {
    const [isCreating,setIsCreating] = useState<boolean>(false)
    useEffect(() => {
        setIsCreating(false)
    },[])

    const toggleHandler = () => setIsCreating(!isCreating)

    return (
        <div className={"mt-[5px]"}>
            <Link href={""}
                  className={"text-blue rounded border py-[4px] px-[8px]"}
                  onClick={(e) => {
                e.preventDefault()
                toggleHandler()
            }}>
                Create link
            </Link>
            {isCreating && <ModalLink updateHandler={createHandler} closeHandler={toggleHandler} url={""} target={"_self"} title={""}/> }
        </div>

    )
}
export default CreateLink