import React from "react";

// Import semua aset PNG kamu di sini
import bgRoom from "../assets/images/room.png"; // Ini gambar gabungan dinding, lantai, dan jendela
import bookshelf from "../assets/images/bookshelf.png";
import lamp from "../assets/images/lamp.png";
import chair from "../assets/images/chair.png";
import char from "../assets/images/charel.png";
import cat from "../assets/images/cat.png";

export default function RoomArt() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#734b35]">
      {/* 1. BACKGROUND (Z-0) - Dinding, Lantai, & Jendela */}
      <img
        src={bgRoom}
        alt="room background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 2. RAK BUKU (Z-10) */}
      {/* Posisi di kiri, disesuaikan dengan proporsi background */}
      <img
        src={bookshelf}
        alt="bookshelf"
        className="absolute top-[26%] left-[-10%] w-[58%] z-10"
      />

      {/* 3. LAMPU MEJA (Z-20) */}
      {/* Posisi di atas rak buku dengan efek cahaya (pulse) */}
      <div className="absolute top-[10%] left-[10%] z-20 flex justify-center items-center">
        <div className="absolute w-100 h-100 bg-yellow-400/30 blur-2xl rounded-full animate-pulse"></div>
        <img src={lamp} alt="lamp" className="relative w-[120px]" />
      </div>

      {/* 4. KURSI HIJAU (Z-10) */}
      {/* Posisi di kanan, di bawah area jendela pada background */}
      <img
        src={chair}
        alt="chair"
        className="absolute top-[41%] right-[-5%] w-[48%] z-10"
      />

      {/* 5. KARAKTER UTAMA (Z-30) */}
      {/* Posisi di tengah bawah */}
      <img
        src={char}
        alt="character"
        className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[35%] z-30 animate-breathe drop-shadow-xl"
      />

      {/* 6. KUCING PUTIH (Z-40) */}
      {/* Posisi di kanan bawah, sedikit di depan kursi */}
      <img
        src={cat}
        alt="white cat"
        className="absolute bottom-[23%] right-[10%] w-[20%] z-40"
      />
    </div>
  );
}
