import React, {useState} from 'react'
import Square from './Square';
import "./Board.css";

function Board() {
    const [isXTurn, setIsXTurn] = useState(true);
    const [state, setState]= useState(Array(9).fill(null));

    const winnerLogic= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const handleClick=(index)=>{
        if(state[index]!= null) 
            return; 
        const copyState=[...state];
        copyState[index]= isXTurn? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }

    const checkWinner=()=>{
        for(let logic of winnerLogic)
        {
            const [a,b,c]= logic;
            if(state[a]!=null && state[a]=== state[b] && state[b]=== state[c])
                return state[a];
        }
        return false;
    }
    const isWinner = checkWinner();

    const handleReset=()=>{
        setState(Array(9).fill(null));
    }

    return (
        <>
            {isWinner ?
                 <>
                <h1 className='header'>Game over, player {isXTurn? "O" : "X"} wins</h1>
                <button className='buttonCSS' onClick={handleReset}>Reset Game</button>
                </>
                :
                <>
                    <h1 className="header"> {isXTurn? "X" : "O"}'s turn</h1>
                    <div className='board'>
                    <div className="board-row">
                        <Square onClick={()=> handleClick(0)} value={state[0]} />
                        <Square onClick={()=> handleClick(1)} value={state[1]} />
                        <Square onClick={()=> handleClick(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={()=> handleClick(3)} value={state[3]} />
                        <Square onClick={()=> handleClick(4)} value={state[4]} />
                        <Square onClick={()=> handleClick(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={()=> handleClick(6)} value={state[6]} />
                        <Square onClick={()=> handleClick(7)} value={state[7]} />
                        <Square onClick={()=> handleClick(8)} value={state[8]} />
                    </div>
                    </div>
                </>
            }
        </>
    )
}

export default Board;