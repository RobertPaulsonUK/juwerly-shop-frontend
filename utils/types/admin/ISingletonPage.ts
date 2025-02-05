import React from "react";
import {IBuilderField} from "@/utils/types/admin/IBuilderField";

export interface ISingletonPage {
    children? : React.ReactNode
    title : string
    dataUrl : string
}