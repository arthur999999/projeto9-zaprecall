export default function Buttons ({setClicked, setListCard, setContentFront, index, contentFront, setConcluied, concluied, setContentFronIcon, contentFronIcon, setContentFronIcon2, contentFronIcon2, listIcon, setListIcon}) {
    function ButtonRed () {
        setClicked(0)
        setListCard([])
        setContentFront([...contentFront, index])
        let newConcluied = concluied + 1
        setConcluied(newConcluied)
        setListIcon([...listIcon,<div className="red"><ion-icon  name="close-circle"></ion-icon></div> ])        
    }

    function ButtonYellow () {
        setClicked(0)
        setListCard([])
        setContentFronIcon([...contentFronIcon, index])
        let newConcluied = concluied + 1
        setConcluied(newConcluied)
        setListIcon([...listIcon,<div className="yellow"><ion-icon  name="help-circle"></ion-icon></div> ])
    }

    function ButtonGreen () {
        setClicked(0)
        setListCard([])
        setContentFronIcon2([...contentFronIcon2, index])
        let newConcluied = concluied + 1
        setConcluied(newConcluied)
        setListIcon([...listIcon,<div className="green"><ion-icon  name="checkmark-circle"></ion-icon></div> ])  
    }

    return (
    <div className="buttons">
        <button onClick={()=> ButtonRed() } data-identifier="forgot-btn">Não <br/> lembrei</button>
        <button onClick={()=> ButtonYellow()} data-identifier="almost-forgot-btn">Quase não lembrei</button>
        <button onClick={()=> ButtonGreen()} data-identifier="zap-btn">Zap!</button>
    </div>
    )
}