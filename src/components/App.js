import { useState } from "react"
import Deck from "./Deck"
import Footer from "./Footer"
import decksLis from "./DecksLis"

export default function App () {
    const [listIcon, setListIcon] = useState([])
    const [concluied, setConcluied] = useState(0)
    const [numCards, setNumCards] = useState(decksLis[0].deck.length)
    return(
        <>
        
        <Deck setNumCards={setNumCards} setConcluied={setConcluied} concluied={concluied} listIcon={listIcon} setListIcon={setListIcon}/>
        <Footer concluied={concluied} numCards={numCards} listIcon={listIcon}/>
        </>

        
    )
}