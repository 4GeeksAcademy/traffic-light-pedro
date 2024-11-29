import { useState } from "react"
import Light from "./Light"
import MyButton from "./Button"

const colors =["red","yellow","green"]


const TrafficLight = () => {

    const [activeColor,setActiveColor]=useState("red")

    return (
    <>
    
    {colors.map((color)=>(<Light lightColor={color} changeColor={setActiveColor} activeColor={activeColor}></Light>))} 
    <MyButton activeColor={activeColor} changeColor={setActiveColor}></MyButton>

  
    
    </>)
}

export default TrafficLight