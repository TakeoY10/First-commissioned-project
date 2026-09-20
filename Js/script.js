
const PHONE_NUMBER = '99999999999';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
});

function handleFormSubmit(event) {
  event.preventDefault(); // impede o formulário de recarregar a página

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  let text = `Olá!%0A`;
  text += `Meu nome é: ${nome}%0A`;
  text += `Email: ${email}%0A`;
  text += `Telefone: ${telefone}%0A`;
  text += `Mensagem: ${mensagem}`;

  const link = `https://wa.me/${PHONE_NUMBER}?text=${text}`;

  window.open(link, '_blank'); // abre WHATSAPP
}
