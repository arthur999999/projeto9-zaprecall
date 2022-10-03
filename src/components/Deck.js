import Header from "./Header"
import Main from "./Main"

export default function Deck ({ setConcluied, concluied}) {
    return(
        <div className="deck">
            <Header/>
            <Main  setConcluied={setConcluied} concluied={concluied}/>
        </div>
    )
}