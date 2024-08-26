const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Que medidas podem ser adotadas para combater o desmatamento na floresta tropical?",
        alternativas: [
            {
                texto: "Implementar leis mais rigorosas e aumentar a fiscalização.",
                afirmacao: "Medidas rigorosas. "
            },
            {
                texto: "Promover o desenvolvimento sustentável e incentivar o uso de tecnologias de monitoramento.",
                afirmacao: "Medidas sustentáveis."
            }
        ]
    },
    {
        enunciado: "Como podemos proteger a biodiversidade das florestas tropicais?",
        alternativas: [
            {
                texto: "Estabelecer mais áreas protegidas e reservas naturais.",
                afirmacao: "Medida sustentavél."
            },
            {
                texto: "Investir em programas de educação ambiental e sensibilização da comunidade local.",
                afirmacao: "Medida educacional."
            }
        ]
    },
    {
        enunciado: "Quais ações são essenciais para combater as mudanças climáticas nas florestas tropicais?",
        alternativas: [
            {
                texto: "Reduzir as emissões de gases de efeito estufa e promover a reflorestação.",
                afirmacao: "Medida sustentável."
            },
            {
                texto: "Criar estratégias de adaptação às mudanças climáticas e fortalecer a cooperação.",
                afirmacao: "Medida educacional."
            }
        ]
    },
    {
        enunciado:"Proteger as florestas tropicais é crucial para garantir a sobrevivência de inúmeras espécies de plantas e animais, manter o equilíbrio climático global e preservar o patrimônio natural e cultural da humanidade.",
        alternativas:    [

        ],
    }
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

mostraPergunta();
