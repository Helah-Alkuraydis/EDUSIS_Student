import PropTypes from "prop-types";
import React from "react";
// @ts-expect-error: No types for internal module
import Week from "react-big-calendar/lib/Week";
// @ts-expect-error: No types for internal module
import TimeGrid from "react-big-calendar/lib/TimeGrid";


function workWeekRange(date: Date, options: any): Date[] {
  return Week.range(date, options).filter(
    (d: Date) => ![5, 6].includes(d.getDay())
  );
}
interface CustomeWorkWeekProps {
  date: Date;
  [key: string]: any; // للسماح بتمرير باقي الخصائص بدون خطأ
}

class CustomeWorkWeek extends React.Component<CustomeWorkWeekProps> {
  render() {
    const { date, ...props } = this.props;
    const range = workWeekRange(date, this.props);
    return <TimeGrid {...props} range={range} eventOffset={15} />;
  }
}

CustomeWorkWeek.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};

(CustomeWorkWeek as any).defaultProps = TimeGrid.defaultProps;

(CustomeWorkWeek as any).range = workWeekRange;

(CustomeWorkWeek as any).navigate = Week.navigate;

(CustomeWorkWeek as any).title = (date: Date, { localizer }: any) => {
  let [start, ...rest] = workWeekRange(date, { localizer });

  return localizer.format({ start, end: rest.pop() }, "dayRangeHeaderFormat");
};

export default CustomeWorkWeek;