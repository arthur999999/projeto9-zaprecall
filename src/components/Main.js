import Flashcard from "./Flashcard"

export default function Main ({ setConcluied, concluied}) {
    return(
        <div className="main">
            <Flashcard  setConcluied={setConcluied} concluied={concluied}/>
        </div>
    )
}