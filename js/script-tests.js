function toggleVisibilityTest() {
    var myDiv = document.getElementById("hiddenDivTest");
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
}


function hideDivTest() {
    var myDiv = document.getElementById("hiddenDivTest");
    myDiv.style.display = "none"; 
}


function toggleVisibilityTest1() {
    var myDiv = document.getElementById("hiddenDivTest1");
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
}


function hideDivTest1() {
    var myDiv = document.getElementById("hiddenDivTest1");
    myDiv.style.display = "none"; 
}


function toggleVisibilityTest2() {
    var myDiv = document.getElementById("hiddenDivTest2");
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
}


function hideDivTest2() {
    var myDiv = document.getElementById("hiddenDivTest2");
    myDiv.style.display = "none"; 
}


function toggleVisibilityTest3() {
    var myDiv = document.getElementById("hiddenDivTest3");
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
}


function hideDivTest3() {
    var myDiv = document.getElementById("hiddenDivTest3");
    myDiv.style.display = "none"; 
}


function toggleVisibilityTest4() {
    var myDiv = document.getElementById("hiddenDivTest4");
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
}


function hideDivTest4() {
    var myDiv = document.getElementById("hiddenDivTest4");
    myDiv.style.display = "none"; 
}






function checkAnswers(event) {
    event.preventDefault();

    const correctAnswers = ['a', 'a', 'b', 'a', 'b', 'a', 'a', 'a', 'b', 'a'];
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const answer = document.querySelector(`input[name="question${i}"]:checked`);
        if (answer && answer.value === correctAnswers[i - 1]) {
            score++;
        }
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Вы правильно ответили на ${score} из 10 вопросов.`;
}



function checkAnswers1(event) {
    event.preventDefault();

    const correctAnswers = ['a', 'b', 'a', 'a', 'a', 'b', 'a', 'b', 'b', 'b'];
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const answer = document.querySelector(`input[name="question${i}"]:checked`);
        if (answer && answer.value === correctAnswers[i - 1]) {
            score++;
        }
    }

    const resultElement = document.getElementById('result1');
    resultElement.innerHTML = `Вы правильно ответили на ${score} из 10 вопросов.`;
}


function checkAnswers2(event) {
    event.preventDefault();

    const correctAnswers = ['a', 'a', 'a', 'a', 'b', 'a', 'b', 'a', 'a', 'a'];
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const answer = document.querySelector(`input[name="question${i}"]:checked`);
        if (answer && answer.value === correctAnswers[i - 1]) {
            score++;
        }
    }

    const resultElement = document.getElementById('result2');
    resultElement.innerHTML = `Вы правильно ответили на ${score} из 10 вопросов.`;
}


function checkAnswers3(event) {
    event.preventDefault();

    const correctAnswers = ['a', 'a', 'b', 'd', 'a', 'a', 'a', 'b', 'a', 'a'];
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const answer = document.querySelector(`input[name="question${i}"]:checked`);
        if (answer && answer.value === correctAnswers[i - 1]) {
            score++;
        }
    }

    const resultElement = document.getElementById('result3');
    resultElement.innerHTML = `Вы правильно ответили на ${score} из 10 вопросов.`;
}


function checkAnswers4(event) {
    event.preventDefault();

    const correctAnswers = ['a', 'a', 'd', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const answer = document.querySelector(`input[name="question${i}"]:checked`);
        if (answer && answer.value === correctAnswers[i - 1]) {
            score++;
        }
    }

    const resultElement = document.getElementById('result4');
    resultElement.innerHTML = `Вы правильно ответили на ${score} из 10 вопросов.`;
}
 
 // Функция для отображения модального окна
    const openModal = () => {
        document.getElementById('modal').style.display = 'block';
    };
    
    // Функция для скрытия модального окна
    const closeModal = () => {
        document.getElementById('modal').style.display = 'none';
    };
    
    // Открытие модального окна при клике на кнопку
    document.querySelector('.open-modal-btn').addEventListener('click', openModal);
    
    // Закрытие модального окна при клике на крестик
    document.querySelector('.close-modal-btn').addEventListener('click', closeModal);
    
    // Обработка отправки формы
    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const lastName = document.getElementById('lastName').value;
        const firstName = document.getElementById('firstName').value;
        const group = document.getElementById('group').value;
        const testResult = document.getElementById('testResult').value;
        const email = document.getElementById('email').value;
    
        // Проверяем правильность заполнения полей
        if (!lastName || !firstName || !group || !testResult || !email) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }
    
        // Отправляем данные на сервер через AJAX или другой метод
        // В данном примере мы просто выводим сообщение в консоль
        console.log({
            lastName,
            firstName,
            group,
            testResult,
            email
        });
    
        // Скрываем модальное окно после успешной отправки
        closeModal();
    
        alert("Сообщение успешно отправлено!");
    });


    document.addEventListener('DOMContentLoaded', function() {
        const scrollDown = document.querySelector('.scroll-down');
        
        scrollDown.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    });