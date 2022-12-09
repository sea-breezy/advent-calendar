import "../present.css";

export default function Present({ link, text, day, presentClass }) {
  return (
    <div className={presentClass}>
      <div className="lid">
        <span></span>
      </div>
      <div className="activity">
        <a href={link}>{text}</a>
      </div>
      <div className="box">
        <span></span>
        <span>
          <h2 id="day">{day}</h2>
        </span>
      </div>
    </div>
  );
}
