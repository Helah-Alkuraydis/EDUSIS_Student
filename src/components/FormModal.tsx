"use client";

import { DiamondPlus, X } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { JSX, useState } from "react";

// USE LAZY LOADING

// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";


const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
    loading: () => <h1>Loading...</h1>,
});
 
const forms: {
    [key: string]: (type: "create" | "update" , data?: any) => JSX.Element;
} = {
    subjects: (type, data) => <SubjectForm type={type} data={data} />,
};

const FormModal = ({
    table,
    type,
    data,
    id,
}: {
    table:
    | "subjects"
    type: "create" | "update" | "delete";
    data?: any;
    id?: string;
}) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor =
        type === "create"
            ? "bg-lamaYellow"
            : type === "update"
                ? "bg-lamaSky"
                : "bg-lamaPurple";

    const [open, setOpen] = useState(false);

    const Form = () => {
        return type === "delete" && id ? (
            <form action="" className="p-4 flex flex-col gap-4">
                <span className="text-center font-medium">
                    All data will be lost. Are you sure you want to delete this {table}?
                </span>
                <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
                    Delete
                </button>
            </form>
        ) : type === "create" || type === "update" ? (
            forms[table](type, data)
        ) : (
            "Form not found!"
        );
    };

    return (
        <>
            <button
                className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
                onClick={() => setOpen(true)}
            >
                {/* <Image src={`/${type}.png`} alt="" width={16} height={16} /> */}
                <div className='flex items-center  justify-center cursor-pointer text-white mr-10 p-2 rounded-lg hover:bg-gray-500/10'>
                    <DiamondPlus size={24} strokeWidth={2} color={"#1786D9"} />
                  {/* <button className="w-fit rounded-lg bg-[#1786D9] p-1">
                      تسجيل جديد
                  </button> */}
                    
                </div>
            </button>
            {open && (
                <div className="w-screen h-screen fixed left-0 top-0 bg-[rgba(0,0,0,0.6)] z-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                        <Form />
                        <div
                            className="absolute top-4 left-4 cursor-pointer items-end"
                            onClick={() => setOpen(false)}
                        >
                            <X size={24} strokeWidth={2} color="#dc2626" className=' rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-500/10' />

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FormModal;