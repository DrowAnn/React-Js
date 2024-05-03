import useTimer from "./Hooks/useTimer";

const Timer = () => {
  const segundosTranscurridos = useTimer();

  return (
    <div>
      <h1>Segundos Transcurridos</h1>
      <p>{segundosTranscurridos}</p>
    </div>
  );
};

export default Timer;
