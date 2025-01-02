export default function NavigationButton({clickFn, rotate}){
    return (
        <button 
            onClick={() => clickFn()} 
            className={`${rotate} border-2 border-white rounded-full w-[30px] aspect-square grid items-center justify-center
                        hover:bg-purple-100/50 hover:border-purple-100/50 transition-all`}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 16 9" fill="none">
                <path d="M1 0.5L8 7.5L15 0.5" stroke="white" strokeWidth='2' strokeLinecap="round"/>
            </svg>
        </button>
    )
}