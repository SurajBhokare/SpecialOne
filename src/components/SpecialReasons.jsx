import { useState } from "react";

const reasons = [
  {
    number: "01",
    title: "Your smile",
    text: "Somehow it makes even ordinary days feel a little better."
  },
  {
    number: "02",
    title: "Your madness",
    text: "Life would honestly be boring without your crazy little moments."
  },
  {
    number: "03",
    title: "Your heart",
    text: "You care deeply, even when you don't always say it."
  },
  {
    number: "04",
    title: "Your presence",
    text: "Some people simply make life better by being there. You're one of them."
  },
  {
    number: "05",
    title: "Our memories",
    text: "The random conversations, laughs and nonsense are memories I'll always keep."
  },
  {
    number: "06",
    title: "Just you",
    text: "No complicated reason. You're simply someone very special to me."
  }
];

function SpecialReasons({ onNext }) {
  const [active, setActive] = useState(null);

  return (
    <section className="screen reasons-screen">

      <div className="section-heading">

        <span className="eyebrow">
          6 LITTLE REASONS
        </span>

        <h2>
          Why you're
          <br />
          <span>so special ❤️</span>
        </h2>

        <p>
          Tap each card. I could write hundreds...
          but let's start with six.
        </p>

      </div>

      <div className="reasons-grid">

        {reasons.map((reason) => (
          <button
            key={reason.number}
            className={`
              reason-card
              ${active === reason.number
                ? "reason-active"
                : ""}
            `}
            onClick={() =>
              setActive(reason.number)
            }
          >

            <span className="reason-number">
              {reason.number}
            </span>

            <span className="reason-icon">
              {active === reason.number
                ? "❤️"
                : "♡"}
            </span>

            <span className="reason-title">
              {reason.title}
            </span>

            {active === reason.number && (
              <span className="reason-text">
                {reason.text}
              </span>
            )}

          </button>
        ))}

      </div>

      <button
        className="primary-button"
        onClick={onNext}
      >
        Show me the memories
        <span>📸</span>
      </button>

    </section>
  );
}

export default SpecialReasons;