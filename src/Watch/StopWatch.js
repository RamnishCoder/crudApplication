import React from "react";
// import './App.css'

const Appp = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div>
      <h2>Stopwatch</h2>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div>
        {!timerOn && time === 0 && (
          <button className="btn btn-danger" onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button class="btn btn-warning" onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button className="btn btn-danger" onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button className="btn btn-primary" onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
    </div>
  );
};

export default Appp;