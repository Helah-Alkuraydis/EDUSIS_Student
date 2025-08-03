'use client';
import EventCalendar from "@/components/EventCalendar"
import React, { useState } from "react"
import { Calendar } from "./ui/calendar";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LeftSide = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const [showCalendar, setShowCalendar] = useState(true);
    const [showTasks, setShowTasks] = useState(true);

    return (
        <div className="flex flex-col gap-6 mb-5">
            <div className=" w-full flex items-center flex-col gap-6 p-4 bg-[#F7F7F7] rounded-xl shadow-lg h-fit">
                <div className="w-full flex items-center justify-between cursor-pointer"
                    onClick={() => setShowCalendar(!showCalendar)}>
                    <span className="text-(--graytext) font-semibold text-m">التقويم الأكاديمي</span>
                    <ChevronDown color="#1786D9"
                        className={`transition-transform duration-300 ${showCalendar ? 'rotate-180' : ''}`}
                    />
                </div>

                <AnimatePresence initial={false}>
                    {showCalendar && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full flex flex-col gap-6 overflow-hidden"
                            style={{ minHeight: showCalendar ? undefined : 0 }}

                        >
                            {/* التقويم */}
                            <div className="bg-white flex items-center justify-center rounded-xl p-4">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-lg "
                                />
                            </div>

                            {/* الفعاليات */}
                            <div className="bg-white w-full rounded-xl  p-4">
                                <h2 className="text-sm font-bold mb-4">الفعاليات القادمة</h2>
                                <ul className="space-y-2">
                                    <li className="bg-gray-100 rounded-md p-2 text-sm text-(--graytext)">📌 موعد تسجيل المقررات - 1 محرم</li>
                                    <li className="bg-gray-100 rounded-md p-2 text-sm text-(--graytext)">🎓 بداية الدراسة - 5 محرم</li>
                                    <li className="bg-gray-100 rounded-md p-2 text-sm text-(--graytext)">📊 اختبار تشخيصي - 12 محرم</li>
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>


            <div className=" w-full flex items-center flex-col gap-6 p-4 bg-[#F7F7F7] rounded-xl shadow-lg h-fit">
                <div className="w-full flex items-center justify-between cursor-pointer"
                    onClick={() => setShowTasks(!showTasks)}>
                    <span className="text-(--graytext) font-semibold text-m">المهام والواجبات</span>
                    <ChevronDown
                        color="#1786D9"
                        className={`transition-transform duration-300 ${showTasks ? 'rotate-180' : ''}`}
                    />
                </div>
                {/* <ul className="w-full space-y-5">
                    <div className="w-full flex flex-col justify-center items-start bg-white outline-2 outline-[#F2994A] rounded-xl p-2">
                        <div className="flex justify-between items-center w-full">
                            <span className="text-base text-(--graytext) font-bold">أساسيات التصميم</span>
                            <span className="text-[#F2994A] bg-[#FFEBDB]  rounded-xl text-left font-semibold p-1.5 text-xs">لم يُرفع</span>
                        </div>
                        <div className="w-full h-px bg-gray-300 my-3" />
                        <div className="flex flex-col items-strat" >
                            <div className="flex gap-1">
                                <span className="text-sm text-(--graytext) text-right font-semibold">المهمة :</span>
                                <span className="text-(--graytext) text-sm">مشروع التصميم 1</span>
                            </div>
                            <div className="flex gap-1 ">
                                <span className="text-sm text-(--graytext) font-semibold">الموعد النهائي :</span>
                                <span className="text-(--graytext)  text-sm">11 فبراير 2024</span>
                            </div>
                        </div>

                    </div>

                    <div className="w-full flex flex-col justify-center items-start bg-white outline-2 outline-[#417FF2] rounded-xl p-2">
                        <div className="flex justify-between items-center w-full">
                            <span className="text-base text-(--graytext) font-bold">أساسيات التصميم</span>
                            <span className="text-[#417FF2] bg-[#E7F1F9]  rounded-xl text-left font-semibold p-1.5 text-xs">مرفوع</span>
                        </div>
                        <div className="w-full h-px bg-gray-300 my-3" />
                        <div className="flex flex-col items-strat" >
                            <div className="flex gap-1">
                                <span className="text-sm text-(--graytext) text-right font-semibold">المهمة :</span>
                                <span className="text-(--graytext)  text-sm">مشروع التصميم 1</span>
                            </div>
                            <div className="flex gap-1 ">
                                <span className="text-sm text-(--graytext) font-semibold">الموعد النهائي :</span>
                                <span className="text-(--graytext)  text-sm">11 فبراير 2024</span>
                            </div>
                        </div>

                    </div>

                    <div className="w-full flex flex-col justify-center items-start bg-white outline-2 outline-[#CDD8E5] rounded-xl p-2">
                        <div className="flex justify-between items-center w-full">
                            <span className="text-base text-(--graytext) font-bold">أساسيات التصميم</span>
                            <span className="text-[#9AA6B5] bg-[#EAEEF1]  rounded-xl text-left font-semibold p-1.5 text-xs">لم يبدأ</span>
                        </div>
                        <div className="w-full h-px bg-gray-300 my-3" />
                        <div className="flex flex-col items-strat" >
                            <div className="flex gap-1">
                                <span className="text-sm text-(--graytext) text-right font-semibold">المهمة :</span>
                                <span className="text-(--graytext)  text-sm">مشروع التصميم 1</span>
                            </div>
                            <div className="flex gap-1 ">
                                <span className="text-sm text-(--graytext) font-semibold">الموعد النهائي :</span>
                                <span className="text-(--graytext)  text-sm">11 فبراير 2024</span>
                            </div>
                        </div>

                    </div>
                </ul> */}
                <AnimatePresence>

                    {showTasks && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full flex flex-col gap-6 "
                            style={{ minHeight: showCalendar ? undefined : 0 }}
                        >
                            <ul className="w-full space-y-5">
                                {/* مهمة 1 */}
                                <TaskCard
                                    title="أساسيات التصميم"
                                    status="لم يُرفع"
                                    statusColor="#F2994A"
                                    bgColor="#FFEBDB"
                                    due="11 فبراير 2024"
                                />
                                {/* مهمة 2 */}
                                <TaskCard
                                    title="أساسيات التصميم"
                                    status="مرفوع"
                                    statusColor="#417FF2"
                                    bgColor="#E7F1F9"
                                    due="11 فبراير 2024"
                                />
                                {/* مهمة 3 */}
                                <TaskCard
                                    title="أساسيات التصميم"
                                    status="لم يبدأ"
                                    statusColor="#9AA6B5"
                                    bgColor="#EAEEF1"
                                    due="11 فبراير 2024"
                                />
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

        </div>
    )
}
const TaskCard = ({ title, status, statusColor, bgColor, due }: {
    title: string;
    status: string;
    statusColor: string;
    bgColor: string;
    due: string;
}) => (
    <div className="w-full flex flex-col justify-center items-start bg-white rounded-xl p-2" style={{ outline: `2px solid ${statusColor}` }}>
        <div className="flex justify-between items-center w-full">
            <span className="text-base text-(--graytext) font-bold">{title}</span>
            <span className="rounded-xl text-left font-semibold p-1.5 text-xs" style={{ backgroundColor: bgColor, color: statusColor }}>
                {status}
            </span>
        </div>
        <div className="w-full h-px bg-gray-300 my-3" />
        <div className="flex flex-col items-start">
            <div className="flex gap-1">
                <span className="text-sm text-(--graytext) font-semibold">المهمة :</span>
                <span className="text-(--graytext) text-sm">مشروع التصميم 1</span>
            </div>
            <div className="flex gap-1">
                <span className="text-sm text-(--graytext) font-semibold">الموعد النهائي :</span>
                <span className="text-(--graytext) text-sm">{due}</span>
            </div>
        </div>
    </div>
);
export default LeftSide