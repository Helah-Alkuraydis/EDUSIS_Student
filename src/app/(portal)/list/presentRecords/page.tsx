import Pagination from "@/components/Pagination";
import Search from "@/components/Search"
import Table from "@/components/Table";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
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


const presentRecords = () => {

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
        
        </tr>
    );


    return (
        <div className="bg-white  rounded-md flex-1 gap-8">
            {/* TOP */}
            <div className="flex-col items-center justify-between">
                <h1 className="hidden md:block text-xl text-[#0A4D7E]  font-semibold mb-5">سجل الحضور</h1>
                <div className="flex flex-row justify-between w-full ">
                    <div className="flex flex-col md:flex-row items-end gap-4 mb-10 w-full md:w-auto ">
                        <Search />


                        <div className="flex items-end gap-4 self-end text-(--graytext)">
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium">ترتيب حسب:</label>
                                <Select dir='rtl'>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="التاريخ " />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup >
                                            <SelectItem value="apple">التاريخ</SelectItem>
                                            <SelectItem value="banana">الوقت </SelectItem>
                                        
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium">تصنيف حسب:</label>
                                <Select dir='rtl'>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="افتراضي" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup >
                                            <SelectItem value="apple">حاضر</SelectItem>
                                            <SelectItem value="banana">غائب</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
                {/* LIST */}
                <Table columns={columns} renderRow={renderRow} data={attendanceData} />
                {/* PAGINATION */}
                <Pagination />
            </div>
        </div> 
            )
}

export default presentRecords