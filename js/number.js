const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function(e) {
  let phoneNumber = e.target.value.replace(/[^\d]/g, ''); // Удаление всех символов, кроме цифр
  let formattedPhoneNumber = formatPhoneNumber(phoneNumber); // Форматирование номера телефона
  
  e.target.value = formattedPhoneNumber;
});

function formatPhoneNumber(phoneNumber) {
  let formattedPhoneNumber = "+7 ";
  
  if (phoneNumber.length > 1) {
    formattedPhoneNumber += phoneNumber.substring(1, 4) + " ";
  }
  if (phoneNumber.length > 4) {
    formattedPhoneNumber += phoneNumber.substring(4, 7) + "-";
  }
  if (phoneNumber.length > 7) {
    formattedPhoneNumber += phoneNumber.substring(7, 9) + "-";
  }
  if (phoneNumber.length > 9) {
    formattedPhoneNumber += phoneNumber.substring(9, 11);
  }
  
  return formattedPhoneNumber;
}
