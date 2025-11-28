class FeedbackMessage {
    constructor(username, messageType, message, isAnonymous = false) {
        this.username = isAnonymous ? 'Анонимный пользователь' : username;
        this.messageType = this.getMessageTypeText(messageType);
        this.message = message;
        this.isAnonymous = isAnonymous;
    }

    // Метод для преобразования значения типа сообщения в текст
    getMessageTypeText(type) {
        const typeMap = {
            'advice': 'совет',
            'sympathy': 'сочувствие',
            'motivation': 'мотивационную речь',
            'story': 'историю из жизни',
            'joke': 'шутку',
            'other': 'сообщение'
        };
        return typeMap[type] || 'сообщение';
    }

    // Метод для форматированного вывода в консоль
    formatToConsole() {
        const formattedMessage = (this.isAnonymous ? 'Анонимный пользователь' : `Пользователь ${this.username}`) + ` отправил ${this.messageType}: "${this.message}"`;console.log(formattedMessage);
        return formattedMessage;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const anonymousCheckbox = document.getElementById('anonymous');
    const usernameInput = document.getElementById('username');
    const successMessage = document.getElementById('successMessage');

    // Обработка изменения состояния чекбокса "Анонимно"
    anonymousCheckbox.addEventListener('change', function() {
        if (this.checked) {
            usernameInput.disabled = true;
            usernameInput.style.opacity = '0.5';
            usernameInput.style.backgroundColor = '#f0f0f0';
            usernameInput.placeholder = 'Анонимная отправка';
        } else {
            usernameInput.disabled = false;
            usernameInput.style.opacity = '1';
            usernameInput.style.backgroundColor = '';
            usernameInput.placeholder = 'Как к вам обращаться?';
        }
    });

    // Обработка отправки формы
    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Получаем данные из формы
        const username = document.getElementById('username').value || 'Не указано';
        const isAnonymous = document.getElementById('anonymous').checked;
        const messageType = document.getElementById('messageType').value;
        const message = document.getElementById('message').value;
        
        // Создаем объект FeedbackMessage
        const feedback = new FeedbackMessage(username, messageType, message, isAnonymous);
        
        // Выводим форматированное сообщение в консоль
        feedback.formatToConsole();
        
        // Показываем сообщение об успехе
        successMessage.style.display = 'flex';
        
        // Очищаем форму
        feedbackForm.reset();
        usernameInput.disabled = false;
        usernameInput.style.opacity = '1';
        usernameInput.style.backgroundColor = '';
        usernameInput.placeholder = 'Как к вам обращаться?';
    });
});