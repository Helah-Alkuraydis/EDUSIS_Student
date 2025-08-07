import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
import Table from '@/components/Table';
import { ExamsResult } from '@/lib/data';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
type ExamRecord = {
    exam: string;
    totalMarks: number;
    percentage: number;
    grade: string;
    status: string;
};

const columns = [
    {
        header: "الامتحان",
        accessor: "exam",
        className: "pr-3",
    },
    {
        header: "الدرجة الكلية",
        accessor: "totalMarks",
        className: "hidden md:table-cell",
    },
    {
        header: "النسبة المئوية",
        accessor: "percentage",
        className: "hidden md:table-cell",
    },
    {
        header: "التقدير",
        accessor: "grade",
        className: "hidden md:table-cell",
    },
    {
        header: "الحالة",
        accessor: "status",
        className: "hidden md:table-cell",
    },
];

const NewRegistration = () => {
    const renderRow = (item: ExamRecord) => (
        <tr
            key={item.exam}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            <td className="flex justify-start mb-4 mt-4 mr-4 text-(--graytext) font-medium">{item.exam}</td>
            <td className="hidden md:table-cell text-(--graytext) font-medium">{item.totalMarks}</td>
            <td className="hidden md:table-cell text-(--graytext) font-medium">{item.percentage}</td>
            <td className="hidden md:table-cell text-(--graytext) font-medium">{item.grade}</td>
            <td className="hidden md:table-cell text-(--graytext) font-medium"> <span
                className={
                    item.status === "🎉 ناجح "
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
        </tr>
    );

    return (
        <div className="bg-white rounded-md flex-1 mt-0 gap-8">
            {/* HEADER & FILTERS */}
            <div className="flex items-center justify-between mb-5">
                <h1 className="hidden md:block text-xl text-[#0A4D7E] font-semibold">نتائج المقررات</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mb-8">
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
                                    <SelectItem value="apple">الامتحان</SelectItem>
                                    <SelectItem value="banana">الدرجة الكلية</SelectItem>
                                    <SelectItem value="blueberry">النسبة المئوية</SelectItem>
                                    <SelectItem value="grapes">التقدير</SelectItem>
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
                                    <SelectItem value="apple">Fail</SelectItem>
                                    <SelectItem value="banana">Pass</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={ExamsResult} />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};
export default NewRegistration