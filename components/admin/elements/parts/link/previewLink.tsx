import {FC, JSX} from "react";
import {LinkInterface} from "@/utils/types/admin/BuilderElementsInterface";
import TargetIcon from "@/components/icons/admin/targetIcon";
import EditLink from "@/components/admin/elements/parts/link/editLink";
import DeleteLink from "@/components/admin/elements/parts/link/deleteLink";

interface Props extends LinkInterface {
    updateHandler : (data:LinkInterface | null) => void
}
const PreviewLink:FC<Props> = ({title,url,target,updateHandler}):JSX.Element => {
    const deleteHandler = () => updateHandler(null)

    return (
        <div className={"flex items-center justify-between gap-[10px] w-full rounded border py-[4px] px-[8px]"}>
            <div className={"flex items-center justify-start gap-[10px]"}>
                <div>
                    {title}
                </div>
                <div className={"text-blue cursor-pointer underline"}>
                    {url}
                </div>
                <div>
                    {(target === '_blank') && <TargetIcon/>}
                </div>
            </div>
            <div className={"flex items-center justify-center gap-[10[px] p-2 rounded border"}>
                <EditLink title={title} url={url} target={target} updateHandler={updateHandler}/>
                <DeleteLink deleteHandler={deleteHandler}/>
            </div>
        </div>
    )
}
export default PreviewLink