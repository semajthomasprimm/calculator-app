import { useState } from 'react';
import './App.css';

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

  return (
    <main role="main" className={`${toggleState[1] ? 'theme-day' : toggleState[2] ? 'theme-neon' : ''} flex flex-col sm:justify-center h-screen bg-skin-fill py-[30px]`}>
      <div className="flex justify-center sm:items-center">
        <div className="mx-6 w-full sm:w-[540px]">
          <div className="flex justify-between mb-8">
            <p className="text-skin-primary text-[32px] font-[700] tracking-[-0.53px]">calc</p>
            <div className="flex items-end gap-x-[26px]">
              <p className="uppercase h-fit text-skin-primary text-[12px] font-[700] tracking-[1px]">Theme</p>

              <div className="flex flex-col w-[71px]">
                <div className="flex justify-around mx-[7px]">
                  <p className="text-[12px] text-skin-primary font-[700] mr-[11px]">1</p>
                  <p className="text-[12px] text-skin-primary font-[700] mr-[11px]">2</p>
                  <p className="text-[12px] text-skin-primary font-[700]">3</p>
                </div>
                <div className="flex items-center toggle-button rounded-[13px] py-[5px] px-[5px] bg-skin-buttons gap-x-[7px]">

                  <ToggleButton value={0} checked={toggleState[0]} onChange={() => handleToggle(0)}/>
                  <ToggleButton value={1} checked={toggleState[1]} onChange={() => handleToggle(1)}/>
                  <ToggleButton value={2} checked={toggleState[2]} onChange={() => handleToggle(2)}/>

                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-end bg-skin-result rounded-[10px] px-8 h-[88px] sm:h-[128px] mb-6">
            <p className="text-skin-primary h-fit text-[40px] sm:text-[56px] font-[700] tracking-[-0.67px] md:tracking-[-0.93px]">
              {calculation.length === 0 ? 0 : calculation}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-x-[13px] gap-y-[13px] sm:gap-x-[25px] sm:gap-y-6 py-6 px-6 sm:py-8 md:px-[30px] rounded-[10px] bg-skin-buttons">
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

      <div class="mt-4 text-[12px] sm:text-[16px] text-skin-primary text-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a className="text-soft-red" href="https://semajprimm.com">Semaj Primm</a>.
      </div>
    </main>
  );
}

export default App;

const Button = ({value, variant, wide, onClick}) => {

  var style = '';

  if(variant === 'primary'){
    style = 'text-[20px] sm:text-[28px] tracking-[-0.33px] sm:tracking-[-0.47px] uppercase text-white bg-skin-button-primary hover:bg-skin-button-primary-hover shadow-primary';
  } else if(variant === 'secondary'){
    style = 'text-[32px] sm:text-[40px] tracking-[-0.53px] sm:tracking-[-0.67px] text-skin-secondary bg-skin-button-secondary hover:bg-skin-button-secondary-hover shadow-secondary';
  } else if (variant === 'accent'){
    style = 'text-[20px] sm:text-[28px] tracking-[-0.33px] sm:tracking-[-0.47px] text-skin-accent bg-skin-button-accent hover:bg-skin-button-accent-hover shadow-accent';
  }


  return(
    <button
      onClick={onClick}
      className={`${style} font-[700] h-[64px] rounded-[5px] sm:rounded-[10px] ${wide ? 'col-span-2 w-full' : 'min-w-[60px] sm:min-w-[101px]'}`}
    >
      {value}
    </button>
  )
}

const ToggleButton = ({value, checked, onChange}) => {
  return(
    <input 
      className="appearance-none inline-block w-4 h-4 rounded-full" 
      type="radio" 
      name="toggle" 
      value={value}
      checked={checked}
      onChange={onChange}
    />
  )
}