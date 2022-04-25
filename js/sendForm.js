const sendForm = () => {
  const form = document.querySelector(".modal");
  const sendButton = document.querySelector("form button.button.modal__button");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = form.querySelector("input[type=text]");
    const tel = form.querySelector("input[type=tel]");
    const email = form.querySelector("input[type=email]");

    const sendObj = {
      name: text.value,
      phone: tel.value,
      email: email.value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(sendObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => {
          if (response.status < 200 && response.status > 210) {
              throw new Error('Ошибка!')
          }
          console.log(`Успешно - ${response.status}`);
          return response.json()
      })
      .catch(error => {
          alert('Ошибка! Данные не отправлены.');
      })
      .finally(() => {
        text.value = "";
        tel.value = "";
        email.value = "";
        sendButton.textContent = "Готово!";
        setTimeout(() => {
          form.style.display = "";
        }, 1500);
      });
  });
};

sendForm();
