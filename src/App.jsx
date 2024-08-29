import "./App.css";
import PomodoroTimer from "./components/PomodoroTimer/pomodoroTimer";

function App() {
  return (
    <>
      <div className="AppContainer">
        <h1 className="title">Pomodoro</h1>
        <span className="iconRelogio">
          <div class="loader">
            <svg
              viewBox="0 0 16 16"
              class="light bi bi-lightning-charge-fill"
              fill="currentColor"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
            </svg>
          </div>
        </span>

        <PomodoroTimer />
      </div>
    </>
  );
}

export default App;
