"use client"
import {FC, JSX, useEffect, useState} from "react";
import {LinkInterface} from "@/utils/types/admin/BuilderElementsInterface";
import TargetIcon from "@/components/icons/admin/targetIcon";
import EditIcon from "@/components/icons/admin/actions/editIcon";
import ModalLink from "@/components/admin/elements/parts/link/modalLink";

interface Props extends LinkInterface{
    updateHandler : (data:LinkInterface | null) => void
}
const EditLink:FC<Props> = ({title,url,target,updateHandler}):JSX.Element => {
    const [isUpdating,setIsUpdating] = useState<boolean>(false)
    useEffect(() => {
        setIsUpdating(false)
    },[])
    const toggleHandler = () => setIsUpdating(!isUpdating)
    return (
        <>
            <div className={"cursor-pointer"} onClick={toggleHandler}>
                <EditIcon/>
            </div>
            {isUpdating && <ModalLink title={title}
                                      url={url}
                                      target={target}
                                      updateHandler={updateHandler}
                                      closeHandler={toggleHandler}/> }
        </>
    )
}
export default EditLink