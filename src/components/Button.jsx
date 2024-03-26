
export const Button = ({value, variant, wide, onClick}) => {

    var style = '';
  
    if(variant === 'primary'){
      style = 'text-h5 sm:text-h4 tracking-tight sm:tracking-tighter uppercase text-white bg-skin-button-primary hover:bg-skin-button-primary-hover shadow-primary';
    } else if(variant === 'secondary'){
      style = 'text-h3 sm:text-h2 tracking-tightest sm:tracking-tightest_xs text-skin-secondary bg-skin-button-secondary hover:bg-skin-button-secondary-hover shadow-secondary';
    } else if (variant === 'accent'){
      style = 'text-h5 sm:text-h4 tracking-tight sm:tracking-tighter text-skin-accent bg-skin-button-accent hover:bg-skin-button-accent-hover shadow-accent';
    }
  
  
    return(
      <button
        onClick={onClick}
        className={`${style} font-bold h-[64px] rounded-xs sm:rounded ${wide ? 'col-span-2 w-full' : 'min-w-[60px] sm:min-w-[101px]'}`}
      >
        {value}
      </button>
    )
}