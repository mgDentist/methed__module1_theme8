const numberBotGame = () => {
    const botNumber = Math.floor((Math.random()) * 100) + 1;
    let userAnswer;

    while (true) {
        userAnswer = prompt('Какое число от 1 до 100 я загадал?');

        if (userAnswer === null) {
            alert('Игра закончена');
            break;
        }

        userAnswer = Number(userAnswer);

        if (isNaN(userAnswer)) {
            alert('Введи число!');
            continue;
        }

        if (botNumber === userAnswer) {
            alert('Правильно');
            break;
        } else if (userAnswer < botNumber) {
            alert('Больше');
        } else if (userAnswer > botNumber) {
            alert('Меньше');
        }
    }
};

numberBotGame();