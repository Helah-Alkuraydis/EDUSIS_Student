import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const subjectsRegistration = () => {
    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0 gap-8">
            {/* TOP */}
            <h1 className="hidden md:block text-xl text-[#0A4D7E]  font-semibold mb-5">تسجيل جديد</h1>
            <div className="flex flex-col md:flex-col items-start gap-10 w-full md:w-auto">
                <div className="flex gap-30">
                    <div className="flex flex-col items-start justify-center gap-2" >
                        <h1 className="hidden md:block text-m text-(--graytext) font-medium">التخصص</h1>
                        <Select dir='rtl' >
                            <SelectTrigger className="w-[270px] bg-[#F2F2F2]">
                                <SelectValue placeholder="اختر التخصص" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup >
                                    <SelectItem value="apple">محاسبة</SelectItem>
                                    <SelectItem value="banana">أعمال</SelectItem>

                                </SelectGroup>
                            </SelectContent>
                        </Select>

                    </div>

                    <div className="flex flex-col items-start justify-center gap-2" >
                        <h1 className="hidden md:block text-m text-(--graytext) font-medium">الحد الأدنى للحمل</h1>
                        <input
                            type="number"
                            min={0}
                            max={30}
                            step={1}
                            defaultValue={0}
                            className=" max-w-s outline-none pt-1.5 pb-1.5 pl-4 pr-3 bg-[#F2F2F2] w-[270px] ring-1 rounded-md ring-black  hover:bg-gray-500/10 px-2 focus-within:ring-(--buttonColor) " //border-1 border-black ring-[1.5px] ring-gray-300  hover:bg-gray-500/10 px-2 focus-within:ring-(--buttonColor)
                        />

                    </div>
                </div>
                <div className="flex gap-30">
                    <div className="flex flex-col items-start justify-center gap-2" >
                        <h1 className="hidden md:block text-m text-(--graytext) font-medium">المسار</h1>
                        <Select dir='rtl' >
                            <SelectTrigger className="w-[270px] bg-[#F2F2F2]">
                                <SelectValue placeholder="اختر المسار" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup >
                                    <SelectItem value="apple">محاسبة</SelectItem>
                                    <SelectItem value="banana">أعمال</SelectItem>

                                </SelectGroup>
                            </SelectContent>
                        </Select>

                    </div>

                    <div className="flex flex-col items-start justify-center gap-2" >
                        <h1 className="hidden md:block text-m text-(--graytext) font-medium">الحد الأعلى للحمل</h1>
                        <input
                            type="number"
                            min={0}
                            max={30}
                            step={1}
                            defaultValue={0}
                            className=" max-w-s outline-none pt-1.5 pb-1.5 pl-4 pr-3 bg-[#F2F2F2] w-[270px] ring-1 rounded-md   hover:bg-gray-500/10 px-2 focus-within:ring-(--buttonColor) " //border-1 border-black ring-[1.5px] ring-gray-300  hover:bg-gray-500/10 px-2 focus-within:ring-(--buttonColor)
                        />

                    </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-2" >
                        <h1 className="hidden md:block text-m text-(--graytext) font-medium">المواد المختارة</h1>
                        <Select dir='rtl' >
                            <SelectTrigger className="w-[270px] bg-[#F2F2F2]">
                                <SelectValue placeholder="اختر المواد" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup >
                                    <SelectItem value="apple">محاسبة</SelectItem>
                                    <SelectItem value="banana">أعمال</SelectItem>

                                </SelectGroup>
                            </SelectContent>
                        </Select>

                    </div>

            </div>
            <div className="flex justify-end mt-15 ml-88">
                <button className="text-xl font-medium text-white bg-(--buttonColor) rounded-full pl-4 pr-4 pt-1 pb-1">التالي</button>
            </div>

        </div>

    )
}

export default subjectsRegistration