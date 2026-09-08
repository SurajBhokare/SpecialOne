const memories = [
  {
    date: "THE BEGINNING",
    icon: "🌱",
    title: "And then there was us...",
    text: "Every friendship has a beginning. Ours became something much more special than either of us probably expected."
  },

  {
    date: "THE RANDOM DAYS",
    icon: "😂",
    title: "The nonsense",
    text: "Random conversations, stupid jokes and those moments where absolutely nothing made sense."
  },

  {
    date: "THE GOOD TIMES",
    icon: "✨",
    title: "The memories",
    text: "The little moments are sometimes the ones that stay with us the longest."
  },

  {
    date: "TODAY",
    icon: "❤️",
    title: "Still here",
    text: "And somehow, through everything, you're still one of my favourite people."
  }
];

function TimeLine({ onNext }) {
  return (
    <section className="screen timeline-screen">

      <div className="section-heading">

        <span className="eyebrow">
          OUR LITTLE STORY
        </span>

        <h2>
          From then
          <br />
          <span>to now ✨</span>
        </h2>

        <p>
          More chapters are waiting to be written.
        </p>

      </div>

      <div className="timeline">

        <div className="timeline-line" />

        {memories.map((memory, index) => (
          <div
            className={`
              timeline-item
              ${index % 2 === 0
                ? "timeline-left"
                : "timeline-right"}
            `}
            key={memory.date}
          >

            <div className="timeline-dot">
              {memory.icon}
            </div>

            <div className="timeline-card">

              <span className="timeline-date">
                {memory.date}
              </span>

              <h3>
                {memory.title}
              </h3>

              <p>
                {memory.text}
              </p>

            </div>

          </div>
        ))}

      </div>

      <button
        className="primary-button"
        onClick={onNext}
      >
        One last surprise
        <span>🎁</span>
      </button>

    </section>
  );
}

export default TimeLine;