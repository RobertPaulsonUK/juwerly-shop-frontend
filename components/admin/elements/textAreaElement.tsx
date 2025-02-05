"use client";
import { FC, JSX, useState } from "react";
import { ITextElement } from "@/utils/types/admin/BuilderElementsInterface";

const TextAreaElement: FC<ITextElement> = ({ label, name, required, value: defaultValue }): JSX.Element => {
    const [value, setValue] = useState<string>(defaultValue || "");

    return (
        <label className={"flex flex-col gap-[5px]"}>
            <span className={"text-[20px] leading-normal"}>{label}</span>
            <textarea className={"text-[16px] py-[4px] px-[8px] rounded border outline-0"}
                      name={name}
                      required={required}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}/>
        </label>
    );
};

export default TextAreaElement;
