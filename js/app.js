
    function sendEmail() {
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const group = document.getElementById('group').value;

        const emailData = {
            name: name,
            surname: surname,
            group: group
        };

        // Отправка данных на сервер с использованием Fetch API
        fetch('sendEmail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
        })
        .then(response => response.json())
        .then(data => {
            alert('Сообщение отправлено!');
        })
        .catch(error => {
            alert('Ошибка при отправке сообщения!');
            console.error(error);
        });
    }


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