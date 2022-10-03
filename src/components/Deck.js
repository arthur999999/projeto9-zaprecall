import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"

export default function Deck ({ setConcluied, concluied, setListIcon, listIcon}) {
    return(
        <DeckStyle>

        <div className="deck">
            <Header/>
            <Main  setConcluied={setConcluied} concluied={concluied} setListIcon={setListIcon} listIcon={listIcon}/>
        </div>
        </DeckStyle>
    )
}

const DeckStyle =styled.div`
.deck {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .deck .header {
  
    position: fixed;
    background-color: var(--cor-fundo);
    height: 80px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    padding-bottom: 30px;
    font-size: 36px;
    color: white;
    font-family: "Righteous";
    z-index: 1;
    padding-top: 30px;
    
    
    
  }

  .deck .main {
    max-height: 400px;
    overflow-y: auto;
  }

  .deck .main::-webkit-scrollbar {
    display: none;
  }

  .deck .header img {
    width: 52px;
    height: 60px;
    margin-right: 30px;
  }
`