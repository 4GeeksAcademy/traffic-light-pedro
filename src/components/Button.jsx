import Button from 'react-bootstrap/Button';


import { useState } from "react"

const nextColor={
    red:"yellow",
    yellow:"green",
    green:"red"
}


const MyButton = ({changeColor,activeColor}) => {
    return (
    <>
    <Button variant="primary" onClick={()=>changeColor(nextColor[activeColor])}>CHANGE COLOR</Button>
    </>)
}

export default MyButton