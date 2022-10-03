export default function Buttons ({setClicked, setListCard, setContentFront, index, contentFront, setConcluied, concluied, setContentFronIcon, contentFronIcon, setContentFronIcon2, contentFronIcon2}) {
    function ButtonRed () {
        setClicked(0)
        setListCard([])
        setContentFront([...contentFront, index])
        let newConcluied = concluied + 1
        setConcluied(newConcluied)        
    }

    function ButtonYellow () {
        setClicked(0)
        setListCard([])
        setContentFronIcon([...contentFronIcon, index])
        let newConcluied = concluied + 1
        setConcluied(newConcluied)   
    }

    function ButtonGreen () {
        setClicked(0)
        setListCard([])
        setContentFronIcon2([...contentFronIcon2, index])
        let newConcluied = concluied + 1
        setConcluied(newConcluied)   
    }

    return (
    <div className="buttons">
        <button onClick={()=> ButtonRed()}>Não <br/> lembrei</button>
        <button onClick={()=> ButtonYellow()}>Quase não lembrei</button>
        <button onClick={()=> ButtonGreen()}>Zap!</button>
    </div>
    )
}