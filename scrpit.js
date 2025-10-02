class PontuacaoPersonagem {
    constructor(thomas = 0, newt = 0, minho = 0) {
        this.thomas = thomas;
        this.newt = newt;
        this.minho = minho;
    }

    somar(outraPontuacao) {
        this.thomas += outraPontuacao.thomas;
        this.newt += outraPontuacao.newt;
        this.minho += outraPontuacao.minho;
    }
}

class Opcao {
    constructor(texto, pontos) {
        this.texto = texto;
        this.pontos = pontos; 
    }
}

class Pergunta {
    constructor(id, texto, opcoes) {
        this.id = id;
        this.texto = texto;
        this.opcoes = opcoes; 
    }
}

const PERSONAGENS = {
    THOMAS: {
        nome: "Thomas",
        descricao: "Você é o Thomas, o líder por natureza. Você é movido pela curiosidade, desafia a autoridade e não hesita em correr riscos para descobrir a verdade e proteger seus amigos. Sua pontuação reflete sua coragem e busca por respostas.",
        imagemUrl: "thomas.jpg" 
    },
    NEWT: {
        nome: "Newt",
        descricao: "Você é o Newt, a cola que mantém o grupo unido. Sua lealdade, calma e inteligência tática fazem de você um mediador essencial. Você valoriza a ordem, mas luta com fervor pelos seus companheiros.",
        imagemUrl: "newt.png" 
    },
    MINHO: {
        nome: "Minho",
        descricao: "Você é o Minho, pura ação e coragem. Você é o Corredor mais rápido, um especialista em sobrevivência e extremamente direto. Seu foco está em fazer o trabalho e enfrentar os perigos de frente.",
        imagemUrl: "minho.jpg" 
    },
};

const QUESTIONARIO = [

    new Pergunta(1, 
        "Como você age diante de uma situação totalmente nova e caótica?", [
        new Opcao("Analiso o ambiente e tento encontrar uma estratégia.", new PontuacaoPersonagem(3, 1, 2)), 
        new Opcao("Corro para ajudar e lidero pelo exemplo.", new PontuacaoPersonagem(1, 3, 2)), 
        new Opcao("Tento manter o grupo unido e calmo, mesmo sem ter todas as respostas.", new PontuacaoPersonagem(2, 2, 3)), 
    ]),
    new Pergunta(2, 
        "O que você valoriza mais em um amigo?", [
        new Opcao("A lealdade inabalável e o bom senso.", new PontuacaoPersonagem(2, 3, 1)), 
        new Opcao("A coragem para agir e a franqueza.", new PontuacaoPersonagem(1, 2, 3)), 
        new Opcao("A busca constante por verdades, mesmo que dolorosas.", new PontuacaoPersonagem(3, 1, 2)), 
    ]),
    new Pergunta(3, 
        "Qual papel você assumiria em um labirinto?", [
        new Opcao("Tentaria decifrar os códigos e os padrões das paredes.", new PontuacaoPersonagem(3, 2, 1)), 
        new Opcao("Seria o líder dentro dos muros, garantindo a coesão social.", new PontuacaoPersonagem(1, 3, 2)), 
        new Opcao("Seria o primeiro a sair correndo, mapeando o desconhecido.", new PontuacaoPersonagem(2, 1, 3)), 
    ]),
    new Pergunta(4, 
        "Qual é sua maior fraqueza?", [
        new Opcao("Ser impulsivo e me colocar em perigo frequentemente.", new PontuacaoPersonagem(3, 1, 2)), 
        new Opcao("Ser pragmático demais e ceder ao pessimismo.", new PontuacaoPersonagem(1, 3, 2)), 
        new Opcao("Ser muito impaciente e preferir a ação à deliberação.", new PontuacaoPersonagem(2, 1, 3)), 
    ]),
    new Pergunta(5, 
        "Você está preso(a) em um labirinto. O que faz?", [
        new Opcao("Exploro cada canto sem medo.", new PontuacaoPersonagem(1, 2, 3)), 
        new Opcao("Tento entender como ele funciona para achar uma saída lógica.", new PontuacaoPersonagem(3, 1, 2)), 
        new Opcao("Organizo o grupo e tento manter todos seguros e com esperança.", new PontuacaoPersonagem(2, 3, 1)), 
    ]),
    new Pergunta(6, 
        "Em uma discussão, você tende a ser:", [
        new Opcao("O mediador que tenta encontrar uma solução justa para todos.", new PontuacaoPersonagem(1, 3, 2)), 
        new Opcao("O que impõe a decisão mais rápida para encerrar o conflito.", new PontuacaoPersonagem(2, 1, 3)), 
        new Opcao("O que busca a causa raiz do problema, mesmo que gere mais discussão.", new PontuacaoPersonagem(3, 2, 1)), 
    ]),
    new Pergunta(7, 
        "Se fosse um corredor no labirinto, o que te motivaria?", [
        new Opcao("A adrenalina e a chance de descobrir algo novo.", new PontuacaoPersonagem(3, 2, 1)), 
        new Opcao("A busca por respostas e justiça.", new PontuacaoPersonagem(2, 3, 1)), 
        new Opcao("Proteger quem não pode correr.", new PontuacaoPersonagem(1, 2, 3)), 
    ]),
    new Pergunta(8, 
        "Se você fosse capturado, qual seria sua prioridade?", [
        new Opcao("Escapar imediatamente, confiando em sua velocidade.", new PontuacaoPersonagem(2, 1, 3)), 
        new Opcao("Reunir informações sobre o inimigo antes de agir.", new PontuacaoPersonagem(3, 2, 1)), 
        new Opcao("Garantir que outros prisioneiros permaneçam calmos e coordenados.", new PontuacaoPersonagem(1, 3, 2)), 
    ]),
    new Pergunta(9, 
        "O que é mais assustador?", [
        new Opcao("O desconhecido, o que está lá fora.", new PontuacaoPersonagem(3, 2, 1)), 
        new Opcao("A perda de esperança dentro do grupo.", new PontuacaoPersonagem(1, 3, 2)), 
        new Opcao("A inação, ficar parado e esperar o fim.", new PontuacaoPersonagem(2, 1, 3)), 
    ]),
    new Pergunta(10, 
        "Qual é a sua principal motivação?", [
        new Opcao("A curiosidade sobre a verdade e o desejo de justiça.", new PontuacaoPersonagem(3, 1, 2)), 
        new Opcao("A segurança e o bem-estar dos que dependem de mim.", new PontuacaoPersonagem(1, 3, 2)), 
        new Opcao("A adrenalina da luta e a vontade de sobreviver.", new PontuacaoPersonagem(2, 2, 3)), 
    ]),
];

class QuizController {
    constructor(questionario) {
        this.questionario = questionario;
        this.indicePerguntaAtual = 0;
        this.pontuacaoTotal = new PontuacaoPersonagem();

        this.dom = {
            intro: document.getElementById('tela-introducao'),
            quiz: document.getElementById('tela-questionario'),
            resultado: document.getElementById('tela-resultado'),
            textoPergunta: document.getElementById('texto-pergunta'),
            imagemPergunta: document.getElementById('imagem-pergunta'),
            containerOpcoes: document.getElementById('container-opcoes'),
            botaoProxima: document.getElementById('botao-proxima'),
            botaoJogar: document.getElementById('botao-jogar'),
            botaoRecomecar: document.getElementById('botao-recomecar'),
            nomeResultado: document.getElementById('nome-resultado'),
            descricaoResultado: document.getElementById('descricao-resultado'),
            imagemResultado: document.getElementById('imagem-resultado'),
            pontuacaoResultado: document.getElementById('pontuacao-resultado')
        };
        

        this.adicionarEventos();
    }


    adicionarEventos() {
        this.dom.botaoJogar.addEventListener('click', () => this.iniciarQuiz());
        this.dom.botaoProxima.addEventListener('click', () => this.avancarPergunta());
        this.dom.botaoRecomecar.addEventListener('click', () => this.recomecarQuiz());
        
   
        this.dom.containerOpcoes.addEventListener('change', (e) => this.habilitarProximo(e));
    }


    mudarTela(tela) {
        this.dom.intro.style.display = 'none';
        this.dom.quiz.style.display = 'none';
        this.dom.resultado.style.display = 'none';

        if (tela === 'intro') {
            this.dom.intro.style.display = 'block';
        } else if (tela === 'quiz') {
            this.dom.quiz.style.display = 'block';
        } else if (tela === 'resultado') {
            this.dom.resultado.style.display = 'block';
        }
    }
    
    iniciarQuiz() {
        this.indicePerguntaAtual = 0;
        this.pontuacaoTotal = new PontuacaoPersonagem();
        this.mudarTela('quiz');
        this.carregarPergunta(this.indicePerguntaAtual);
    }
    
    recomecarQuiz() {
        this.mudarTela('intro');
    }


    carregarPergunta(indice) {
        if (indice >= this.questionario.length) {
            this.exibirResultado();
            return;
        }

        const pergunta = this.questionario[indice];
        
    
        this.dom.textoPergunta.textContent = `${indice + 1}/${this.questionario.length}. ${pergunta.texto}`;
        this.dom.botaoProxima.disabled = true;

        let htmlOpcoes = '';
        pergunta.opcoes.forEach((opcao, i) => {
            const radioId = `pergunta${pergunta.id}-opcao${i}`; 
            
 
            htmlOpcoes += `
                <li>
                    <input type="radio" name="resposta" id="${radioId}" value="${i}" data-pontos='${JSON.stringify(opcao.pontos)}'>
                    <label for="${radioId}">${opcao.texto}</label>
                </li>
            `;
        });
        this.dom.containerOpcoes.innerHTML = `<ul class="lista-opcoes">${htmlOpcoes}</ul>`;
    }


    habilitarProximo(evento) {
        if (evento.target.type === 'radio' && evento.target.name === 'resposta') {
            this.dom.botaoProxima.disabled = false;
        }
    }
    

    avancarPergunta() {
        const opcaoSelecionada = this.dom.containerOpcoes.querySelector('input[name="resposta"]:checked');

    
        if (!opcaoSelecionada) {
            alert("Por favor, selecione uma opção antes de prosseguir.");
            return;
        }
        
    
        const dadosPontos = JSON.parse(opcaoSelecionada.dataset.pontos);
        const pontosDaResposta = new PontuacaoPersonagem(dadosPontos.thomas, dadosPontos.newt, dadosPontos.minho);
        this.pontuacaoTotal.somar(pontosDaResposta);
        
    
        this.indicePerguntaAtual++;
        this.carregarPergunta(this.indicePerguntaAtual);
    }
    
   
    exibirResultado() {
        const pontuacoes = this.pontuacaoTotal;
        
        let maxPontos = -1;
        let personagemGanhador = null;

        const resultados = [
            { pontos: pontuacoes.thomas, dados: PERSONAGENS.THOMAS },
            { pontos: pontuacoes.newt, dados: PERSONAGENS.NEWT },
            { pontos: pontuacoes.minho, dados: PERSONAGENS.MINHO }
        ];


        resultados.forEach(resultado => {
            if (resultado.pontos > maxPontos) {
                maxPontos = resultado.pontos;
                personagemGanhador = resultado.dados;
            }
        });
        
    
        this.dom.nomeResultado.textContent = personagemGanhador.nome;
        this.dom.descricaoResultado.textContent = personagemGanhador.descricao;
        this.dom.imagemResultado.src = personagemGanhador.imagemUrl;
        this.dom.imagemResultado.alt = `Imagem de ${personagemGanhador.nome}`;
        this.dom.pontuacaoResultado.textContent = `Pontuação Total: Thomas: ${pontuacoes.thomas}, Newt: ${pontuacoes.newt}, Minho: ${pontuacoes.minho} | Seu resultado: ${personagemGanhador.nome} (${maxPontos} pontos)`;

    
        this.mudarTela('resultado');
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const quiz = new QuizController(QUESTIONARIO);
});
