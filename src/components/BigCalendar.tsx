"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ar-sa";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { calendarEvents } from "@/lib/data";
import CustomeWorkWeek from "./CustomWorkWeek ";

// فعليًا فعلنا اللغة العربية
// فعليًا فعلنا اللغة العربية لكن مع أرقام إنجليزية
moment.locale("ar-sa", {
  preparse: function (string: string) {
    return string.replace(/[٠-٩]/g, (match) => "٠١٢٣٤٥٦٧٨٩".indexOf(match).toString());
  },
  postformat: function (string: string) {
    return string;
  },
});


const localizer = momentLocalizer(moment);

const messages = {
  next: "التالي",
  previous: "السابق",
  today: "اليوم",
  month: "شهر",
  week: "أسبوع",
  work_week: "أسبوع العمل",
  day: "يوم",
  agenda: "جدول",
  date: "التاريخ",
  time: "الوقت",
  event: "الحدث",
  noEventsInRange: "لا توجد أحداث في هذا النطاق.",
  showMore: (total: number) => `+${total} إضافي`,
};

function getStartOfWeek(date: Date): Date {
  const day = date.getDay();
  const diff = date.getDate() - day;
  return new Date(date.setDate(diff));
}

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WEEK);
  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar className=""
      // defaultView={Views.WEEK}
      // defaultDate={getStartOfWeek(new Date())}
     
      messages={messages}
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["week", "day"]}
      view={view}
      style={{ height: "100%" }}
      onView={handleOnChangeView}
      rtl
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
  );
};

export default BigCalendar;
