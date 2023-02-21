import React, { useState } from 'react'

const WhereToTry = () => {
    
    const [isClickWhereToTry,setIsClickWhereToTry]=useState(false);
  return (
    <div className="where__to__try__main" onClick={()=>setIsClickWhereToTry(!isClickWhereToTry)}>
        <div className="where__to__try__text">
            <div className="where__to__try__text__container">
                <div className="where__to">Де ми&nbsp;</div>
                <div className="try">знаходимся?</div>
            </div>
        </div>
        {isClickWhereToTry?
        <div className={"where__to__try__address show"}>
            <div>Підмурна 28</div>
            <div>Пекарська, 1А</div>
            <div>Городоцька, 40</div>
        </div>:<></>}
        <div className="triangle"></div>
    </div>
  )
}

export default WhereToTry
