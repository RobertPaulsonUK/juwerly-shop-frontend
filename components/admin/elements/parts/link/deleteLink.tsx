import {FC, JSX} from "react";
import {LinkInterface} from "@/utils/types/admin/BuilderElementsInterface";
import TargetIcon from "@/components/icons/admin/targetIcon";
import EditIcon from "@/components/icons/admin/actions/editIcon";
import DeleteIcon from "@/components/icons/admin/actions/deleteIcon";

interface Props {
    deleteHandler : () => void
}
const EditLink:FC<Props> = ({deleteHandler}):JSX.Element => {
    return (
        <div className={"text-red-800 cursor-pointer"} onClick={deleteHandler}>
            <DeleteIcon/>
        </div>
    )
}
export default EditLink