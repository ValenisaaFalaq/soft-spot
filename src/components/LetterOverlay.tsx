import { useState, useEffect } from "react";

interface LetterOverlayProps {
  onClose: () => void;
}

export default function LetterOverlay({ onClose }: LetterOverlayProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    // Tunggu animasi fold selesai sebelum melepas komponen (unmount)
    setTimeout(() => {
      onClose();
    }, 800);
  };

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-6">
      <div
        className={`w-[90%] h-[90%] bg-warm-cream rounded-xl shadow-2xl relative flex flex-col items-center justify-center p-8 origin-bottom ${
          isClosing ? "animate-fold" : "animate-unfold"
        }`}
      >
        {/* Pressed Flower Decoration */}
        <div className="absolute top-6 left-6 opacity-60">
          <span className="text-2xl" role="img" aria-label="flower">
            🌸
          </span>
        </div>

        {/* Letter Content */}
        <div className="font-handwritten text-text-ink text-3xl leading-relaxed text-center w-full max-w-sm mt-4">
          <p>I've been waiting for you.</p>
          <br />
          <p>Take a deep breath.</p>
          <p>You are safe here.</p>
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute bottom-6 font-handwritten text-xl text-gray-500 hover:text-text-ink transition-colors duration-300"
        >
          Fold gently...
        </button>
      </div>
    </div>
  );
}
