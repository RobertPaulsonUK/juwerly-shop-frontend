"use client"
import {JSX, useState} from "react";
import Group from "@/components/admin/layout/aside/group";
import PagesIcon from "@/components/icons/admin/pagesIcon";
import AsideItem from "@/components/admin/layout/aside/asideItem";
import ShopIcon from "@/components/icons/admin/shopIcon";
import ProductIcon from "@/components/icons/admin/productIcon";
import CategoryIcon from "@/components/icons/admin/categoryIcon";
import AttributeIcon from "@/components/icons/admin/attributeIcon";
import HomePageIcon from "@/components/icons/admin/pages/homePageIcon";
import AboutPageIcon from "@/components/icons/admin/pages/aboutPageIcon";
import ContactsPageIcon from "@/components/icons/admin/pages/contactsPageIcon";
import AnalyticsPageIcon from "@/components/icons/admin/pages/analyticsPageIcon";
import PaymentDeliveryPageIcon from "@/components/icons/admin/pages/paymentDeliveryPageIcon";
import PaymentTutorialPageIcon from "@/components/icons/admin/pages/paymentTutorialPageIcon";
import OrderIcon from "@/components/icons/admin/orderIcon";
import SettingsIcon from "@/components/icons/admin/settingsIcon";
import MenuIcon from "@/components/icons/admin/menuIcon";
import UsersIcon from "@/components/icons/admin/usersIcon";
import ReviewIcon from "@/components/icons/admin/reviewIcon";
import Burger from "@/components/ui/buttons/burger";
const Aside = (): JSX.Element => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const toggleHandler = () => setIsOpen(!isOpen)
    return (
        <div className={`aside bg-white text-gray px-4 pt-4 fixed top-[72px] w-full h-[95vh] overflow-x-hidden max-w-[75px] xl:max-w-[350px] ${isOpen ? 'active' : ''}`}>
            <div className={"xl:hidden"}>
                <Burger clickHandler={toggleHandler}
                        classes={"ml-auto"}
                        isActive={isOpen}
                        isStatic={true}/>
            </div>
            <div className={`pr-2 ${!isOpen ? 'hidden xl:block' : ''}`}>
                <Group title={"Pages"} icon={PagesIcon}>
                    <AsideItem title={"Home Page"} url={"/admin/home-page"} Icon={HomePageIcon}/>
                    <AsideItem title={"About Page"} url={"/admin/about-page"} Icon={AboutPageIcon}/>
                    <AsideItem title={"Contacts Page"} url={"admin/contacts-page"} Icon={ContactsPageIcon}/>
                    <AsideItem title={"Analytics Page"} url={"admin/analytics-page"} Icon={AnalyticsPageIcon}/>
                    <AsideItem title={"Payment Delivery Page"} url={"admin/payment-delivery"} Icon={PaymentDeliveryPageIcon}/>
                    <AsideItem title={"Payment Tutorial Page"} url={"admin/payment-tutorial"} Icon={PaymentTutorialPageIcon}/>
                </Group>
                <Group title={"Shop"} icon={ShopIcon}>
                    <AsideItem title={"Products"} url={"/admin/products"} Icon={ProductIcon}/>
                    <AsideItem title={"Product Categories"} url={"/admin/product-categories"} Icon={CategoryIcon}/>
                    <AsideItem title={"Product Attributes"} url={"/admin/product-attributes"} Icon={AttributeIcon}/>
                    <AsideItem title={"Orders"} url={"/admin/orders"} Icon={OrderIcon}/>
                </Group>
                <AsideItem title={"Users"} url={"/admin/users"} Icon={UsersIcon} isMainItem={true} classes={"py-4"}/>
                <AsideItem title={"Reviews"} url={"/admin/reviews"} Icon={ReviewIcon} isMainItem={true} classes={"py-4"}/>
                <AsideItem title={"Menus"} url={"/admin/menus"} Icon={MenuIcon} isMainItem={true} classes={"py-4"}/>
                <AsideItem title={"Settings"} url={"/admin/settings"} Icon={SettingsIcon} isMainItem={true} classes={"py-4"}/>
            </div>
        </div>
    )
}
export default Aside