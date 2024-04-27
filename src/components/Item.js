import React from 'react'

const Item = () => {
    // Массив объектов с загадками
  const riddles = [
    {
        id: 1,
        description: 'Загадка 1: Шли муж с женой, брат с сестрой да муж с шурином. Сколько всего человек?',
        option1: '3',
        option2: '4',
        option3: '5',
        option4: '2',
        correct: 1
    },
    {
        id: 2,
        description: 'Загадка 2: Что становится больше, когда его переворачиваешь?',
        option1: 'Яма',
        option2: 'Тень',
        option3: 'Цифра "6"',
        option4: 'Луна',
        correct: 3
    },
    {
        id: 3,
        description: 'Загадка 3: Сколько существует цифр?',
        option1: 'Десять',
        option2: 'Бесконечность',
        option3: 'Никто не знает',
        option4: 'Девять',
        correct: 1
    },
    {
        id: 4,
        description: 'Загадка 4: Растет 3 клёна. На каждом клёне 7 веток. На каждой ветке по 5 орехов. Сколько всего орехов?',
        option1: '105',
        option2: '70',
        option3: 'Ни одного. На клёне орехи не растут',
        option4: '31',
        correct: 3
    }
];

return (
    <form>
    <div className='mainDiv'>
        <h2>Загадки</h2>
        {riddles.map(riddle => (
            <div key={riddle.id}>
                <p className="question">{riddle.description}</p>
                <input type="radio" name={riddle.id} id={riddle.id + '.1'}></input>{riddle.option1}<br/>
                <input type="radio" name={riddle.id} id={riddle.id + '.2'}></input>{riddle.option2}<br/>
                <input type="radio" name={riddle.id} id={riddle.id + '.3'}></input>{riddle.option3}<br/>
                <input type="radio" name={riddle.id} id={riddle.id + '.4'}></input>{riddle.option4}
            </div>
        ))}
        <button type="submit" className="submit">Отправить</button>
    </div>
    </form>
);
}

export default Item;