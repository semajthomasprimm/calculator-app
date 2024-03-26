import { useState } from 'react';
import './App.css';
import { Button, ToggleSwitch } from './components';

const App = () => {

  // calculator icon
  const buttons = [
    ["7", "8", "9", "Del"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "-"],
    [".", "0", "/", "x"],
    ["Reset", "="]
  ]
  
  // state variable for calculation
  const [calculation, setCalculation] = useState("");

  // state variable for 3-way toggle button theme. sets theme 1 as default 
  const [toggleState, setToggleState] = useState([true, false, false]);


  // Updates toggleState based on index
  const handleToggle = (index) => {
    const newToggleState = [false, false, false];
    newToggleState[index] = true;
    setToggleState(newToggleState);
  }

  // Handles calculator logic
  const handleButtonClick = (btn) => {
    if(btn === "="){
      const lastChar = calculation.charAt(calculation.length-1);
      if(lastChar !== "+" && lastChar !== "-" && lastChar !== "*" && lastChar !== "/"){
        // eslint-disable-next-line
        setCalculation(eval(calculation).toLocaleString());
      }
    } else if(btn === "Reset"){
      setCalculation("");
    } else if(btn === "Del"){
      if(calculation.length > 0){
        setCalculation(calculation.slice(0, calculation.length - 1));
      }
    } else if(btn === "x"){
      setCalculation(calculation + "*")
    } else if(btn === "+" || btn === "-" || btn === "/"){
      setCalculation(calculation + btn);
    } else{
      setCalculation(calculation + btn);
    }

  }

  // Represents toggle value, checked state, and onChange function
  const toggleOptions = [
    {value: 0, checked: toggleState[0], onChange: () => handleToggle(0)},
    {value: 1, checked: toggleState[1], onChange: () => handleToggle(1)},
    {value: 2, checked: toggleState[2], onChange: () => handleToggle(2)}
  ]

  return (
    <main role="main" className={`${toggleState[1] ? 'theme-day' : toggleState[2] ? 'theme-neon' : ''} flex flex-col sm:justify-center h-screen bg-skin-fill py-[30px]`}>
      <div className="flex justify-center sm:items-center">
        <div className="mx-6 w-full sm:w-[540px]">
          
          <div className="flex justify-between mb-8">
            <p className="text-skin-primary text-h3 font-bold tracking-tightest">calc</p>
            <div className="flex items-end gap-x-[26px]">
              <p className="uppercase h-fit text-skin-primary text-h6 font-bold tracking-widest">Theme</p>
              <ToggleSwitch optionOne={toggleOptions[0]} optionTwo={toggleOptions[1]} optionThree={toggleOptions[2]} />
            </div>
          </div>

          <div className="flex flex-col justify-center items-end bg-skin-result rounded px-8 h-[88px] sm:h-[128px] mb-6">
            <p className="text-skin-primary h-fit text-h2 sm:text-h1 font-bold tracking-tightest_xs md:tracking-tightest_2xs">
              {calculation.length === 0 ? 0 : calculation}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-x-[13px] gap-y-[13px] sm:gap-x-[25px] sm:gap-y-6 py-6 px-6 sm:py-8 md:px-[30px] rounded bg-skin-buttons">
            {
              buttons.flat().map((button, i) => {
                return(
                  <Button 
                    value={button} 
                    key={i}
                    variant={button === "Del" || button === "Reset" ? "primary" : button === "=" ? "accent" : "secondary"}
                    wide={button === "Reset" || button === "=" ? true : null}
                    onClick={() => handleButtonClick(button)}
                  />
                )
              })
            }
          </div>
        </div>
      </div>

      <div class="mt-4 text-subtitle sm:text-body text-skin-primary text-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a className="text-soft-red" href="https://semajprimm.com">Semaj Primm</a>.
      </div>
    </main>
  );
}

export default App;