

export default function FlashCardFront (props) {
    const contentFron = props.contentFront.includes(props.index) ? <><img src="./assets/img/close-circle-icon.svg" alt="whataa" /></> : <><img src="./assets/img/play-outline-icon.svg" alt="whataa" /></>
    
    function clickCard () {
        props.setListCard([...props.listCard, props.index])
        props.setClicked(1)

    }
    return (
        <div onClick={props.clicked === 1? '' : ()=> clickCard() } className={props.listCard.includes(props.index)? 'hiddened' : 'front'}><div>Pergunta {props.index + 1}</div>{contentFron}</div>
    )
}