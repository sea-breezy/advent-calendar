import "./present.css";

export default function Present({ link, text }) {
  return (
    <div className="present">
      <div className="lid">
        <span></span>
      </div>
      <div className="activity">
        <a href={link}>{text}</a>
      </div>
      <div className="box">
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
