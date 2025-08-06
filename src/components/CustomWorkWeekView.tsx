import { WorkWeek, WorkWeekProps } from "react-big-calendar";
import { DateLocalizer } from "react-big-calendar";

const CustomWorkWeekView = (props: WorkWeekProps) => {
  // تعديل لعرض الأيام من الأحد إلى الخميس فقط
  const startOfWeek = props.localizer.startOf(new Date(), 'week');
  const endOfWeek = props.localizer.add(startOfWeek, 4, 'day'); // الأحد إلى الخميس

  return (
    <WorkWeek
      {...props}
      range={() => {
        const range = [];
        const current = new Date(startOfWeek);
        for (let i = 0; i < 5; i++) {
          range.push(new Date(current));
          current.setDate(current.getDate() + 1);
        }
        return range;
      }}
    />
  );
};

export default CustomWorkWeekView;
