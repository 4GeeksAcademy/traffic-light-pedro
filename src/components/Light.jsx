
const Light = ({lightColor,changeColor,activeColor}) => {
    const isSelected= lightColor===activeColor
    
    return (<>    

    <div onClick={()=>{changeColor(lightColor)}
    }
        style={{
          width: '100px',
          height: '100px',
          backgroundColor:lightColor ,
          border:isSelected?'solid 3px':'none'
        }}
        className="rounded-circle"
      ></div>
    
    
    </>)
}

export default Light