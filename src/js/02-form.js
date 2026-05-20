const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  try {
    formData = JSON.parse(savedData);

    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name !== 'email' && name !== 'message') {
    return;
  }

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    return;
  }

  const submittedData = {
    email,
    message,
  };

  console.log(submittedData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);

  formData = {
    email: '',
    message: '',
  };
});
