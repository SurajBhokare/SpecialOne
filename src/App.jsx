import { useRef, useState } from "react";
import musicFile from "./Assets/music/birthdayWish.mp3";

import Welcome from "./components/Welcome";
import Countdown from "./components/Countdown";
import Balloons from "./components/Balloons";
import SpecialReasons from "./components/SpecialReasons";
import PhotoGallery from "./components/PhotoGallery";
import LoveLetter from "./components/LoveLetter";
import Timeline from "./components/TimeLine";
import GiftBox from "./components/GiftBox";
import FinalSurprise from "./components/FinalSurprise";
// import Timeline from "./components/Timeline";

function App() {
  const audioRef = useRef(null);
  const musicStartedRef = useRef(false);

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [balloonsCompleted, setBalloonsCompleted] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);

  // Play / Pause music
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isMusicPlaying) {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsMusicPlaying(true);
          musicStartedRef.current = true;
        })
        .catch((error) => {
          console.log("Music could not start:", error);
        });
    }
  };

  // Start music after user's first click
  const startMusic = () => {
    if (!audioRef.current || musicStartedRef.current) return;

    audioRef.current
      .play()
      .then(() => {
        setIsMusicPlaying(true);
        musicStartedRef.current = true;
      })
      .catch((error) => {
        console.log("Music could not start:", error);
      });
  };

  // Next screen
  const goNext = () => {
    // Start music when user clicks the first Next/Start button
    if (currentStep === 0) {
      startMusic();
    }

    setCurrentStep((previous) => previous + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Previous screen
  const goBack = () => {
    setCurrentStep((previous) =>
      Math.max(previous - 1, 0)
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Restart birthday experience
  const restart = () => {
    setCurrentStep(0);
    setBalloonsCompleted(false);
    setGiftOpened(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Render current screen
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Welcome onNext={goNext} />;

      case 1:
        return <Countdown onNext={goNext} />;

      case 2:
        return (
          <Balloons
            onNext={goNext}
            completed={balloonsCompleted}
            setCompleted={setBalloonsCompleted}
          />
        );

      case 3:
        return <SpecialReasons onNext={goNext} />;

      case 4:
        return <PhotoGallery onNext={goNext} />;

      case 5:
        return <LoveLetter onNext={goNext} />;

      case 6:
        return <Timeline onNext={goNext} />;

      case 7:
        return (
          <GiftBox
            onNext={goNext}
            opened={giftOpened}
            setOpened={setGiftOpened}
          />
        );

      case 8:
        return (
          <FinalSurprise
            onRestart={restart}
            musicPlaying={isMusicPlaying}
            toggleMusic={toggleMusic}
          />
        );

      default:
        return <Welcome onNext={goNext} />;
    }
  };

  return (
    <main className="app">

      {/* Background Music */}
      <audio
        ref={audioRef}
        src={musicFile}
        loop
        preload="auto"
      />
   

      {/* Background Decorations */}
      <div className="background-decoration">
        <span className="floating-heart heart-one">
          ♥
        </span>

        <span className="floating-heart heart-two">
          ♥
        </span>

        <span className="floating-heart heart-three">
          ♥
        </span>

        <span className="floating-star star-one">
          ✦
        </span>

        <span className="floating-star star-two">
          ✦
        </span>
      </div>

      {/* Top Controls */}
      <div className="top-controls">

        {/* Back Button */}
        {currentStep > 0 && currentStep < 8 && (
          <button
            className="back-button"
            onClick={goBack}
            aria-label="Go back"
          >
            ←
          </button>
        )}

        {/* Music Button */}
        <button
          className={`music-toggle ${
            isMusicPlaying ? "music-playing" : ""
          }`}
          onClick={toggleMusic}
          aria-label={
            isMusicPlaying
              ? "Pause music"
              : "Play music"
          }
        >
          {isMusicPlaying ? "🔊" : "🎵"}
        </button>

        {/* Progress */}
        {currentStep > 0 && currentStep < 8 && (
          <div className="progress-wrapper">

            <div className="progress-text">
              {currentStep} / 8
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: `${(currentStep / 8) * 100}%`,
                }}
              />
            </div>

          </div>
        )}

      </div>

      {/* Current Screen */}
      {renderStep()}

    </main>
  );
}

export default App;
