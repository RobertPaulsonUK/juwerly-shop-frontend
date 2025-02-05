"use client"
import {FC, JSX, useState} from "react";
import {LinkInterface} from "@/utils/types/admin/BuilderElementsInterface";
import TextElement from "@/components/admin/elements/textElement";
import DeleteIcon from "@/components/icons/admin/actions/deleteIcon";

interface Props {
    title? : string
    url? : string
    target? : string
    updateHandler  : (data:LinkInterface | null) => void
    closeHandler  : () => void
}
const ModalLink:FC<Props> = ({title, url,target,updateHandler,closeHandler}):JSX.Element => {
    const [titleField,setTitleField] = useState<string>(title ?? '')
    const [urlField,setUrlField] = useState<string>(url ?? '')
    const [targetField,setTargetField] = useState<string>(target ?? '_self')
    return (
        <div className={"fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] p-4 bg-lightGray rounded border border-black min-w-[400px]"}>
            <div className={"cursor-pointer absolute top-[5px] right-[5px] text-red-700"} onClick={closeHandler}>
                <DeleteIcon/>
            </div>
            <label className={"flex flex-col gap-[5px]"}>
                <span className={"text-[18px] leading-normal"}>Title</span>
                <input
                    type="text"
                    value={titleField}
                    className={"text-[16px] py-[4px] px-[8px] rounded border outline-0"}
                    onChange={(e) => setTitleField(e.target.value)}
                />
            </label>
            <label className={"flex flex-col gap-[5px] mt-[10px]"}>
                <span className={"text-[18px] leading-normal"}>Url</span>
                <input
                    type="text"
                    value={urlField}
                    className={"text-[16px] py-[4px] px-[8px] rounded border outline-0"}
                    onChange={(e) => setUrlField(e.target.value)}
                />
            </label>
            <div className={"mt-[10px]"}>
                <span className={"text-[18px] leading-normal"}>Open in another tab?</span>
                <div className={"flex"}>
                    <label className={"flex items-center gap-[10px]"}>
                        <span className={"text-[18px] leading-normal"}>Yes</span>
                        <input type={"radio"}
                               name={"target"}
                               value={"_blank"}
                               onChange={ () => {
                                   setTargetField("_blank")
                               }}
                               checked={targetField === '_blank'}/>
                    </label>
                    <label className={"ml-[10px] flex items-center gap-[10px]"}>
                        <span className={"text-[18px] leading-normal"}>No</span>
                        <input type={"radio"}
                               name={"target"}
                               value={"_self"}
                               onChange={ () => {
                                   setTargetField("_self")
                               }}
                               checked={targetField === '_self'}/>
                    </label>
                </div>
            </div>
            <button className={" mt-[10px] px-[25px] py-[10px] bg-black text-white max-w-fit rounded mx-auto"}
                    onClick={(e) => {
                    e.preventDefault()
                    let sendData = {
                        title : titleField,
                        url : urlField,
                        target : targetField
                    }
                    updateHandler(sendData)
                    closeHandler()
            }}>
                Submit
            </button>
        </div>
    )
}
export default ModalLink
