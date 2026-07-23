import { useState } from "react";
import RoomArt from "../components/RoomArt";
import LetterOverlay from "../components/LetterOverlay";

export default function HomeScreen() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <div className="w-full h-full relative animate-fade-in-slow transition-colors duration-1000">
      {/* Room Background */}
      <div
        className={`w-full h-full transition-opacity duration-1000 ${isLetterOpen ? "opacity-30" : "opacity-100"}`}
      >
        <RoomArt />
      </div>

      {/* Button: I'm Here */}
      {!isLetterOpen && (
        <div className="absolute bottom-12 left-0 w-full flex justify-center animate-fade-in-slow text-opacity-0">
          <button
            onClick={() => setIsLetterOpen(true)}
            className="bg-warm-cream text-text-ink font-sans px-8 py-3 rounded-2xl shadow-lg hover:bg-cream-hover hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
          >
            I'm Here
          </button>
        </div>
      )}

      {/* Letter Overlay */}
      {isLetterOpen && <LetterOverlay onClose={() => setIsLetterOpen(false)} />}
    </div>
  );
}
