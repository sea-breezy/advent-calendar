import Present from "./Present";

export default function Calendar() {
  //const [data] = useFetch(url, [url]);
  const data = [
    { id: 1, day: 1, text: "hello", link: "https://www.google.co.uk/" },
    { id: 2, day: 2, text: "wooo", link: "https://www.google.co.uk/" },
  ];

  return (
    <>
      {data.map((day) => (
        <Present key={day.id} link={day.link} text={day.text} day={day.day} />
      ))}
    </>
  );
}
