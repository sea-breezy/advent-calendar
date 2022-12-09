import "../calendar.css";


import Present from "./Present";
import useFetch from "../Hook/useFetch";
export default function Calendar() {
  const url = "https://advent-calendar-cas.onrender.com/api/items";
  const [data] = useFetch(url, [url]);
  const date = new Date();
  const dayOfDec = date.getDate();

  // const data = [
  //   { id: 1, day: 1, text: "hello", link: "https://www.google.co.uk/" },
  //   { id: 2, day: 2, text: "wooo", link: "https://www.google.co.uk/" },

  console.log(dayOfDec);

  return (
    <div div className="calendar">
      {data
        ? data.payload.map((day) => (
            <Present
              key={day.id}
              link={
                dayOfDec >= day.day
                  ? day.link
                  : "https://c.ndtvimg.com/2019-08/572rgsf_cat-receives-shock-funny-cat-pics_625x300_09_August_19.jpg"
              }
              text={
                dayOfDec >= day.day ? day.activity : "Curiosity killed the cat!"
              }
              day={day.day}
            />
          ))
        : ""}
    </div>
  );
}
