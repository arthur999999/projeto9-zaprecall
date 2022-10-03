import { useState } from "react"
import styled from "styled-components"
import Buttons from "./Buttons"


export default function FlashCardOpen (props) {
    const [icon, setIcon] = useState(<img src="./assets/img/setinha.png" alt="whatver"/>)
    const [buttons, setButtons] = useState()
    function turnCard(){
        setContent(props.content2)
        setIcon('')
        setButtons( <Buttonss >
           <Buttons setClicked={props.setClicked} setListCard={props.setListCard} setContentFront={props.setContentFront} index={props.index} contentFront={props.contentFront} setConcluied={props.setConcluied} concluied={props.concluied} setContentFronIcon={props.setContentFronIcon} contentFronIcon={props.contentFronIcon} setContentFronIcon2={props.setContentFronIcon2} contentFronIcon2={props.contentFronIcon2}/>
        </Buttonss>)

    }
    const [content, setContent] = useState(props.content)

    return(
        <div onClick={()=> turnCard()} className={props.listCard.includes(props.index)? 'open' : 'hiddened'}>{content} {icon}
        {buttons}
         </div>
    )
}

const Buttonss = styled.div`
    
    .buttons {

        display: flex;
        flex-direction: row;
        margin-top: 25px;
    }    

    .buttons button:nth-child(1) {
        background-color: #FF3030;
        
    }

    .buttons button:nth-child(2) {
        background-color: #FF922E;
        
    }

    .buttons button:nth-child(3) {
        background-color: #2FBE34;
        
    }
    
    

    button {
        width: 85px;
        height: 37px;
        margin-right:8px;
        border: none;
        border-radius: 5px;
        color: white;
        font: 400 12px 'Recursive', sans-serif;
        cursor: pointer;

    }
`