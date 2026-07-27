import React from "react";

import bgRoom from "../assets/images/room2.png";
import bookshelf from "../assets/images/bookshelf.png";
import lamp from "../assets/images/lamp.png";
import chair from "../assets/images/chair.png";
import char from "../assets/images/charel.png";
import cat from "../assets/images/cat.png";

export default function RoomArt() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#734b35]">
      {/* 1. BACKGROUND (Z-0) - Dinding, Lantai, & Jendela */}
      <img
        src={bgRoom}
        alt="room background"
        className="absolute inset-0 w-full h-full object-fill z-0"
      />

      {/* 2. RAK BUKU (Z-10) */}
      <img
        src={bookshelf}
        alt="bookshelf"
        className="absolute top-[36%] left-[-10%] w-[50%] z-10"
      />

      {/* 3. LAMPU MEJA (Z-20) */}

      <div className="absolute top-[17%] left-[9%] z-20 flex justify-center items-center">
        <div className="absolute w-100 h-100 bg-yellow-400/30 blur-2xl rounded-full animate-pulse"></div>
        <img src={lamp} alt="lamp" className="relative w-[98px]" />
      </div>

      {/* 4. KURSI HIJAU (Z-10) */}
      <img
        src={chair}
        alt="chair"
        className="absolute top-[49%] right-[-5%] w-[45%] z-10"
      />

      {/* 5. KARAKTER UTAMA (Z-30) */}
      <img
        src={char}
        alt="character"
        className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[30%] z-30 animate-breathe drop-shadow-xl"
      />

      {/* 6. KUCING PUTIH (Z-40) */}
      <img
        src={cat}
        alt="white cat"
        className="absolute bottom-[15%] right-[10%] w-[20%] z-40"
      />
    </div>
  );
}
