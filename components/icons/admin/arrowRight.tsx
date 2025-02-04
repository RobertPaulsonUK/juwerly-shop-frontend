import {FC, JSX} from "react";

interface Props {
    classes? : string
    isActive : boolean
    clickHandler : () => void
}
const ArrowRight:FC<Props> = ({classes,isActive,clickHandler}):JSX.Element => {
    return(
        <div onClick={clickHandler} className={isActive ? 'text-blue' : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`aside__item-arrow size-6 ${classes} ${isActive ? ' active' : ''}`}>
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
            </svg>
        </div>
    )
}
export default ArrowRight