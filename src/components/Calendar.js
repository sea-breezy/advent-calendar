import "../calendar.css";
import Present from "./Present";
import useFetch from "../Hook/useFetch";

export default function Calendar() {
  const url = "https://advent-calendar-cas.onrender.com/api/items";
  const [data] = useFetch(url);
  const date = new Date();
  const dayOfDec = date.getDate();
  const month = date.getMonth();


  return (
    <div div className="calendar">
      {data
        ? data.payload.map((day) => (
            <Present
              key={day.id}
              presentClass={
                month === 11 && day.day < dayOfDec ? "old-present" : "present"
              }
              link={
                month === 11 && dayOfDec >= day.day
                  ? day.link
                  : "https://c.ndtvimg.com/2019-08/572rgsf_cat-receives-shock-funny-cat-pics_625x300_09_August_19.jpg"
              }
              text={
                month === 11 && dayOfDec >= day.day
                  ? day.activity
                  : "Curiosity killed the cat!"
              }
              day={day.day}
            />
          ))
        : ""}
    </div>
  );
}
