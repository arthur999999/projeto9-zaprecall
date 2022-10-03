

export default function FlashCardFront (props) {
    let contentFron
    if(props.contentFront.includes(props.index)){
        contentFron = <><ion-icon data-identifier="flashcard-status" name="close-circle"></ion-icon></>
        
    }else if(props.contentFronIcon.includes(props.index)){
        contentFron = <><ion-icon data-identifier="flashcard-status" name="help-circle"></ion-icon></>
    }else if(props.contentFronIcon2.includes(props.index)){
        contentFron = <><ion-icon data-identifier="flashcard-status" name="checkmark-circle"></ion-icon></>
    } else {
        contentFron = <><img src="./assets/img/play-outline-icon.svg" alt="whataa" /></>
    }

    let classCardFront
    if(props.listCard.includes(props.index)){
        classCardFront = 'hiddened'
    }else if(props.contentFront.includes(props.index)){
        classCardFront = 'front red'
    }else if(props.contentFronIcon.includes(props.index)){
        classCardFront = 'front yellow'
    }else if(props.contentFronIcon2.includes(props.index)){
        classCardFront = 'front green'
    } else {
        classCardFront = 'front'
    }


    let onClickCard 
    if(props.clicked === 1){
        onClickCard = false
    }else if(props.contentFront.includes(props.index) || props.contentFronIcon.includes(props.index) || props.contentFronIcon2.includes(props.index)){
        onClickCard = false
    } else {
        onClickCard = ()=> clickCard()
    }
    
    function clickCard () {
        props.setListCard([...props.listCard, props.index])
        props.setClicked(1)

    }
    return (
        

            <div onClick={onClickCard} data-identifier="flashcard-index-item flashcard-show-btn"  className={classCardFront}><div>Pergunta {props.index + 1}</div>{contentFron}</div>
        
    )
}

