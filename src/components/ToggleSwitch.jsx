
export const ToggleSwitch = ({optionOne, optionTwo, optionThree}) => {
    return(
      <div className="flex flex-col w-[71px]">
        <div className="flex justify-around mx-[7px]">
          <p className="text-h6 text-skin-primary font-bold mr-[11px]">1</p>
          <p className="text-h6 text-skin-primary font-bold mr-[11px]">2</p>
          <p className="text-h6 text-skin-primary font-bold">3</p>
        </div>
        <div className="flex items-center toggle-button rounded-lg py-[5px] px-[5px] bg-skin-buttons gap-x-[7px]">
          <input 
            className="appearance-none inline-block w-4 h-4 rounded-full" 
            type="radio" 
            name="toggle" 
            value={optionOne.value}
            checked={optionOne.checked}
            onChange={optionOne.onChange}
          />
  
          <input 
            className="appearance-none inline-block w-4 h-4 rounded-full" 
            type="radio" 
            name="toggle" 
            value={optionTwo.value}
            checked={optionTwo.checked}
            onChange={optionTwo.onChange}
          />
  
          <input 
            className="appearance-none inline-block w-4 h-4 rounded-full" 
            type="radio" 
            name="toggle" 
            value={optionThree.value}
            checked={optionThree.checked}
            onChange={optionThree.onChange}
          />
  
        </div>
      </div>
    )
}