import { useEffect, useState } from "react";

function getNextBirthday() {
  const now = new Date();

  let year = now.getFullYear();

  let birthday = new Date(
    year,
    8,
    9,
    0,
    0,
    0
  );

  if (birthday < now) {
    birthday = new Date(
      year + 1,
      8,
      9,
      0,
      0,
      0
    );
  }

  return birthday;
}

function calculateTime() {
  const now = new Date();

  const target = getNextBirthday();

  const difference = target.getTime() - now.getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),

    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),

    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),

    seconds: Math.floor(
      (difference / 1000) % 60
    )
  };
}

function Countdown({ onNext }) {
  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="screen countdown-screen">

      <div className="section-heading">

        <span className="eyebrow">
          SAVE THE DATE
        </span>

        <h2>
          The countdown
          <br />
          <span>to your special day</span>
        </h2>

        <p>
          September 9th isn't just another date anymore.
        </p>

      </div>

      <div className="countdown-container">

        <TimeBox
          value={time.days}
          label="Days"
        />

        <TimeBox
          value={time.hours}
          label="Hours"
        />

        <TimeBox
          value={time.minutes}
          label="Minutes"
        />

        <TimeBox
          value={time.seconds}
          label="Seconds"
        />

      </div>

      <div className="birthday-date">
        🎂 September 9
      </div>

      <button
        className="primary-button"
        onClick={onNext}
      >
        There's more...
        <span>→</span>
      </button>

    </section>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="time-box">

      <strong>
        {String(value).padStart(2, "0")}
      </strong>

      <span>
        {label}
      </span>

    </div>
  );
}

export default Countdown;