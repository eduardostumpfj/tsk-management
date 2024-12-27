export default function SaveButton({saveFn}){
    function handleSave(e){
        saveFn(e)
    }

    return (
        <button
        className="bg-purple-100 min-w-[100px] mr-3 w-fit text-light-100 px-4 py-2 rounded-full justify-self-end hover:bg-purple-300 transition-[backGround]"
        type="button"
        onClick={(e) => handleSave(e)}
        >
            Save
        </button>
    )
}