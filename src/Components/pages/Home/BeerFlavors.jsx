import React from 'react'
import { CiBeerMugFull} from "react-icons/ci";

const BeerFlavors = ({isMain}) => {
    const listBeer=[
        {name:"Budweiser",description: "популярне американське пиво з легким смаком та ароматом.", price:"130₴"},
        {name:"Miller Lite",description: "Чорний, міцний, смажений, шоколадний, кавовий, оксамитовий.", price:"100₴"},
        {name:"Michelob Ultra",description: "Цитрусово-смолистий, свіжий, гіркий, насичений, ароматний.", price:"90₴"},
        {name:"Coors",description: "Солодовий, карамельний, пряний, дріжджовий, алкогольний, глибокий.", price:"140₴"},
        {name:"Corona",description: "Кисло-солодке, фруктове, вишневе, легке, освіжаюче.", price:"65₴"},
        {name:"Heineken",description: "Вишневий, дубовий, ванільний, темний, багатий, теплий.", price:"200₴"},
        {name:"Natural Light",description: "Карамельний, медовий, солодкий, м'який, збалансований, кришталевий.", price:"105₴"},
        {name:"Busch",description: "Кавовий, темний, міцний, ароматний, зігріваючий, насичений.", price:"85₴"},
    ]
    console.log(isMain)
  return (
    <div className="beer__flavors__main">
        <div className="beer__flavors__content">
            <div style={isMain==true?{height:"150px",display:"flex",alignItems:"flex-end"}:{}} className="flavors__title">
                СМАКИ ПИВА <CiBeerMugFull color='#FC0'/>
            </div>
            <div className="flavors__list">
                {listBeer.map((x,idx)=>
                    <div key={idx} className="one__flavors">
                        <div className="one__flavors__text">
                            <div className="one__flavors__title">
                                {x.name} 
                            </div>
                            <div className="one__flavors__description">
                                {x.description}
                            </div>
                        </div>
                        <div className="one__flavors__price">
                            {x.price}
                        </div>
                    </div>
                    
                )}
            </div>
        </div>
    </div>
  )
}

export default BeerFlavors
