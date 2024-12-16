var setaEsquerda = window.document.getElementById('seta-esquerda');
var Bruna = window.document.getElementById('bruna');
var Leonardo = window.document.getElementById('leonardo');
var Samantha = window.document.getElementById('samantha');
var setaDireita = window.document.getElementById('seta-direita');

function RolarParaDireita() {
    Bruna.style = 'display:none';
    Samantha.style = 'display:flex';
    setaDireita.style = 'display:none';
    setaEsquerda.style = 'display:flex';
}

function RolarParaEsquerda() {
    Samantha.style = 'display:none';
    Bruna.style = 'display:flex';
    setaDireita.style = 'display:flex';
    setaEsquerda.style = 'display:none';
}