import React from 'react'
import { CiBeerMugFull} from "react-icons/ci";

const CraftedToInspire = () => {
  return (
    <div className='crafted__to__inspire__main'>
        <div className="crafted__to__inspire__content">
            <div className="crafted__text">
                <div className="crafted__title">
                    СТВОРЕНО, ЩОБ НАДИХАТИ <CiBeerMugFull color='#FC0'/>
                </div>
                <div className="crafted__description">
                    Після того, як сомельє оцінив усі недоліки та переваги пива, він підсумовує їх та формує загальне враження. Смак пива характеризують чотирма основними показниками: солодкість, гіркота, кислота та умамі. Подекуди використовують п’ятий – солоність.
                </div>
            </div>
            <div className="crafted__img">
                <img src="/imgs/main-home-img-1.png"/>
            </div>
        </div>
    </div>
  )
}

export default CraftedToInspire
