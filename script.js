const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Voce descobre a serie 'O Mentalista' e assiste ao primeiro episodio, ficando impressionado com a capacidade de Patrick Jane de ler as pessoas apenas observando detalhes invisiveis para os outros. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso e assustador! Ninguem deveria conseguir ler os outros tao facilmente.",
                afirmacao: "Voce sempre teve um pe atras com pessoas muito observadoras,"
            },
            {
                texto: "Isso e incrivel! Queria ter essa mesma capacidade de observacao.",
                afirmacao: "Voce ficou fascinado pela arte da deducao e da linguagem corporal,"
            }           
        ]
    },
    {
        enunciado: "Na historia, Patrick Jane busca vinganca contra o misterioso serial killer Red John, responsavel por uma grande tragedia em sua vida. Como voce avalia a motivacao do protagonista?",
        alternativas: [
            {
                texto: "Compreensivel, mas a busca por vinganca cega pode destrui-lo antes de alcancar seu objetivo.",
                afirmacao: "acredita que a justica deve prevalecer sobre o desejo de vinganca pessoal"
            },
            {
                texto: "Totalmente justificada, ele tem todo o direito de fazer justica com as proprias maos.",
                afirmacao: "e apoia a determinacao obstinada de Jane em fazer justica a qualquer custo."
            }
        ]
    },
    {
        enunciado: "Durante as investigacoes na CBI, Jane frequentemente ignora os protocolos policiais e usa truques de magica ou manipulacao psicologica para pegar os criminosos. O que voce acha dessa conduta?",
        alternativas: [
            {
                texto: "Incorreta. As leis e regras existem para proteger o processo e evitar abusos.",
                afirmacao: "Voce prefere metodos tradicionais e respeita os limites da lei,"
            },
            {
                texto: "Genial. O importante e resolver o caso e prender o culpado, nao importa o metodo.",
                afirmacao: "Voce valoriza a astucia e a eficiencia acima da burocracia,"
            }
            
        ]
    },
    {
        enunciado: "A agente Teresa Lisbon tenta constantemente manter Patrick Jane sob controle para que a equipe nao perca o emprego. Como voce enxerga a relacao entre os dois?",
        alternativas: [
            {
                texto: "Uma parceria baseada no respeito mutuo, onde um equilibra os excessos do outro.",
                afirmacao: "reconhece o valor do trabalho em equipe e do equilibrio emocional"
            },
            {
                texto: "Uma relacao complicada em que Jane sempre acaba fazendo o que quer no final.",
                afirmacao: "e entende que talentos fora da curva nem sempre se adaptam a chefias."
            }
            
        ]
    },
    {
        enunciado: "Depois de maratonar as temporadas e acompanhar toda a cacada a Red John, voce reflete sobre a principal licao da serie. Qual e a sua conclusao?",
        alternativas: [
            {
                texto: "A verdadeira atencao aos detalhes e a empatia revelam mais sobre as pessoas do que palavras ditas.",
                afirmacao: "Por isso, aprendeu a prestar mais atencao ao seu redor e ao comportamento humano."
            },
            {
                texto: "Enganar as pessoas e facil se voce souber usar a psicologia a seu favor.",
                afirmacao: "Por isso, passou a enxergar as interacoes sociais como um grande jogo de xadrez."
            }
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Seu perfil em O Mentalista...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();