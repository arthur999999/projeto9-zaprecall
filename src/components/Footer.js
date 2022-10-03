import styled from "styled-components"

export default function Footer ({concluied, numCards}) {
    return(
        <Footers> {concluied}/{numCards} CONCLUÍDOS</Footers>
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
`