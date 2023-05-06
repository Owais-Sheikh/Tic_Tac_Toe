// import { useEffect } from 'react';
import './App.css';
import { ImCross } from 'react-icons/im';
import {CgShapeCircle} from 'react-icons/cg'
import { useState,useEffect,useRouter } from 'react';
import $ from 'jquery'

function App() {
  // const router = useRouter();
  const [player1, setplayer1] = useState(false)
  const [player2, setplayer2] = useState(false)
const [first, setfirst] = useState(0)
const [first2, setfirst2] = useState(0)
const [first3, setfirst3] = useState(0)
const [first4, setfirst4] = useState(0)
const [first5, setfirst5] = useState(0)
const [first6, setfirst6] = useState(0)
const [first7, setfirst7] = useState(0)
const [first8, setfirst8] = useState(0)
const [first9, setfirst9] = useState(0)


  useEffect(() => {
    $('.cross').hide();
    $('.circle').hide();
  }, [])
  const start = () => {
    $('#p1').text('Player 1')
    $('#p2').text('Player 2')
    setplayer1(true)
    setfirst(0)
        setfirst2(0)
        setfirst3(0)
        setfirst4(0)
        setfirst5(0)
        setfirst6(0)
        setfirst7(0)
        setfirst8(0)
        setfirst9(0)
  }
  const reset = ()=>{
    $('#p1').text('Player 1')
    $('#p2').text('Player 2')
        setfirst(0)
        setfirst2(0)
        setfirst3(0)
        setfirst4(0)
        setfirst5(0)
        setfirst6(0)
        setfirst7(0)
        setfirst8(0)
        setfirst9(0)
        setplayer1(false)
        setplayer2(false)
  }
  const b1 = ()=>{
    if(first === 0){
    if(player1 === true){
      $('.cross').show();
      setfirst(1)
      if((first2===1 && first3===1) || (first4===1 && first7===1) || (first5 === 1 && first9===1)){
        $('#p1').text("Won")
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 1 won')
        }, 100);
      }
      else{
      setplayer1(false)
      setplayer2(true)}
    }
    else if(player2 === true){
      $('.circle').show();
      setfirst(2)
      if((first2===2 && first3===2) || (first4===2 && first7===2) || (first5 === 2 && first9===2)){
        $('#p2').text("Won")
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 2 won')
        }, 100);
      }
      else{
      setplayer1(true)
      setplayer2(false)}
    }
  }
else{

}}
  const b2 = ()=>{
    if(first2===0){
    if(player1 === true){
      $('.cross').show();
      setfirst2(1)
      if((first===1 && first3===1) || ( first5===1 && first8===1)){
        $('#p1').text("Won")
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 1 won')
        }, 100);
      }
      else{
      setplayer1(false)
      setplayer2(true)}
    }
    else if(player2 === true){
      $('.circle').show();
      setfirst2(2)
      if((first===2 && first3===2) || ( first5===2 && first8===2)){
        $('#p2').text("Won")
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 2 won')
        }, 100);
      }
      else{
      setplayer1(true)
      setplayer2(false)}
    }
  }}
  
  const b3 = ()=>{
    if(first3===0){
    if(player1 === true){
      $('.cross').show();
      setfirst3(1)
      if((first2===1 && first===1) || (first5===1 && first7 === 1) || (first6 === 1 && first9 === 1)){
        $('#p1').text("Won")
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 1 won')
        }, 100);
      }
      else{
      setplayer1(false)
      setplayer2(true)}
    }
    else if(player2 === true){
      $('.circle').show();
      setfirst3(2)
      if((first2===2 && first===2) || (first5===2 && first7 === 2) || (first6 === 2 && first9 === 2)){
        $('#p2').text("Won")
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 2 won')
        }, 100);
      }else{
      setplayer1(true)
      setplayer2(false)}
    }
  }}
  const b4 = ()=>{
    if(first4===0){
    if(player1 === true){
      $('.cross').show();
      setfirst4(1)
      if((first===1 && first7===1) || (first5===1 && first6===1) ){
        $('#p1').text('Won')
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 1 won')
        }, 100);
      }
      else{
      setplayer1(false)
      setplayer2(true)}
    }
    else if(player2 === true){
      $('.circle').show();
      setfirst4(2)
      if((first===2 && first7===2) || (first5===2 && first6===2) ){
        $('#p2').text('Won')
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 2 won')
        }, 100);
      }else{
      setplayer1(true)
      setplayer2(false)}
    }
  }}
  const b5 = ()=>{
    if(first5===0){
    if(player1 === true){
      $('.cross').show();
      setfirst5(1)
      if((first4===1 && first6===1) || (first2===1 && first8===1) || (first3===1 && first7===1) || (first===1 && first9===1)){
        $('#p1').text('Won')
          setTimeout(() => {
            setplayer1(false)
            setplayer2(false)
            alert('Player 1 won')
          }, 100);
        }
      else{
      setplayer1(false)
      setplayer2(true)}
    }
    else if(player2 === true){
      $('.circle').show();
      setfirst5(2)
      if((first4===2 && first6===2) || (first2===2 && first8===2) || (first3===2 && first7===2) || (first===2 && first9===2)){
        $('#p2').text('Won')
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 2 won')
        }, 100);
      }else{
      setplayer1(true)
      setplayer2(false)}
    }
  }}
  const b6 = ()=>{
    if(first6===0){
    if(player1 === true){
      $('.cross').show();
      setfirst6(1)
      if((first3===1 &&first9===1) || (first4===1 && first5===1)){
        $('#p1').text('Won')
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 1 won')
        }, 100);
      }else{
      setplayer1(false)
      setplayer2(true)}
    }
    else if(player2 === true){
      $('.circle').show();
      setfirst6(2)
      if((first3===2 && first9===2) || (first4===2 && first5===2)){
        $('#p2').text('Won')
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 2 won')
        }, 100);}
        else{
      setplayer1(true)
      setplayer2(false)}
    }
  }}
  const b7 = ()=>{
    if(first7===0){
    if(player1 === true){
      $('.cross').show();
      setfirst7(1)
      if((first===1 && first4===1) || (first8===1 && first9===1) || (first5===1 && first3===1)){
        $('#p1').text("Won")
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 1 won')
        }, 100);
      }else{
      setplayer1(false)
      setplayer2(true)}
    }
    else if(player2 === true){
      $('.circle').show();
      setfirst7(2)
      if((first===2 && first4===2) || (first8===2 && first9===2) || (first5===2 && first3===2)){
        $('#p2').text("Won")
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 2 won')
        }, 100);
      }
      setplayer1(true)
      setplayer2(false)
    }
  }}
  const b8 = ()=>{
    if(first8===0){
    if(player1 === true){
      $('.cross').show();
      setfirst8(1)
      if((first7===1 && first9===1) || (first2===1 && first5===1)){
        $('#p1').text('Won')
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert("Player 1 won")
        }, 100);
      }else{
      setplayer1(false)
      setplayer2(true)}
    }
    else if(player2 === true){
      $('.circle').show();
      setfirst8(2)
      if((first7===2 && first9===2) || (first2===2 && first5===2)){
        $('#p2').text('Won')
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 2 won')
        }, 100);
      }else{
      setplayer1(true)
      setplayer2(false)}
    }
  }}
  const b9 = ()=>{
    if(first9===0){
    if(player1 === true){
      $('.cross').show();
      setfirst9(1)
      if((first7===1 && first8===1) || (first3 === 1 && first6 === 1) || (first===1 && first5 === 1)){
        $('#p1').text('Won')
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 1 won')
        }, 100);
      }else{
      setplayer1(false)
      setplayer2(true)}
    }
    else if(player2 === true){
      $('.circle').show();
      setfirst9(2)
      if((first7===2 && first8===2) || (first3 === 2 && first6 === 2) || (first===2 && first5 === 2)){
        $('#p2').text('Won')
        setTimeout(() => {
          setplayer1(false)
          setplayer2(false)
          alert('Player 2 won')
        }, 100);
      }
      setplayer1(true)
      setplayer2(false)
    }
  }}

  return (
    <>
    <div id='h'>
      <h1 className='font-bold text-4xl font-sans'>Tic <br/> Tac Toe <br/> Game</h1>
      <div className='mt-10 text-white font-semibold'>
            <button onClick={start} className='border-0 bg-green-600 mr-8 px-3 py-2 rounded-lg'>Start Game</button>
            <button onClick={reset} className='border-0 bg-red-600 px-3 py-2 rounded-lg'>Reset Game</button>
          </div>
    </div>
    <div className={` flex flex-col justify-center items-center w-2/3  h-full absolute top-0 right-0`}>
      <div className='flex mb-10'>
        <h1 id='p1' className={`${player1?'border-4 border-black':'border'} mr-12 bg-green-600 px-3 py-2 rounded-xl text-white font-semibold`}>Player 1</h1>
        <h1 id='p2' className={`${player2? 'border-4 border-black':'border'} bg-rose-600 px-3 py-2 rounded-xl text-white font-semibold`}>Player 2</h1>
      </div>
          <div className={`flex`}>
            <div onClick={b1} id='box1' className='h-24 w-24  border-2 border-indigo-500 rounded-tl-lg'>{first===2 && <ImCross className='cross text-6xl mx-auto my-4 text-rose-600'></ImCross>} { first===1 && <CgShapeCircle className='circle text-6xl mx-auto my-4 text-green-600'></CgShapeCircle>}</div>
            <div onClick={b2} id='box2' className='h-24 w-24 border-y-2 border-indigo-500'>{first2===2 && <ImCross className='cross text-6xl mx-auto my-4 text-rose-600'></ImCross>} {first2===1 && <CgShapeCircle className='circle text-6xl mx-auto my-4 text-green-600'></CgShapeCircle>}</div>
            <div onClick={b3} id='box3' className='h-24 w-24  border-2 border-indigo-500 rounded-tr-lg'>{first3===2 && <ImCross className='cross text-6xl mx-auto my-4 text-rose-600'></ImCross>} {first3===1 && <CgShapeCircle className='circle text-6xl mx-auto my-4 text-green-600'></CgShapeCircle>}</div>
          </div>
          <div className={`flex`}>
            <div onClick={b4} id='box4' className='h-24 w-24  border-x-2 border-indigo-500'>{first4===2 && <ImCross className='cross text-6xl mx-auto my-4 text-rose-600'></ImCross>} {first4===1 && <CgShapeCircle className='circle text-6xl mx-auto my-4 text-green-600'></CgShapeCircle>}</div>
            <div onClick={b5} id='box5' className='h-24 w-24 '>{first5===2 && <ImCross className='cross text-6xl mx-auto my-4 text-rose-600'></ImCross>} {first5===1 && <CgShapeCircle className='circle text-6xl mx-auto my-4 text-green-600'></CgShapeCircle>}</div>
            <div onClick={b6} id='box6' className='h-24 w-24  border-x-2 border-indigo-500'>{first6===2 && <ImCross className='cross text-6xl mx-auto my-4 text-rose-600'></ImCross>} {first6===1 && <CgShapeCircle className='circle text-6xl mx-auto my-4 text-green-600'></CgShapeCircle>}</div>
          </div>
          <div className={`flex`}>
            <div onClick={b7} id='box7' className='h-24 w-24 border-2 border-indigo-500 rounded-bl-lg'>{first7===2 && <ImCross className='cross text-6xl mx-auto my-4 text-rose-600'></ImCross>} {first7===1 && <CgShapeCircle className='circle text-6xl mx-auto my-4 text-green-600'></CgShapeCircle>}</div>
            <div onClick={b8} id='box8' className='h-24 w-24 border-y-2 border-indigo-500'>{first8===2 && <ImCross className='cross text-6xl mx-auto my-4 text-rose-600'></ImCross>} {first8===1 && <CgShapeCircle className='circle text-6xl mx-auto my-4 text-green-600'></CgShapeCircle>}</div>
            <div onClick={b9} id='box9' className='h-24 w-24 border-2 border-indigo-500 rounded-br-lg'>{first9===2 && <ImCross className='cross text-6xl mx-auto my-4 text-rose-600'></ImCross>} {first9===1 && <CgShapeCircle className='circle text-6xl mx-auto my-4 text-green-600'></CgShapeCircle>}</div>
          </div>
          
    </div>
    {/* <button onClick={f} id='btn'>Click Me</button> */}
    </>
  );
}

export default App;
