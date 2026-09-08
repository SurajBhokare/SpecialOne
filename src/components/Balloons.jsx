import { useState } from "react";

const balloonData = [
  {
    id: 1,
    color: "pink",
    message: "You're ridiculously special. ❤️"
  },
  {
    id: 2,
    color: "purple",
    message: "Life is more fun with you around. 😂"
  },
  {
    id: 3,
    color: "gold",
    message: "You deserve all the happiness in the world. ✨"
  },
  {
    id: 4,
    color: "blue",
    message: "Never stop being the amazing you. 🫶"
  },
  {
    id: 5,
    color: "red",
    message: "Choti Sardarni forever! 👑"
  },
  {
    id: 6,
    color: "peach",
    message: "And yes... you're stuck with me. 😌❤️"
  }
];

function Balloons({
  onNext,
  completed,
  setCompleted
}) {
  const [popped, setPopped] = useState([]);

  const [message, setMessage] = useState(
    "Pop all the balloons to unlock the next surprise!"
  );

  const popBalloon = (balloon) => {
    if (popped.includes(balloon.id)) {
      return;
    }

    const newPopped = [
      ...popped,
      balloon.id
    ];

    setPopped(newPopped);

    setMessage(balloon.message);

    if (newPopped.length === balloonData.length) {
      setCompleted(true);

      setMessage(
        "You found all the little messages! ❤️"
      );
    }
  };

  return (
    <section className="screen balloons-screen">

      <div className="section-heading">

        <span className="eyebrow">
          LITTLE SURPRISE
        </span>

        <h2>
          Pop the balloons
          <br />
          <span>Choti Sardarni 🎈</span>
        </h2>

        <p>
          Each balloon has something I want you to know.
        </p>

      </div>

      <div className="balloon-message">
        {message}
      </div>

      <div className="balloon-area">

        {balloonData.map((balloon) => (
          <button
            key={balloon.id}
            className={`
              balloon
              balloon-${balloon.color}
              ${popped.includes(balloon.id)
                ? "balloon-popped"
                : ""}
            `}
            onClick={() => popBalloon(balloon)}
            aria-label="Pop balloon"
          >
            {!popped.includes(balloon.id) && (
              <>
                <span className="balloon-shine" />
                <span className="balloon-knot" />
              </>
            )}
          </button>
        ))}

      </div>

      <div className="balloon-counter">
        {popped.length} / {balloonData.length} popped
      </div>

      {completed && (
        <button
          className="primary-button"
          onClick={onNext}
        >
          Continue the journey
          <span>❤️</span>
        </button>
      )}

    </section>
  );
}

export default Balloons;