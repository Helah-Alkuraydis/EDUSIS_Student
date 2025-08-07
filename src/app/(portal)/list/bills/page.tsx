import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Search from '@/components/Search';
import Table from '@/components/Table';
import { invoices } from "@/lib/data";
import Pagination from "@/components/Pagination";

type record = {
    id: string,
    semester: string,
    date: string,
    invoiceRef: string,
    feesAmount: string,
    status: string,
    invoice: string,

}

const columns = [
    {
        header: "الرقم المرجعي",
        accessor: "invoiceRef",

    },
    {
        header: "التاريخ",
        accessor: "date",
        className: "hidden md:table-cell",
    },

    {
        header: "الاجمالي",
        accessor: "feesAmount",
        className: "hidden md:table-cell",
    },
    {
        header: "الحالة",
        accessor: "status",
        className: "hidden md:table-cell",
    },
    {
        header: "الفاتورة",
        accessor: "invoice",
        className: "hidden md:table-cell",
    },

];


const Bills = () => {
    const semesters = [...new Set(invoices.map((item) => item.id))];

    const renderRow = (item: record) => (
        <tr
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            <td className="hidden md:table-cell font-medium">{item.invoiceRef}</td>
            <td className="hidden md:table-cell font-medium ">{item.date}</td>
            <td className="hidden md:table-cell font-medium">{item.feesAmount}</td>
            <td className="hidden md:table-cell font-medium">{item.status}</td>
            <td className="hidden md:table-cell font-medium">{item.invoice}</td>

        </tr>
        )


    return (
        <div className="bg-white rounded-md flex-1 gap-8">
            {/* HEADER & FILTERS */}
            <div className="flex items-center justify-between mb-5">
                <h1 className="hidden md:block text-xl text-[#0A4D7E] font-semibold"> الفواتير</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mb-8">
                <Search />

                <div className="flex items-end gap-4 text-gray-600">
                    {/* ترتيب حسب */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-medium">ترتيب حسب:</label>
                        <Select dir="rtl">
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="تاريخ الرفع" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="exam">الامتحان</SelectItem>
                                    <SelectItem value="total">الدرجة الكلية</SelectItem>
                                    <SelectItem value="percentage">النسبة المئوية</SelectItem>
                                    <SelectItem value="grade">التقدير</SelectItem>
                                    <SelectItem value="status">الحالة</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* تصنيف حسب */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-medium">تصنيف حسب:</label>
                        <Select dir="rtl">
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="افتراضي" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="fail">راسب</SelectItem>
                                    <SelectItem value="pass">ناجح</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {/* TABLES PER SEMESTER */}
            <div className="flex flex-col gap-10 w-full">
                {semesters.map((id) => {
                    const dataForSemester = invoices.filter(
                        (item) => item.id === id
                    );

                    return (
                        <div key={id}>
                            <h2 className="text-md md:text-lg font-semibold text-lamaPurple mb-2">
                                {id}
                            </h2>
                            <Table columns={columns} renderRow={renderRow} data={dataForSemester} />
                        </div>
                    );
                })}
            </div>

            {/* PAGINATION (اختياري لو بتستخدمه لكل الجدول كامل) */}
            <Pagination />
        </div>
    )
}

export default Bills