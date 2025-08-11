const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Successfully saved your changes!',
  'Error: Unable to connect to the server.',
  'Profile updated successfully.',
  'Failed to upload file. Please try again.',
  'Password changed successfully.',
  'An unexpected error occurred. Please refresh the page.',
  'Settings have been updated.',
  'Form submitted successfully!',
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type ?? getRandom(types));
  notif.innerText = message ?? getRandom(messages);

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 5000);
}

function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
