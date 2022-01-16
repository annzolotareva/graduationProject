import validationForm from "./validationForm.js";

const sendForm = () => {
    const form = document.querySelector('[name="form-callback"]');
    const statusBlock = document.createElement("div");
    const loadText = "Идёт отправка...";
    const successText = "Отправлено!";
    const errorText = "Ошибка";
    const formElements = form.querySelectorAll("input");
   
    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json);
    };

    const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((value, key) => {
      formBody[key] = value;
      if (value == "") {
        delete formBody.fio;
      }
    });



    if (validationForm()) {
      sendData(formBody)
        .then(() => {
          statusBlock.textContent = successText;
            setTimeout(() => {
              statusBlock.textContent = "";
            }, 5000);
          
          formElements.forEach((input) => {
            if (input.name == "tel" || input.name == "fio"){
                input.value = "";
            }        
          });
        })
        .catch(() => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Данные не валидны!");
      statusBlock.textContent = "";
    }
  };

  const requiredPhone = () => {
  formElements.forEach((input) => {
      if (input.name == "tel") {
        input.setAttribute("required",true);
      } 
      });
};

  try {
    if (!form) {
      throw new Error("Верните форму на место!");
    }
    requiredPhone();
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default sendForm;