const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);

    formData = {
      email: parsedData.email || '',
      message: parsedData.message || '',
    };

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

form.addEventListener('input', event => {
  if (event.target.name !== 'email' && event.target.name !== 'message') {
    return;
  }

  formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const submittedData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  if (!submittedData.email || !submittedData.message) {
    return;
  }

  console.log(submittedData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();

  formData = {
    email: '',
    message: '',
  };
});
