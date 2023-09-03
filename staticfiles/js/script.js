document.querySelector('form').addEventListener('submit', function(evento) {
    let cpfInput = document.getElementById('input-cpf');
    let cpfValue = cpfInput.value.replace(/[.-]/g, '');
    cpfInput.value = cpfValue;
});

console.log('oi!')