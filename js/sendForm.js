const sendForm = () => {
  const form = document.querySelector(".modal");
  const sendButton = document.querySelector("form button.button.modal__button");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // отмена дефолтного действия кнопки

    const text = form.querySelector("input[type=text]");
    const tel = form.querySelector("input[type=tel]");
    const email = form.querySelector("input[type=email]");

    const sendObj = {  // объект со значениями полей формы
      name: text.value,
      phone: tel.value,
      email: email.value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", { // фетч с сайта
      method: "POST",
      body: JSON.stringify(sendObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => {
          if (response.status < 200 && response.status > 210) { // если статус не в диапазоне успешности
              throw new Error('Ошибка!')
          }
          console.log(`Успешно - ${response.status}`);
          return response.json()
      })
      .catch(error => {
          alert('Ошибка! Данные не отправлены.');  //  в случае ошибки алерт пользователю
      })
      .finally(() => { // наконец-то очистка формы
        text.value = "";
        tel.value = "";
        email.value = "";
        sendButton.textContent = "Готово!"; // на кнопке меняется надпись
        setTimeout(() => {
          form.style.display = ""; // задержка 1500 мс и закрылие модального окна
        }, 1500);
      });
  });
};

sendForm();
