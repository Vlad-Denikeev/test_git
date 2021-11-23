var obj = document.getElementById('timer_button');
var timerFIG = 10; // Время в секундах, через которое появляется кнопка
var timer = setInterval("startTimer()",1000);


function startTimer() {
    if(timerFIG !== 1) {
        timerFIG--;
    } else {
        clearInterval(timer);
        obj.innerHTML = '<button class="box_payment_btn" type="submit">Подробнее про курс</button>'; // кнопка
}}
