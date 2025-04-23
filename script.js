emailjs.init("MtSS4J6IQlpkTFznj");

document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();

 
  const formData = {
    name: document.getElementById('name').value,
    surname: document.getElementById('surname').value,
    contact: document.getElementById('contact').value,
    size: document.getElementById('size').value,
    boxType: document.getElementById('boxType').value,
    finishType: document.getElementById('finishType').value
  };

 
  emailjs.send('service_1jga7fr', 'template_td7laml', formData)
    .then(function(response) {
      console.log('Success!', response);
      document.getElementById('statusMsg').textContent = 'Order sent successfully!';
      document.getElementById('orderForm').reset();
    }, function(error) {
      console.log('Failed...', error);
      document.getElementById('statusMsg').textContent = 'Failed to send order!';
    });
});
