import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
import Table from '@/components/Table';
import { registrations } from '@/lib/data';
import { SquarePen, Trash2 } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import FormModal from '@/components/FormModal';
import Link from 'next/link';
type record = {
    id: string;
    name: string;
    admissionDate: string;
    applicationDate: string;
    course: string;
    status: string;
};
const columns = [
    {
        header: "رقم المعاملة",
        accessor: "id",
        className: "pr-3",
    },
    {
        header: "الاسم",
        accessor: "name",
        className: "hidden md:table-cell",
    },
    {
        header: "تاريخ القبول",
        accessor: "admissionDate",
        className: "hidden md:table-cell",
    },
    {
        header: "تاريخ الرفع",
        accessor: "applicationDate",
        className: "hidden md:table-cell",
    },
    {
        header: "الفصل",
        accessor: "course",
        className: "hidden md:table-cell",
    },
    {
        header: "الحالة",
        accessor: "status",
        className: "hidden md:table-cell",
    },
    {
        header: "تعديل",
        accessor: "edit",
        className: "hidden md:table-cell",
    },
]

const NewRegistration = () => {
    const renderRow = (item: record) => (
        <tr
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            <td className="flex justify-start mb-4 mt-4 mr-4 text-(--graytext) font-medium">{item.id}</td>
            <td className="hidden md:table-cell text-(--graytext) font-medium">{item.name}</td>
            <td className="hidden md:table-cell text-(--graytext) font-medium">{item.admissionDate}</td>
            <td className="hidden md:table-cell text-(--graytext) font-medium">{item.applicationDate}</td>
            <td className="hidden md:table-cell text-(--graytext) font-medium">{item.course}</td>
            <td className="hidden md:table-cell text-(--graytext) font-medium"> <span
                className={
                    item.status === "نُفّذ"
                        ? "text-[#61A249] rounded-sm font-semibold"
                        : item.status === "مرفوض"
                            ? "text-red-600 font-semibold"
                            : item.status === "تحت المراجعة"
                                ? "text-yellow-600 font-semibold"
                                : "text-gray-400 font-semibold"
                }
            >
                {item.status}
            </span></td>
            <td>
                <div className="flex items-center gap-2">
                    {/* <Link href={`/list/newRegistration/${item.id}`}>  */}
                    <button className="rounded-md w-7 h-7 flex items-center justify-center cursor-pointer  hover:bg-gray-500/10">
                        <SquarePen size={16} strokeWidth={2} color={"#1786D9"} />
                    </button>
                    {/* </Link>  */}
                    <button className="rounded-md w-7 h-7 flex items-center justify-center cursor-pointer  hover:bg-gray-500/10">
                        <Trash2 size={16} strokeWidth={2} color={"#1786D9"} />
                    </button>
                    {/* <FormModal table="subjects" type="delete" id={item.id}/> */}

                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-white  rounded-md flex-1 gap-8">
            {/* TOP */}
            <div className="flex-col items-center justify-between">
                <h1 className="hidden md:block text-xl text-[#0A4D7E]  font-semibold mb-5">تسجيل المواد</h1>
                <div className="flex flex-row justify-between w-full ">
                    <div className="flex flex-col md:flex-row items-end gap-4 mb-10 w-full md:w-auto ">
                        <Search />


                        <div className="flex items-end gap-4 self-end text-(--graytext)">
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium">ترتيب حسب:</label>
                                <Select dir='rtl'>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="تاريخ الرفع" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup >
                                            <SelectItem value="apple">الاسم</SelectItem>
                                            <SelectItem value="banana">تاريخ القبول</SelectItem>
                                            <SelectItem value="blueberry">تاريخ الرفع</SelectItem>
                                            <SelectItem value="grapes">الفصل</SelectItem>
                                            <SelectItem value="pineapple">الحالة</SelectItem>
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
                                            <SelectItem value="apple">الأعمال</SelectItem>
                                            <SelectItem value="banana">المحاسبة</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <FormModal table="subjects" type="create" />

                        </div>
                    </div>
                </div>
                {/* LIST */}
                <Table columns={columns} renderRow={renderRow} data={registrations} />
                {/* PAGINATION */}
                <Pagination />
            </div>
        </div>
    );
};
export default NewRegistration