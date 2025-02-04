import {FC, JSX} from "react";
import HomeIcon from "@/components/icons/admin/homeIcon";
import Link from "next/link";
import LogoutLink from "@/components/admin/layout/logoutLink";

const Header:FC = ():JSX.Element => {
    return (
        <header className="flex p-4 items-center justify-between">
            <HomeIcon/>
            <LogoutLink/>
        </header>
    )
}
export default Header