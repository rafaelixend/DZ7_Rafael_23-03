let number1 = Number(prompt('Введите первое число'))
let number2 = Number(prompt('Введите второе число'))
let operation = prompt('Выберите дейстаие \n+\n-\n*\n/')

const calc = () => {
    let result
    (isNaN(number1) || isNaN(number2)) ?
        alert('Введите только числа!') :
        true
    switch (operation) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
                (number2 === 0) ? result = 'Ошибка' : result = number1 / number2
            break
        default:
            alert('Выберите верное взаимодействие')
    }
    alert(result)
}
calc()
