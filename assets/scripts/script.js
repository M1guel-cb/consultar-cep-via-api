const estado = document.querySelector("#estado");
const cidade = document.querySelector("#cidade");
const logradouro = document.querySelector("#log");
const complemento = document.querySelector("#compl");
const bairro = document.querySelector("#bairro");

function consultarCEP() {
    let cep = document.querySelector("input#cep").value;

    if (cep.length !== 8) {
        alert("CEP inválido!");
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function (response) {
        response.json().then(function (data) {
            estado.value = data.uf;
            cidade.value = data.localidade;
            bairro.value = data.bairro;
            complemento.value = data.complemento;
            logradouro.value = data.logradouro;
        });
    });
}