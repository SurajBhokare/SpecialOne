import { useState } from "react";

function LoveLetter({ onNext }) {
  const [opened, setOpened] = useState(false);

  return (
    <section className="screen letter-screen">

      {!opened ? (
        <>
          <div className="section-heading">

            <span className="eyebrow">
              SOMETHING PERSONAL
            </span>

            <h2>
              A letter
              <br />
              <span>just for you 💌</span>
            </h2>

            <p>
              Some things are better written than said.
            </p>

          </div>

          <button
            className="envelope"
            onClick={() => setOpened(true)}
            aria-label="Open birthday letter"
          >

            <div className="envelope-back" />

            <div className="letter-paper">

              <span>
                For Shruti
              </span>

              <small>
                Open me ❤️
              </small>

            </div>

            <div className="envelope-flap" />

            <div className="envelope-heart">
              ♥
            </div>

          </button>

          <p className="tap-hint">
            Tap the envelope
          </p>
        </>
      ) : (
        <>
          <div className="letter-opened">

            <div className="letter-header">
              <span>Dear Choti Sardarni,</span>
              <span>❤️</span>
            </div>

            <p>
              Some people enter our lives and slowly
              become part of our favourite memories.
            </p>

            <p>
              You're one of those people.
            </p>

            <p>
              Thank you for all the laughs, random
              conversations, stupid moments, little
              arguments and all those memories that
              somehow became special.
            </p>

            <p>
              I hope this new year of your life brings
              you everything you've been wishing for.
              More happiness. More adventures.
              More reasons to smile.
            </p>

            <p>
              And please don't change the person you are.
              The world needs your kind of madness. 😂❤️
            </p>

            <p>
              Happy Birthday in advance, Shruti.
            </p>

            <div className="signature">
              Always your bestie,
              <br />
              <strong>Someone who thinks you're awesome ❤️</strong>
            </div>

          </div>

          <button
            className="primary-button"
            onClick={onNext}
          >
            Keep going
            <span>→</span>
          </button>
        </>
      )}

    </section>
  );
}

export default LoveLetter;