import React from 'react'
import { CiBeerMugFull} from "react-icons/ci";

const BeerFlavors = ({isMain}) => {
    const listBeer=[
        {name:"Budweiser",description: "популярне американське пиво з легким смаком та ароматом.", price:"130₴"},
        {name:"Miller Lite",description: "світле пиво зі зниженим вмістом калорій та вуглеводів.", price:"100₴"},
        {name:"Michelob Ultra",description: "світле пиво зі зниженим вмістом калорій та вуглеводів.", price:"90₴"},
        {name:"Coors",description: "світле пиво зі зниженим вмістом калорій та вуглеводів.", price:"140₴"},
        {name:"Corona",description: "світле пиво зі зниженим вмістом калорій та вуглеводів.", price:"65₴"},
        {name:"Heineken",description: "світле пиво зі зниженим вмістом калорій та вуглеводів.", price:"200₴"},
        {name:"Natural Light",description: "світле пиво зі зниженим вмістом калорій та вуглеводів.", price:"105₴"},
        {name:"Busch",description: "світле пиво зі зниженим вмістом калорій та вуглеводів.", price:"85₴"},
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
