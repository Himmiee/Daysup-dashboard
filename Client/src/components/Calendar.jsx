import dayjs from "dayjs";
import { useState } from "react";
import cn, {Months} from "../utils/menu";
import { GrFormNext,GrFormPrevious } from "react-icons/gr";

export const Calendar = (month = dayjs().month(), year = dayjs().year()) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");
  const arrayOfDate = [];
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDate.push({
      currentMonth: false,
      date: firstDateOfMonth.day(i),
    });
  }
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      currentMonth: true,
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
      date: firstDateOfMonth.date(i),
    });
  }
  const remDay = 42 - arrayOfDate.length;

  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remDay;
    i++
  ) {
    arrayOfDate.push({
      currentMonth: false,
      date: lastDateOfMonth.date(i),
    });
  }
  return arrayOfDate;
};

const CalendarComponent = () => {

  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDay = dayjs()
  const [day, setDay] = useState(currentDay)
  const [selectDay, setSelectDay] = useState(currentDay)
//   const [data, useData] = useState(Calendar(day.month(), day.year()));
  return (
    <section className=" w-[88%] lg:w-[80%] h-full pr-5 mt-2 ">
        <div className="flex justify-between">
            <h1 className="text-[12px] font-bold ">{Months[day.month()]}, {day.year()}</h1>
            <div className="flex items-center  gap-5">
                <GrFormPrevious onClick={() => {
                    setDay(day.month(day.month() -1))
                }} className="w-5 h-5 cursor-pointer" />
                <h1 className="text-sm font-semibold">Today</h1>
                <GrFormNext className="w-5 h-5 cursor-pointer" onClick={() => {
                    setDay(day.month(day.month() +1))
                }} />
            </div>
        </div>
      <div className="days py-4 text-sm  font-bold grid  grid-cols-7">
        {days.map((day, i) => {
          return (
            <div key={i} className="place-content-center grid">
              {day}
            </div>
          );
        })}
      </div>
      <div className="h-[30vh] lg:h-[35vh] text-[12px]  grid grid-cols-7">
        {Calendar(day.month(), day.year()).map(({ date, currentMonth, today }, i) => {
          return (
            <div
              key={i}
              className="border-t-[1px] border-gray-200 grid place-content-center"
            >
              <h1
                className={cn(
                  currentMonth ? "" : "text-gray-200",
                  today
                    ? "bg-red-600  text-white rounded-full "
                    : "",
                    selectDay.toDate().toDateString() === date.toDate().toDateString() ? "bg-black text-white":"",
                    "h-[26px] w-[26px] items-center flex justify-center hover:bg-black transition-all cursor-pointer hover:text-white rounded-full"
                )}
                onClick={() => {
                    setSelectDay(date)
                }}
              >
                {date.date()}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <h1 className="text-sm font-semibold">Schedule for {selectDay.toDate().toDateString()}</h1>
        <p className="text-sm  font-medium text-gray-400 ">No meeting today</p>
      </div>
    </section>
  );
};

export default CalendarComponent;
