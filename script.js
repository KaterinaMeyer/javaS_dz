function hello(){
    document.getElementById("demo").innerHTML = 'Привет, мир!';
}


function task_1(){
    alert("Привет, мир!");
}


function task_2(){
    // let var const
    let num1 = parseInt(prompt("Введите 1-ое число: "));
    let num2 = parseInt(prompt("Введите 2-ое число: "));
    alert(`${num1} + ${num2} = ${num1 + num2}`);
}


function task_3_5(){
    let name = prompt("Введите имя: ", "Имя");
    alert(`Привет, ${name}!`);
}


function task_6(){
    // if (confirm("Вы уверены?"))
    //     alert("Мы рады, что Вы уверены!")
    // else
    //     alert("Жаль, что Вы не уверены :(");
    let ans = confirm("Вы уверены?") ? alert("Мы рады, что Вы уверены!") :
                alert("Жаль, что Вы не уверены :(");
}


function task_7(){
    let age = parseInt(prompt("Введите свой возраст: "));
    switch(age){
        case 10:
            alert("Идите учить уроки!");
            break;
        case 18:
            alert("Вы совершеннолетний, Вам все можно!");
            break;
        case 30:
            alert("Идите спать, завтра на работу :)");
            break;
        default:
            alert("Мы не знаем, что Вам делать :(");
            break;
    }
}

function task_8(){
let num1 = parseInt(prompt("Поиграем в калькулятор. Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));
let action = prompt("Введите действие (+, -, *, /):", "одно из: +, -, *, /");

switch(action) {
    case '+':
        alert(`Результат:" ${num1 + num2}`);
        break;
    case '-':
        alert(`Результат: ${num1 - num2}`);
        break;
    case '*':
        alert(`Результат: ${num1 * num2}`);
        break;
    case '/':
        if(num2 != 0) {
            alert(`Результат: ${num1 / num2}`);
        } else {
            alert("На ноль делить нельзя!");
        }
        break;
    default:
        alert("Введено некорректное действие!");
}
}
