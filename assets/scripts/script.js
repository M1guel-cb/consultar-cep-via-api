const estado = document.querySelector("#estado");
const cidade = document.querySelector("#cidade");
const logradouro = document.querySelector("#log");
const complemento = document.querySelector("#compl");
const bairro = document.querySelector("#bairro");
const botao = document.querySelector("#botao");
var cep = 0;
var text

function consultarCEP() {
    cep = document.querySelector("input#cep").value;

    if (cep.length !== 8) {
        alert("CEP inválido!");
        return;
    }

    var url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            if (data.uf == undefined) {
                estado.value = 'Não encontrei nada'
            }
            else {
                estado.value = data.uf;
            }

            if (data.localidade == undefined) {
                cidade.value = 'Não encontrei nada'
            }else {
                cidade.value = data.localidade;
            }

            if (data.bairro == undefined) {
                bairro.value = 'Não encontrei nada'
            }
            else {
                bairro.value = data.bairro;
            }

            if (data.complemento == '') {
                complemento.value = 'Não possui'
            }
            else if (data.complemento == undefined) {
                complemento.value = "Não encontrei nada";
            } else {
                complemento.value = data.complemento;
            }
            if (data.logradouro == undefined) {
                logradouro.value = "Não encontrei nada";
            }
            else {
                logradouro.value = data.logradouro;
            }
            if (logradouro.value == 'Não encontrei nada' && complemento.value == 'Não encontrei nada' && bairro.value == 'Não encontrei nada') {
                text = `CEP inválido!`
            } else {
            text = `CEP: ${cep}
Logradouro: ${logradouro.value}
Bairro: ${bairro.value}
Complemento: ${complemento.value}
Cidade: ${cidade.value}
Estado: ${estado.value}`
            }
        });
    });
}

function copy() {
    navigator.clipboard.writeText(text);
}