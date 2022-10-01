import { useState } from "react"
import styled from 'styled-components';


const decksLis = [ {
    
    deck: [
    { Q: 'O que é JSX?', R: 'Uma extensão de linguagem do JavaScript'}, {Q: 'O React é __', R: 'uma biblioteca JavaScript para construção de interfaces'}, {Q: 'Componentes devem iniciar com __', R: 'letra maiúscula'}]
    }, {deck: [
        {  Q: 'neymarzito', R: 'gayules'}, {Q: 'apaniii', R: 'whattttt'}
    ]}
]

export default function Flashcard() {
    const [listCard, setListCard] = useState([])
    console.log(listCard)

    function openCard (question){

    }

    return(
        <>
        
            {decksLis[0].deck.map((m,index)=><><HidePls>
                
                <div onClick={()=> setListCard([...listCard, index])} className={listCard.includes(index)? 'hiddened' : ''}><div >Pergunta {index + 1}</div></div>
                </HidePls>
                <OpenedCard>
                    <div className={listCard.includes(index)? '' : 'hiddened'}>{m.Q}</div>
                </OpenedCard>
                </>
                )}
       
        
        </>
        
        
    )

   
}

const OpenedCard = styled.div`
    div.hiddened {
        display: none;
    }

    div {
        min-height: 130px;
        display: flex;
        flex-direction: column;
        background-color: var(--cor-fundo-card);
        cursor: default;
        padding: 20px 10px;
        margin-bottom: 10px;
        cursor: pointer;
        font-family: 'Recursive', cursive;
        border-radius: 5px;
    }
`

const HidePls = styled.div`
div.hiddened {
    display: none;
}

div {
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
`





