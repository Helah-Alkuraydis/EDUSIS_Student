import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
import Table from '@/components/Table';
import { gradesbookData } from '@/lib/data';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type gradesbook1 = {
    semester: string,
    code: string,
    subject: string,
    name: string,
    grade: string,
    credit: number,
    gpa: string,
    obtained: {
        assignments: string;
        midterm: string;
        final: string;
        practical: string;
    },
    finalGrades: "string"

}

const columns = [
    {
        header: "الرمز",
        accessor: "code",
        className: "pr-3",
    },
    {
        header: "المقرر",
        accessor: "subject",
        className: "hidden md:table-cell",
    },
    {
        header: "استاذ المقرر",
        accessor: "name",
        className: "hidden md:table-cell",
    },
    {
        header: "التقدير",
        accessor: "grade",
        className: "hidden md:table-cell",
    },
    {
        header: "الساعات",
        accessor: "credit",
        className: "hidden md:table-cell",
    },
    {
        header: "المعدل",
        accessor: "gpa",
        className: "hidden md:table-cell",
    },
    {
        header: "المتطلبات",
        accessor: "obtained",
        className: "hidden md:table-cell",
    },
    {
        header: "المجموع",
        accessor: "finalGrades",
        className: "hidden md:table-cell",
    },
];

// const GradesBook = () => {
//     const semesters = [...new Set(gradesbookData.map(item => item.semester))];

//     const renderRow = (item: gradesbook1) => (
//         <tr
//             key={item.code}
//             className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight "
//         >
//             <td className="hidden md:table-cell text-(--graytext) font-medium pr-4">{item.code}</td>
//             <td className="hidden md:table-cell text-(--graytext) font-medium">{item.subject}</td>

//             <td className="hidden md:table-cell text-(--graytext) font-medium">{item.name}</td>
//             <td className="hidden md:table-cell text-(--graytext) font-medium">{item.grade}</td>
//             <td className="hidden md:table-cell text-(--graytext) font-medium">{item.credit}</td>
//             <td className="hidden md:table-cell text-(--graytext) font-medium">{item.gpa}</td>
//             <td className="hidden md:table-cell text-(--graytext) font-mediu flex-col gap-2 p-2">
//                 {Object.entries(item.obtained).map(([key, value]) =>
//                     value ? <p key={key}>{value}</p> : null
//                 )}
//             </td>
//             <td className="hidden md:table-cell text-(--graytext) font-medium">{item.finalGrades}</td>


//         </tr>
//     );

//     return (
//         <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0 gap-8">
//             {/* TOP */}
//             <div className="flex items-center justify-between ">
//                 <h1 className="hidden md:block text-xl text-[#0A4D7E]  font-semibold mb-5">السجل الأكاديمي</h1>
//                 <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
//                     <Search />


//                     <div className="flex items-end gap-4 self-end text-(--graytext)">
//                         <div className="flex items-center gap-2">
//                             <label className="text-sm font-medium">ترتيب حسب:</label>
//                             <Select dir='rtl'>
//                                 <SelectTrigger className="w-[180px]">
//                                     <SelectValue placeholder="تاريخ الرفع" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectGroup >
//                                         <SelectItem value="apple">الامتحان</SelectItem>
//                                         <SelectItem value="banana">الدرجة الكلية</SelectItem>
//                                         <SelectItem value="blueberry">النسبة المئوية</SelectItem>
//                                         <SelectItem value="grapes">التقدير</SelectItem>
//                                         <SelectItem value="pineapple">الحالة</SelectItem>
//                                     </SelectGroup>
//                                 </SelectContent>
//                             </Select>
//                         </div>

//                         <div className="flex items-center gap-2">
//                             <label className="text-sm font-medium">تصنيف حسب:</label>
//                             <Select dir='rtl'>
//                                 <SelectTrigger className="w-[180px]">
//                                     <SelectValue placeholder="افتراضي" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectGroup >
//                                         <SelectItem value="apple">Fail</SelectItem>
//                                         <SelectItem value="banana">Pass</SelectItem>
//                                     </SelectGroup>
//                                 </SelectContent>
//                             </Select>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//             {/* LIST */}
//             <Table columns={columns} renderRow={renderRow} data={gradesbookData} />
//             {/* PAGINATION */}
//             <Pagination />
//         </div>
//     );
// };

const GradesBook = () => {
  const semesters = [...new Set(gradesbookData.map((item) => item.semester))];

  const renderRow = (item: gradesbook1) => (
    <tr
      key={item.code}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="hidden md:table-cell font-medium pr-4">{item.code}</td>
      <td className="hidden md:table-cell font-medium ">{item.subject}</td>
      <td className="hidden md:table-cell font-medium">{item.name}</td>
      <td className="hidden md:table-cell font-medium">{item.grade}</td>
      <td className="hidden md:table-cell font-medium">{item.credit}</td>
      <td className="hidden md:table-cell font-medium">{item.gpa}</td>
      <td className="hidden md:table-cell font-medium flex-col gap-2 p-2">
        {Object.entries(item.obtained).map(([key, value]) =>
          value ? <p key={key}>{value}</p> : null
        )}
      </td>
      <td className="hidden md:table-cell font-medium">{item.finalGrades}</td>
    </tr>
  );

  return (
    <div className="bg-white rounded-md flex-1 mt-0 gap-8">
      {/* HEADER & FILTERS */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="hidden md:block text-xl text-[#0A4D7E] font-semibold">السجل الأكاديمي</h1>
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
      <div className="flex flex-col gap-10">
        {semesters.map((semester) => {
          const dataForSemester = gradesbookData.filter(
            (item) => item.semester === semester
          );

          return (
            <div key={semester}>
              <h2 className="text-md md:text-lg font-semibold text-lamaPurple mb-2">
                {semester}
              </h2>
              <Table columns={columns} renderRow={renderRow} data={dataForSemester} />
            </div>
          );
        })}
      </div>

      {/* PAGINATION (اختياري لو بتستخدمه لكل الجدول كامل) */}
      <Pagination />
    </div>
  );
};

export default GradesBook