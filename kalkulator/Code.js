let firstnumber = ''
let secnumber = ''
let sign = ''
let finish = false

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const action = ['+', '-', 'x', '/']
const out = document.querySelector('.pole p')

document.querySelector('.ac').onclick=clearall

function clearall() {
    // out.textContent = nol
    firstnumber = ''
    secnumber = ''
    sign = ''
    finish = false
    return[out.textContent = '0']
}


document.querySelector('.kalkulator').onclick = (event) => {
    // if(!event.target.classList.contains('btn')) return
    // if(event.target.classList.contains('ac')) return
    out.textContent = ''
    const key = event.target.textContent
    if (numbers.includes(key)) {
        if (secnumber === '' && sign === '') {
                firstnumber+=key
            out.textContent = firstnumber
        }
        else if (firstnumber !== '' && secnumber !== '' && finish===true) {
            secnumber = key 
            finish = false
            out.textContent = secnumber
        } else {
            secnumber += key
            out.textContent = secnumber
        }
        console.log(firstnumber, sign, secnumber)
    }
    if (action.includes(key)) {
        sign = key
        out.textContent = sign
        
    }
    if (key === '=') {
        if (secnumber === '') {
            secnumber = firstnumber
        }
        switch (sign) {
            case '+':
                firstnumber = (+firstnumber) + (+secnumber)
                break
            case '-':
                firstnumber = (+firstnumber) - (+secnumber)
                break
            case 'x':
                firstnumber = (+firstnumber) * (+secnumber)
                break
            case '/':
                if (secnumber === '0') {
                    out.textContent = 'Ошибка!'
                    firstnumber = ''
                    secnumber = ''
                    sign = ''
                    return
                }
                else {
                    firstnumber = (+firstnumber) / (+secnumber)
                    break
                }
            
        }
        finish = true
        out.textContent = firstnumber
        console.log(firstnumber, sign, secnumber)
    }
}




















// let user = ['de3ther', 'SAS28']
// console.log("Ваш логин:", user[0])

// let user = {
//     login: 'de3ther',
//     password: 'qwerty'
// }

// console.log('Ваш логин:', user.login, '/nВаш пароль:', user.password)
// delete(user.password)
// console.log(user)

// while (a<=8) {
//     console.log(a)
//     a+=2
// }
// let am = 4
// switch (am) {
//     case 4:
//         return [1+2]
//     case 3:
//         console.log("Неправильно!!")

// }

// let age = confirm("Вам есть 18 лет?")
// let a = prompt("Какое официальное название JS?")
// if (a == "ECMAScript") {
//     alert("Правильно!")
// } 
// else {
//     alert("Не знаете? - ECMAScript")
// }

// const color = 'red' 
// console.log(color)
// let clr = 'Привет'
// if(age=true){
//     alert("Вам есть 18 лет!")
// }


