import "../present.css";

export default function Present({ link, text, day }) {
  return (
    <div className="present">
      <div className="lid">
        <span></span>
      </div>
      <div className="activity">
        <a href={link}>{text}</a>
      </div>
      <div className="box">
        <span>
          <h2 id="day">{day}</h2>
        </span>
        <span></span>
      </div>
    </div>
  );
}
