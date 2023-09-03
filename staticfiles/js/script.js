document.querySelector('form').addEventListener('submit', function(evento) {
    let cpfInput = document.getElementById('input-cpf');
    console.log(cpfInput)
    let cpfValue = cpfInput.value.replace(/[.-]/g, '');
    console.log(cpfValue)
    cpfInput.value = cpfValue;
});



