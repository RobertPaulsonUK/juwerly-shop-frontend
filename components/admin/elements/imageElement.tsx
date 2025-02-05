"use client";
import { FC, JSX, useState, ChangeEvent } from "react";
import { ITextElement } from "@/utils/types/admin/BuilderElementsInterface";
import Image from "next/image";

const ImageElement: FC<ITextElement> = ({ label, name, required, value: defaultValue }): JSX.Element => {
    const [value, setValue] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(defaultValue || null);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
            setValue(file);
        }
    };

    return (
        <label className="flex flex-col gap-[5px]">
            <span className="text-[20px] leading-normal">{label}</span>
            <input type="file" name={name} required={required} onChange={changeHandler} />
            {preview && (
                <div className="w-[150px] h-[100px] relative">
                    <Image src={preview} alt="Preview" width={150} height={100} className="object-cover rounded" />
                </div>
            )}
        </label>
    );
};

export default ImageElement;
