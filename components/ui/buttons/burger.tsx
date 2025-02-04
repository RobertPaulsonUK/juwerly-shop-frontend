import {FC, JSX} from "react";
import "./burger.scss"

interface Props {
    classes? : string
    clickHandler : () => void
    isActive : boolean
    isStatic : boolean
}
const Burger:FC<Props> = ({classes,clickHandler,isActive,isStatic}):JSX.Element => {
    return(
        <button className={
            `burger block cursor-pointer h-[40px] w-[45px] p-2 bg-transparent ${classes} ${isActive ? 'active' : ''} ${isStatic ? 'static' : 'absolute right-[10px] top-[10px]'}`
        }
            onClick={clickHandler}
        >
            <span className={"block h-[3px] w-full bg-gray transition ease-linear"}></span>
            <span className={"block h-[3px] mt-[3px] w-full bg-gray transition ease-linear"}></span>
            <span className={"block h-[3px] mt-[3px] w-full bg-gray transition ease-linear"}></span>
        </button>
    )
}
export default Burger