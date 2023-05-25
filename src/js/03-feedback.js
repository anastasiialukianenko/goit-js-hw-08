import throttle from 'lodash.throttle';
// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".

const formEl = document.querySelector(".feedback-form");
const emailInputEl = formEl.querySelector('input[name="email"]');
const messageInputEl = formEl.querySelector('textarea[name="message"]');
const submitButton = formEl.querySelector('button[type="submit"]');



const onInput = throttle(function(event) {
   const formData = {
        email: emailInputEl.value,
        message:messageInputEl.value,
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}, 500); 

formEl.addEventListener('input', onInput);



// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.

function updateFormFieldsFromStorage() {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const formData = JSON.parse(storedData);
    emailInputEl.value = formData.email;
    messageInputEl.value = formData.message;
  }
}

window.addEventListener('DOMContentLoaded', updateFormFieldsFromStorage);


// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

formEl.addEventListener('submit', function(event) {
  event.preventDefault();


  localStorage.removeItem('feedback-form-state');
  emailInputEl.value = '';
  messageInputEl.value = '';

 
  const formData = {
    email: emailInputEl.value,
    message: messageInputEl.value
  };
  console.log(formData);
});












