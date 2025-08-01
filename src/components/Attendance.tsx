import { Calendar, Clock } from "lucide-react"

import Table from "@/components/Table";
import Image from "next/image";
import { attendanceData } from "@/lib/data";

type Class = {
    id: number;
    subject: string;
    date: String,
    time: string,
    status: string,
};

const columns = [
    {
        header: "اسم المقرر",
        accessor: "subject",
        className: "pr-4",
    },
    {
        header: "التاريخ",
        accessor: "date",
        className: "hidden md:table-cell",
    },
    {
        header: "الوقت",
        accessor: "time",
        className: "hidden md:table-cell",
    },
    {
        header: "الحالة",
        accessor: "status",
        className: "hidden md:table-cell",
    },
]
const Attendance = () => {
    const renderRow = (item: Class) => (
        <tr
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            <td className="flex justify-start mb-4 mt-4 mr-4 text-(--graytext)">{item.subject}</td>
            <td className="hidden md:table-cell text-(--graytext)">{item.date}</td>
            <td className="hidden md:table-cell text-(--graytext)">{item.time}</td>
            <td className="hidden md:table-cell text-(--graytext) "> <span
                className={
                    item.status === "حاضر"
                        ? "text-[#61A249] rounded-sm font-semibold"
                        : item.status === "غائب"
                            ? "text-red-600 font-semibold"
                            : item.status === "بعذر"
                                ? "text-yellow-600 font-semibold"
                                : "text-gray-400 font-semibold"
                }
            >
                {item.status}
            </span></td>
            <td>

            </td>
        </tr>
    );
    return (


        <div className="w-full flex flex-col gap-4 ">

            <div className="w-full flex items-center justify-between">
                <span className="text-(--graytext) font-semibold text-m">سجل الحضور</span>
                <button className="text-(--buttonColor) font-semibold text-m hover:bg-gray-500/10 rounded-2xl p-1 pr-2 pl-2" >عرض الكل</button>
            </div>

            <Table columns={columns} renderRow={renderRow} data={attendanceData} />
        </div>

    )
}

export default Attendance