import React from 'react';
import Dropdown from "./component/dropdown/Dropdown";
import './App.css';
function App() {
  // managing the state
  const [open, setopen] = React.useState(false);
  // the array which has to be iterated and the data of which has to be shown
  const arr = ["option1", "option2", "option3", "option4", "option5", "option6", "option7"];

  function handleOpen() {
    setopen((prevState) => {
      return !prevState;
    })
  }
  function handleClose() {
    setopen(false);
  }
  return (
    <div className="App" >
      <h2>Click on the button</h2>
      <button className='hovering' onMouseOver={handleOpen} >Hover over this button</button>
      {open && <div className="element"  >
        <Dropdown arr={arr} disappear={handleClose} />
      </div>}
    </div>
  );
}

export default App;
