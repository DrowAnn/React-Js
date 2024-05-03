import { useState, useEffect } from "react";

export default function useTimer() {
  const [segundosTranscurridos, cambiarSegundos] = useState(0);

  useEffect(() => {
    setInterval(() => {
      cambiarSegundos(segundosTranscurridos + 1);
    }, 1000);
  }, [segundosTranscurridos]);

  return segundosTranscurridos;
}
