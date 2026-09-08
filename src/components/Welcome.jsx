function Welcome({ onNext }) {
  return (
    <section className="screen welcome-screen">

      <div className="welcome-content">

        <div className="mini-badge">
          ✨ A little surprise for you
        </div>

        <div className="crown">
          👑
        </div>

        <h1>
          Hey
          <span> Choti Sardarni</span>
        </h1>

        <p className="welcome-subtitle">
          Shruti, someone has prepared something
          very special for you...
        </p>

        <div className="welcome-card">

          <div className="card-sparkle">✦</div>

          <p>
            This isn't just another birthday wish.
          </p>

          <strong>
            It's a little journey made just for you. ❤️
          </strong>

        </div>

        <button
          className="primary-button"
          onClick={onNext}
        >
          Open Your Surprise
          <span>💝</span>
        </button>

        <p className="tap-hint">
          Tap the button and let the story begin...
        </p>

      </div>

    </section>
  );
}

export default Welcome;