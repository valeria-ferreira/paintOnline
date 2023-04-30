var paleta = document.getElementById('cor');
var background = document.getElementById('corFundo');
background.value = "#FFFFFF";

var salvarBotao = document.getElementById('btn');
salvarBotao.textContent = 'Salvar';
document.body.appendChild(salvarBotao);

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');


function atualizaFundo() {
    pincel.fillStyle = background.value;
    pincel.fillRect(0, 0, 600, 400);
}

// Adiciona um listener( "ouvinte") de evento para quando houver mudança no input da cor de fundo
background.addEventListener('input', function() {
    atualizaFundo();
});

atualizaFundo();

var desenha = false;

function desenhaCirculo(evento) {
    if (desenha) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        
        pincel.fillStyle = paleta.value;
        pincel.beginPath();
        pincel.arc(x, y, 10, 0, 2 * 3.14);
        pincel.fill();
    }
    console.log(x + ',' + y);
}
tela.onmousemove = desenhaCirculo;

function habilitaDesenhar() {
    desenha = true;
}

function desabilitaDesenhar() {
    desenha = false;
}

tela.onmousedown = habilitaDesenhar;
tela.onmouseup = desabilitaDesenhar;

//Salvando desenho
salvarBotao.addEventListener('click', function() {
    var link = document.createElement('a');
    link.download = 'meu-desenho.png';
    link.href = tela.toDataURL('image/png').replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    link.click();
});

//alerta sobre borracha
alert('Ainda não disponibilizamos a ferramenta de borracha em nosso Paint Online, mas estamos trabalhando para implementá-la em breve. Pedimos desculpas por qualquer inconveniente que isso possa causar, mas esperamos que você ainda possa se divertir criando suas obras de arte com as ferramentas disponíveis. Agradecemos sua compreensão!');