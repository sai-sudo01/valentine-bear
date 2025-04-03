import { useState, useEffect } from "react";
import "./styles.css";

export default function ValentineContainer() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noCount, setNoCount] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [yesPressed]);

  // YOUR PHRASES ARRAY
  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "think again",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "POOKIE PLEASE",
    "Have a heart!",
    "Don't be so cold;(",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer;(?",
  ];

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <div className="response-container">
          <div
            className="tenor-gif-embed"
            data-postid="1990941022242314149"
            data-share-method="host"
            data-aspect-ratio="1"
            data-width="100%"
            key="kissing-bear"
          >
            <a href="https://tenor.com/view/bear-kiss-bear-kisses-kiss-kisses-love-gif-1990941022242314149">
              Bear Kiss GIF
            </a>
          </div>
          <div className="text animate-pop">Yay!!! 💖🎉</div>
        </div>
      ) : (
        <div className="question-container">
          <div
            className="tenor-gif-embed"
            data-postid="10472574714253063228"
            data-share-method="host"
            data-aspect-ratio="1.23267"
            data-width="100%"
            key="flower-bear"
          >
            <a href="https://tenor.com/view/bear-love-gif-10472574714253063228">
              Bear Love Sticker
            </a>
          </div>

          <div className="text">Will you be my Valentine? 🌹</div>
          <div className="buttons">
            {/* 3X FASTER GROWTH */}
            <button
              className="yes-button animate-pulse"
              style={{
                padding: `${10 + noCount * 15}px ${20 + noCount * 30}px`,
                fontSize: `${16 + noCount * 6}px`,
                transition: "all 0.3s ease",
              }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            {/* YOUR PHRASES */}
            <button
              className="no-button"
              onClick={handleNoClick}
              style={{
                padding: "11.335px 20px",
                fontSize: "16px",
                height: "38.67px",
                lineHeight: "16px",
              }}
            >
              {phrases[Math.min(noCount, phrases.length - 1)]}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
