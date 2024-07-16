// App.tsx
import { useEffect } from "react";
import useSound from "use-sound";
import clickSound from "/sounds/public_sounds_click.mp3";
import './App.css'
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  const [play] = useSound(clickSound, { volume: 0.05 });

  const handleClick = () => {
    play();
  };

  useEffect(() => {
    const resumeAudioContext = () => {
      const AudioContext =
        window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        const audioContext = new AudioContext();
        if (audioContext.state === "suspended") {
          audioContext
            .resume()
            .then(() => {
              console.log("AudioContext resumed successfully");
            })
            .catch((error) => {
              console.error("Error resuming AudioContext:", error);
            });
        }
      }
    };

    window.addEventListener("click", resumeAudioContext);

    return () => {
      window.removeEventListener("click", resumeAudioContext);
    };
  }, []);

  return (
    <div className="App" onMouseDown={handleClick} onMouseUp={handleClick}>
      <MainRoutes />
    </div>
  );
}

export default App;
