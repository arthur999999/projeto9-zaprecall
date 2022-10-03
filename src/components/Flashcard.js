import { useState } from "react"
import styled from 'styled-components';
import FlashCardFront from "./FlashCardFront";
import FlashCardOpen from "./FlashCardOpen";
import decksLis from "./DecksLis";



export default function Flashcard({setConcluied, concluied}) {
    const [clicked, setClicked] = useState(0)
    const [listCard, setListCard] = useState([])
    const [contentFront, setContentFront] = useState([])
    const [contentFronIcon, setContentFronIcon] = useState([])
    const [contentFronIcon2, setContentFronIcon2] = useState([])

    console.log(listCard)


    return(
        <>
        
            {decksLis[0].deck.map((m,index)=><><HidePls>
                
                <FlashCardFront index ={index} listCard={listCard} setListCard={setListCard} clicked={clicked} setClicked={setClicked} contentFront={contentFront} contentFronIcon={contentFronIcon} contentFronIcon2={contentFronIcon2}/>
                </HidePls>
                <OpenedCard>
                    <FlashCardOpen index={index} content={m.Q} content2={m.R} listCard={listCard} setClicked={setClicked} setListCard={setListCard} setContentFront={setContentFront} contentFront={contentFront} setConcluied={setConcluied} concluied={concluied} setContentFronIcon={setContentFronIcon} contentFronIcon={contentFronIcon} setContentFronIcon2={setContentFronIcon2} contentFronIcon2={contentFronIcon2}/>
                </OpenedCard>
                <TurnCard></TurnCard>
                </>
                )}
       
        
        </>
        
        
    )

   
}

const TurnCard = styled.div `

`

const OpenedCard = styled.div`
    div.hiddened {
        display: none;
        
    }

    .open {
        min-height: 130px;
        display: flex;
        flex-direction: column;
        background-color: var(--cor-fundo-card);
        cursor: default;
        padding: 20px 0px 0px 13px;
        margin-bottom: 10px;
        cursor: pointer;
        font-family: 'Recursive', cursive;
        border-radius: 5px;
        color: black;
        position: relative;
        width: 300px;
        line-height: 21.6px;
        
       
    }

    img {
        width: 25px;
        position: absolute;
        bottom: 0;
        right: 0;
        margin-bottom: 5px;
        margin-right: 10px;
        cursor: pointer;
    }
`

const HidePls = styled.div`
div.hiddened {
    display: none;
}

.front {
width: 300px;
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
color: black;
border-radius: 5px;
margin: 10px 0px;
padding: 10px 10px;
cursor: pointer;
font-family: 'Recursive', cursive;
}

.red {
    color: #FF3030;
    text-decoration: line-through;
}

ion-icon {
    font-size: 30px;
}

.yellow {
    color: #FF922E;
    text-decoration: line-through;
}

.green {
    color: #2FBE34;
    text-decoration: line-through;
}

img {
    width: 30px;
}
`





