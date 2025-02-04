import React, {FC, JSX} from "react";
import "./wrapper.scss";

interface Props {
    children: React.ReactNode
}
const PageWrapper:FC<Props> = ({children}):JSX.Element => {
    return (
        <div className={"page-wrapper bg-lightGray text-white ml-[75px] xl:ml-[350px] px-4 py-8 lg:px-8 lg:py-12 xl:px-12 xl:py-16"}>
            {children}
        </div>
    )
}
export default PageWrapper