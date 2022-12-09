import Present from "./Present";

export default function Calendar() {
  //const [data] = useFetch(url, [url]);
  const data = [
    { id: 1, day: 1, text: "hello", link: "https://www.google.co.uk/" },
    { id: 2, day: 2, text: "wooo", link: "https://www.google.co.uk/" },
    { id: 3, day: 3, text: "yeee", link: "https://www.google.co.uk/" },
    { id: 4, day: 4, text: "yahhh", link: "https://www.google.co.uk/" },
    { id: 5, day: 5, text: "zippy", link: "https://www.google.co.uk/" },
    { id: 6, day: 6, text: "zahh", link: "https://www.google.co.uk/" },
  ];

  return (
    <div div className="calendar">
      {data.map((day) => (
        <Present key={day.id} link={day.link} text={day.text} day={day.day} />
      ))}
    </div>
  );
}
