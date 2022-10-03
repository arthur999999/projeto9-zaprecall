export default function Buttons ({setClicked, setListCard, setContentFront, index, contentFront, setConcluied, concluied}) {
    function ButtonRed () {
        setClicked(0)
        setListCard([])
        setContentFront([...contentFront, index])
        let newConcluied = concluied + 1
        setConcluied(newConcluied)
        

    }

    return (
    <div className="buttons">
        <button onClick={()=> ButtonRed()}>Não <br/> lembrei</button>
        <button>Quase não lembrei</button>
        <button>Zap!</button>
    </div>
    )
}