"use client"
import {FC, JSX, useEffect, useState} from "react";
import "./aside.scss";
import AsideItem from "@/components/admin/layout/aside/asideItem";
import ArrowRight from "@/components/icons/admin/arrowRight";

interface Props {
    title : string
    icon : React.ComponentType
    children: React.ReactNode
}
const Group:FC<Props> = ({title,icon,children}) => {
    const [isActive,setIsActive] = useState<boolean>(false)
    const toggleHandler = () => {
        setIsActive(!isActive)
    }
    useEffect(() => {
        setIsActive(false)
    }, []);
    return (
        <div className="w-full overflow-y-hidden py-[20px]">
            <div className={"flex items-center justify-between"}>
                <AsideItem title={title}
                           url={"#"}
                           Icon={icon}
                           isMainItem={true}
                           isActive={isActive}
                           clickHandler={toggleHandler}/>
                <ArrowRight classes={""}
                            isActive={isActive}
                            clickHandler={toggleHandler}/>
            </div>
            <div className={`aside__group-list pl-[50px] flex flex-col gap-[20px] box-content max-h-0 opacity-0 pointer-events-none transition-all ease-in-out ${isActive ? 'active' : ''}`}>
                {children}
            </div>
        </div>
    )
}
export default Group
