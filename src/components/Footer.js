import styled from "styled-components"

export default function Footer ({concluied, numCards, listIcon}) {
    return(
        <Footers><div>{listIcon.map((m, key)=><Icons><span key={key}>{m}</span></Icons>)}</div><div data-identifier="flashcard-counter">{concluied}/{numCards} CONCLUÍDOS</div> </Footers>
    )
}

const Footers = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1;
    width: 100%;
    min-height: 70px;
    padding: 14px 10px;
    font-size: 18px;
    color: black;
    position: fixed;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-family: 'Recursive', cursive;
    font-weight: 400;
    gap: 20px;
    align-items: center;
    justify-content: center;

    div{
        display: flex;
    }

`

const Icons = styled.div`
    ion-icon {
        font-size: 23px;
    }

    .green {
        color: #2FBE34;
    }

    .yellow {
        color: #FF922E;
    }

    .red {
        color: #FF3030;
    }
`