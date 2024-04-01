import { GoChevronRight } from "react-icons/go"
export default function BreadCrumb({ name }) {
    return (
        <div className="breadcrumb mt-16 font-semibold flex items-center gap-2">
            <p className=" ">Patients </p> <GoChevronRight className="inline" size={24} /> <p className="text-[#2D56FD]"> {name || "No name"}</p>
        </div>
    )
}