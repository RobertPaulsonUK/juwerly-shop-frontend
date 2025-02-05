"use client"
import {FC, JSX, useState} from "react";
import {ILinkElement, LinkInterface} from "@/utils/types/admin/BuilderElementsInterface";
import PreviewLink from "@/components/admin/elements/parts/link/previewLink";
import CreateLink from "@/components/admin/elements/parts/link/createLink";

const LinkElement:FC<ILinkElement> = ({name,label,required,value:defaultValue}):JSX.Element => {
    const [value, setValue] = useState<LinkInterface | null>(defaultValue ?? null);
    const editHandler = (data:LinkInterface | null) => setValue(data)
    return (
        <div className={"flex flex-col gap-[5px]"}>
            <h4 className={"text-[20px] leading-normal"}>{name}</h4>
            <div className={"flex gap-[10px]"}>
                {value && <PreviewLink title={value.title} url={value.url} target={value.target} updateHandler={editHandler}/> }
                {!value && <CreateLink createHandler={editHandler}/>}
            </div>

        </div>
    )
}
export default LinkElement