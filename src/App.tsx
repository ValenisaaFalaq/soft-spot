import { useState, useEffect } from "react";
import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import "./styles/globals.css";

export default function App() {
  const [screen, setScreen] = useState<"LOADING" | "HOME">("LOADING");

  useEffect(() => {
    // Durasi loading 2 detik sebelum pindah ke Home
    const timer = setTimeout(() => {
      setScreen("HOME");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-[600px] h-[720px] relative overflow-hidden bg-cozy-blue">
      {screen === "LOADING" ? <LoadingScreen /> : <HomeScreen />}
    </div>
  );
}
