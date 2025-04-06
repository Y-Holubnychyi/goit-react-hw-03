import s from "./Feedback.module.css";

export default function Feedback({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={s["feedback-container"]}>
      <div className={s.feedback}>
        <p className={s["positive-feedback"]}>Good: {good}</p>
        <p className={s["neutral-feedback"]}>Neutral: {neutral}</p>
        <p className={s["negative-feedback"]}>Bad: {bad}</p>
        <p className={s["feedback-statistics"]}>Total: {total}</p>
        <p className={s["positive-percentage"]}>
          Positive: {positivePercentage}%
        </p>
      </div>
    </div>
  );
}
