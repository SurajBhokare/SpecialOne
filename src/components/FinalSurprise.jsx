import { useEffect, useState } from "react";
import wish from "../Assets/Photoes/edited.jpeg";

function FinalSurprise({
  onRestart,
  musicPlaying,
  toggleMusic,
}) {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const pieces = Array.from(
      { length: 45 },
      (_, index) => ({
        id: index,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 3,
        rotation: Math.random() * 360,
      })
    );

    setConfetti(pieces);
  }, []);

  return (
    <section className="screen final-screen">

      {/* Confetti */}
      <div className="confetti-container">
        {confetti.map((piece) => (
          <span
            key={piece.id}
            className="confetti-piece"
            style={{
              left: `${piece.left}%`,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
              transform: `rotate(${piece.rotation}deg)`,
            }}
          />
        ))}
      </div>

      <div className="final-content">

        {/* Celebration Icon */}
        <div className="final-crown">
          🥳
        </div>

        {/* Small Heading */}
        <span className="final-small">
          TODAY IS YOUR DAY
        </span>

        {/* Main Heading */}
        <h1>
          Happy Birthday Dear
          <span> Shruti!</span>
        </h1>

        {/* Divider */}
        <div className="final-divider">
          <span>♥</span>
        </div>

        {/* Nickname */}
        <p className="final-nickname">
          My Choti Sardarni
        </p>

        {/* Message */}
        <p className="final-message">
          May your life always be filled with
          happiness, laughter, crazy adventures,
          beautiful memories and people who truly
          value you.
        </p>

        {/* Photo */}
        <div className="final-photo-placeholder">

          <img
            src={wish}
            alt="Birthday"
          />

          <div className="photo-overlay">
            <span>
              Choti Sardarni
            </span>

            <strong>
              Shruti it's your special day ❤️
            </strong>
          </div>

        </div>

        {/* Final Love Message */}
        <p className="final-love">
          Keep smiling.
          <br />
          Keep shining.
          <br />
          Keep being you. ❤️
        </p>

        {/* Actions */}
        <div className="final-actions">

          {/* Music Control */}
          <button
            className={`music-button ${
              musicPlaying ? "music-active" : ""
            }`}
            onClick={toggleMusic}
          >
            {musicPlaying
              ? "🔊 Music On"
              : "🔇 Music Off"}
          </button>

          {/* Replay */}
          <button
            className="secondary-button"
            onClick={onRestart}
          >
            ↻ Replay
          </button>

        </div>

        {/* Footer */}
        <p className="made-with">
          Made with ❤️ for someone special
        </p>

      </div>
    </section>
  );
}

export default FinalSurprise;
