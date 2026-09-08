import deo1 from "../Assets/Photoes/deo1.jpeg"; 
import deo2 from "../Assets/Photoes/deo2.jpeg";
 import choti from "../Assets/Photoes/choti.jpeg";
  import fav1 from "../Assets/Photoes/fav1.jpeg"; 
  import fav3 from "../Assets/Photoes/fav3.jpeg";
 import trio from "../Assets/Photoes/trio.jpeg";

const photos = [
  {
    id: 1,
   src: deo2,
    caption: "One of My Favourite Memories 🥰",
    rotation: "-3deg"
  },

  {
    id: 2,
    src: fav3,
    caption: "That Beautiful Smile 😊",
    rotation: "2deg"
  },

  {
    id: 3,
    src: fav1,
    caption: "Pretty without trying",
    rotation: "-2deg"
  },

  {
    id: 4,
    src: deo1,
    caption: "Our Beautiful Memory ❤️",
    rotation: "3deg"
  },

  {
    id: 5,
    src: choti,
    caption: "A special Moment ✨",
    rotation: "-4deg"
  },

  {
    id: 6,
    src: trio,
    caption: "Forever a favourite ❤️",
    rotation: "2deg"
  }
];

function PhotoGallery({ onNext }) {
  return (
    <section className="screen gallery-screen">

      <div className="section-heading">

        <span className="eyebrow">
          LITTLE PHOTO WALL
        </span>

        <h2>
          Some moments
          <br />
          <span>worth keeping 📸</span>
        </h2>

        <p>
          Demo photos for now.
          Your real memories come next.
        </p>

      </div>

      <div className="photo-grid">

        {photos.map((photo) => (
          <div
            key={photo.id}
            className="polaroid"
            style={{
              "--rotation": photo.rotation
            }}
          >

            <div className="photo-wrapper">

              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
              />

            </div>

            <p>
              {photo.caption}
            </p>

          </div>
        ))}

      </div>

      <div className="gallery-note">
        <span>📌</span>
        Real photos can replace these demo memories.
      </div>

      <button
        className="primary-button"
        onClick={onNext}
      >
        There's a letter for you
        <span>💌</span>
      </button>

    </section>
  );
}

export default PhotoGallery;