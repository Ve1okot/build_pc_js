const timer = () => { // цап-царап - произошла инкапсуляция кода
  const daysBlock = document.querySelector(".timer__days");
  const hoursBlock = document.querySelector(".timer__hours");
  const minutesBlock = document.querySelector(".timer__minutes");
  const secondsBlock = document.querySelector(".timer__seconds");
  const timerCount = document.querySelectorAll(".timer__count");

  let interval; // переменная для интервала, чтобы потом можно было сбросить его

  const numWord = (value, words) => {    // склоняет слова в зависимости от числа
    value = Math.abs(value) % 100; // модуль + последние два знака числа

    const lastNum = value % 10; // последний знак числа

    if ((value > 10) & (value < 20)) return words[2];
    if (lastNum > 1 && lastNum < 5) return words[1];
    if (lastNum === 1) return words[0];
    return words[2];
  };

  const updateTimer = () => {
    const date = new Date(); // создаём новый объект с текущей датой
    const dateDeadLine = new Date("1 may 2022").getTime(); // заданная дата дедлайна
    const timeRemaining = (dateDeadLine - date) / 1000; // дедлайн минус текущая дата = секунды с 01.01.1970 / 1000 = секунд до дедлайна

    const days = Math.floor(timeRemaining / 60 / 60 / 24); // секунды из даты, округлённые до целого числа, делённые на 60, ещё на 60 и ещё на 24 => дни
    const hours = Math.floor((timeRemaining / 60 / 60) % 24); // секунды из даты, округлённые до целого числа, делённые на 60, ещё на 60, остаток от деления на 24 => часы 0-24
    const minutes = Math.floor((timeRemaining / 60) % 60); // секунды из даты, округлённые до целого числа, делённые на 60 => остаток деления на 60 => минуты
    const seconds = Math.floor(timeRemaining % 60); // секунды из даты, округлённые до целого числа => остаток от деления на 60

    const fDays = days < 10 ? "0" + days : days;
    const fHours = hours < 10 ? "0" + hours : hours; // если число меньше 10, добавить 0, чтобы всегда было 2 знака
    const fminutes = minutes < 10 ? "0" + minutes : minutes;
    const fseconds = seconds < 10 ? "0" + seconds : seconds;

    daysBlock.textContent = fDays;
    hoursBlock.textContent = fHours;
    minutesBlock.textContent = fminutes; // вставка времени в блоки на странице
    secondsBlock.textContent = fseconds;

    daysBlock.nextElementSibling.textContent = numWord(fDays, [
      "День",
      "Дня",
      "Дней",
    ]);
    hoursBlock.nextElementSibling.textContent = numWord(fHours, [
      "Час",
      "Часа",
      "Часов",
    ]);
    minutesBlock.nextElementSibling.textContent = numWord(fminutes, [
      "Минута",
      "Минуты",
      "Минут",
    ]);
    secondsBlock.nextElementSibling.textContent = numWord(fseconds, [  // следующий блок после secondsBlock
      "Секунда",
      "Секунды",
      "Секунд",
    ]);

    if (timeRemaining <= 0) {
      clearInterval(interval); // сброс автообновления таймера, если он кончился
      daysBlock.textContent = "00";
      hoursBlock.textContent = "00";
      minutesBlock.textContent = "00"; // вставка 0 в блоки на странице, если таймер подошёл к дедлайну
      secondsBlock.textContent = "00";
      timerCount.forEach((elem) => {
        elem.style.color = "#ff3030"; // красные цифры, если дедлайн наустпил
      });
    }
  };

  updateTimer(); // обновление таймера при загрузке страницы
  interval = setInterval(updateTimer, 500); // автообновление таймеры (автозапуск функции) каждые 500 мс
};

timer();
