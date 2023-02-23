import React from 'react'

const Advantages = () => {
    const listAdvantages=[
        {name:"ПИВОВАРІННЯ",description:"Пивоваріння має багато переваг, зокрема: можливість створення власного унікального смаку, контроль якості та вмісту алкоголю, стимулювання економіки та сприяння соціалізації."},
        {name:"ПИВНІ БОЧКИ",description:"Зберігання пива в пивних бочках має кілька переваг: зберігається свіжість та смакові властивості, підвищується карбонізація та мається можливість різних варіацій смаків, а також це екологічний спосіб зберігання."},
        {name:"ПАКУВАННЯ",description:"Щоб правильно запакувати пиво, слід використовувати підходящу упаковку, таку як картонні коробки. Пиво слід розміщувати вертикально та захищати від впливу світла, температури та вібрацій. Для додаткової захисту можна використовувати пузирчасту плівку або папір."},
        {name:"БОЧКОВЕ ПИВО",description:"В бочкового пива більш насичений смак, менша карбонізація, можливість зберігання протягом довшого періоду, можливість додавання додаткових ароматів та смаків через взаємодію з деревом бочки."},
       
    ];
    
  return (
    <div className="home__advantages__main">
        <div className="home__advantages__content">
            {listAdvantages.map((x,idx)=>
                <div className="home__advantage">
                    <div className="home__atvantage__img">
                        <img src={'/imgs/main-home-icon-'+(idx+1)+".png"}/>
                    </div>
                    <div className="home__atvantage__text">
                        <div className="home__atvantage__name">
                            {listAdvantages[idx].name}
                        </div>
                        <div className="home__atvantage__description">
                            {listAdvantages[idx].description}
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Advantages
