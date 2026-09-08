import { useState } from "react";

function GiftBox({
  onNext,
  opened,
  setOpened
}) {
  const [showMessage, setShowMessage] = useState(false);

  const openGift = () => {
    setOpened(true);

    setTimeout(() => {
      setShowMessage(true);
    }, 700);
  };

  return (
    <section className="screen gift-screen">

      {!opened ? (
        <>
          <div className="section-heading">

            <span className="eyebrow">
              FINAL SURPRISE
            </span>

            <h2>
              There's one more
              <br />
              <span>thing for you 🎁</span>
            </h2>

            <p>
              You made it this far.
              Now open your gift.
            </p>

          </div>

          <button
            className="gift-box"
            onClick={openGift}
            aria-label="Open gift"
          >

            <div className="gift-lid">
              <span className="gift-ribbon" />
            </div>

            <div className="gift-body">
              <span className="gift-ribbon" />
            </div>

            <div className="gift-bow">
              <span />
              <span />
            </div>

          </button>

          <p className="tap-hint">
            Tap the gift 🎁
          </p>
        </>
      ) : (
        <>
          <div className="gift-opened">

            <div className="gift-sparkles">
              ✨ ✦ ✨
            </div>

            <div className="gift-emoji">
              🎉
            </div>

            <h2>
              SURPRISE!
            </h2>

            <p>
              The best gift isn't inside a box.
            </p>

            <strong>
              It's all the beautiful memories
              still waiting for you.
            </strong>

          </div>

          {showMessage && (
            <button
              className="primary-button"
              onClick={onNext}
            >
              See your birthday wish
              <span>❤️</span>
            </button>
          )}

        </>
      )}

    </section>
  );
}

export default GiftBox;