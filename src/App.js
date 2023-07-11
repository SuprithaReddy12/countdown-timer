import { useState } from 'react';
import './App.css';

function App() {
  let [time, setTime] = useState(null)
  let [interval, setint] = useState(null)
  const handleTime = (e) => {
    e.preventDefault();
    let data = new FormData(e.target)
    let gettime = data.get("number")
    setTime(gettime)
    setint(setInterval(() => {
      setTime((time) => {
        if (time > 0) {
          return time - 1
        }
        destroy();
        return time;
      })
    }, 1000));
  }
  const destroy = () => {
    if (interval) {
      clearInterval(setint)
      setint(null)
    }
  }
  return (
    <div className="App">
      <h1>CountDown Timer</h1>
      <div id='current-time'>
        <form onSubmit={(e) => handleTime(e)}>
          <input
            type="number"
            name='number'
            min="0"
            placeholder='Enter time in seconds'
            id='timeCount'>
          </input>
          <button type="submit" style={{ marginLeft: "10px" }}>
            Start
          </button>
        </form>
        <div>{time}</div>
      </div>
    </div>
  );
}

export default App;
