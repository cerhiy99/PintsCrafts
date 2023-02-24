import React from 'react'

const Teem = () => {
    const listTeem=[
        {name:"Андрій Дубовик",description:"Бармен - професійний майстер змішування коктейлів та сервірування напоїв, з вмінням швидко та точно обслуговувати клієнтів."},
        {name:"Віктор Лисенко",description:"Офіціант - досвідчений працівник, з високою культурою обслуговування, здатний підібрати оптимальне рішення для кожного клієнта."},
        {name:"Юрій Петренко",description:"Кухар - творча людина з досвідом роботи, з вмінням готувати смачні та естетичні закуски для клієнтів."},
        {name:"Сергій Мельник",description:"Менеджер - професіонал у справах ресторанного бізнесу, здатний керувати персоналом та координувати роботу закладу в цілому, з великою увагою до клієнтів та їх потреб."},
        {name:"Наталія Шевченко",description:"Бариста - експерт в кавовому мистецтві, з вмінням готувати різноманітні кавові напої, та з великою увагою до деталей."},
        {name:"Олексій Ткачук",description:"Прибиральник - відповідальна людина, яка забезпечує бездоганну чистоту в залі та кухні, та здатний оперативно виправляти будь-які неполадки."},
    ]
  return (
    <div className="teem__main">
        <div className="teem__content">
            <div className="teem__title">
                КОМАНДА
            </div>
            <div className="list__teem">
                {listTeem.map((x,idx)=>
                    <div className="team__member">
                        <div className="teem__member__img">
                            <img src={"/imgs/Team-img-"+(idx+1)+".jpg"}/>
                        </div>
                        <div className="name__member__team">
                            {x.name}
                        </div>
                        <div className="description__team__member">
                            {x.description}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Teem
