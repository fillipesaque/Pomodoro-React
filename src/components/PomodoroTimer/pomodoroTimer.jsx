import React, { useEffect, useState } from "react";
import "./pomodoroTimer.css";



const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25); /* Controla os min */
  const [seconds, setSeconds] = useState(0); /* controla os segundos */
  const [isActive, setIsActive] = useState(false); /* controla se esta ativo ou nao */
  const [userTime, setUserTime] = useState(25); /* guarda o tempo atual */

  useEffect(() => {
    let interval;

    if (isActive && (minutes > 0 || seconds > 0)) {
        interval = setInterval(() => {
            if (seconds === 0) {
                setMinutes(minutes -1 );
                setSeconds(59)
            }else {
                setSeconds(seconds -1)
            }
        }, 1000)
    }else if (minutes === 0 && seconds === 0 ) {
        alert('Tempo Terminou');
        resetTimer();
    }else{
        clearInterval(interval)
    }
    return() => clearInterval(interval)
  }, [isActive , minutes ,seconds])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const handleTimeChange = (e) => {
    const newTime = Number(e.target.value);
    setUserTime(newTime);
    if (!isActive) {
      setMinutes(newTime);
      setSeconds(0);
    }
  };

  const resetTimer = () => {
    setIsActive(false)
    setMinutes(userTime)
    setSeconds(0)
  }

  return (
    <div className="TimerContainer">
      <h1 className="number">
        {String(minutes).padStart(2, "0")} :{""}
        {String(seconds).padStart(2, "0")} 
      </h1>
      <p className="text">Definir Tempo (minutos)</p>
      <div className="InputContainer">
        <input
        type="number"
        placeholder="Digite Aqui ..."  
        value={userTime}
        onChange={handleTimeChange}
        isDisabled={isActive}
        />
      </div>
      <div className="BtnContainer">
        <button onClick={toggleTimer}> 
            {isActive ? "Pausar" : "Iniciar"}
        </button>
        <button onClick={resetTimer}>
            Reiniciar
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
