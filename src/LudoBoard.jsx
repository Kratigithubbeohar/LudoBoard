import {useState} from 'react';
export default function LudoBoard(){
    // normal simple way

    // let [blue,setBlue] = useState(0);
    // let [red,setRed] = useState(0);
    // let [Green,setGreen] = useState(0);
    // let [yello,setYellow] = useState(0);

    // BETTER WAY TO DO IT..

    let [moves , setMoves] = useState({blue:0,red:0,green:0,yellow:0})
    let [arr , setArr] = useState(['no moves']);
    let updateBlue =()=>{
        setMoves((previous)=>{
            return {...previous,blue:previous.blue+1}
        });
        arr.push('blue moves');
        setArr(arr);
        console.log(arr);
    }
    let updateRed =()=>{
        setMoves((previous)=>{
            return {...previous,red:previous.red+1}
        });
        
    }
    let updateGreen =()=>{
        setMoves((previous)=>{
            return {...previous,green:previous.green+1}
        });
        
    }
    //callBack
    let updateYellow =()=>{
        setMoves((previous)=>{
            return {...previous,yellow:previous.yellow+1}
        });
        
    }
    return (
        <div style = {{ border:"2px solid black", width:"150px",height:"410px",borderRadius:"20px",boxShadow:"2px 2px 9px grey"}}>
            <p>Blue moves = {moves.blue}</p>
            <p>{arr}</p>
            <button onClick = {updateBlue} style={{backgroundColor:"blue"}}>+1</button>
            <p>Red moves = {moves.red}</p>
            <button onClick = {updateRed} style={{backgroundColor:"red"}}>+1</button>
            <p>Green moves = {moves.green}</p>
            <button onClick = {updateGreen} style={{backgroundColor:"green"}}>+1</button>
            <p>Yellow moves = {moves.yellow}</p>
            <button onClick = {updateYellow} style={{backgroundColor:"yellow"}}>+1</button>
        </div>
    )
}
