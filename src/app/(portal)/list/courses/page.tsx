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
import { subjects } from "@/lib/data";



type record = {
  course: string;
  batch: string;
  regNumber: string;
  subjects: string[];
  advisor: string;
};

const columns = [
  {
    header: "التخصص",
    accessor: "course",
    className: "pr-3",
  },
  {
    header: "الفصل",
    accessor: "batch",
    className: "hidden md:table-cell",
  },
  {
    header: "رقم القيد",
    accessor: "regNumber",
    className: "hidden md:table-cell",
  },
  {
    header: "المقررات",
    accessor: "subject",
    className: "hidden md:table-cell",
  },
  {
    header: "المحاضر",
    accessor: "advisor",
    className: "hidden md:table-cell",
  },

]

const Courses = () => {

  const renderRow = (item: record) => (
    <tr
      key={item.regNumber}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex justify-start mb-4 mt-4 mr-4 text-(--graytext) font-medium">{item.course}</td>
      <td className="hidden md:table-cell text-(--graytext) font-medium">{item.batch}</td>
      <td className="hidden md:table-cell text-(--graytext) font-medium">{item.regNumber}</td>
      <td className="hidden md:table-cell font-medium flex-col gap-2 p-2">
        {Object.entries(item.subjects).map(([key, value]) =>
          value ? <p key={key}>{value}</p> : null
        )}
      </td>
      <td className="hidden md:table-cell text-(--graytext) font-medium">{item.advisor}</td>
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
                    <SelectValue placeholder="الفصل " />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup >
                      <SelectItem value="apple">الفصل</SelectItem>
                      
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
            </div>

          </div>
        </div>

        <Table columns={columns} renderRow={renderRow} data={subjects} />

      </div>
    </div>
  )
}

export default Courses