import Flashcard from "./Flashcard"

export default function Main ({ setConcluied, concluied, listIcon, setListIcon}) {
    return(
        <div className="main">
            <Flashcard  setConcluied={setConcluied} concluied={concluied} listIcon={listIcon} setListIcon={setListIcon}/>
        </div>
    )
}