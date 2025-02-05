import {FC, JSX} from "react";
import Link from "next/link";


interface Props {
    title : string
    url : string
    Icon? : React.ComponentType
    clickHandler? : () => void
    isMainItem? : boolean
    isActive? : boolean
    classes? : string
}
const AsideItem:FC<Props> = (
    {title,url,Icon,clickHandler,isMainItem,isActive,classes}
) => {
    return(
        <Link href={url}
              onClick={clickHandler ? (e) => {
                  e.preventDefault();
                  clickHandler?.();
              } : undefined}
              className={`flex justify-items-start gap-[20px] leading-normal ${classes ?? ''} ${isMainItem ? 'text-[20px] font-semibold' : 'text-[16px]'} ${isActive ? 'text-blue' : 'text-gray'}`}>
            {Icon && <Icon/>}
            {title}
        </Link>
    )
}
export default AsideItem