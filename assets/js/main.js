//Selecionando o quiz
const quiz = document.querySelector('#quiz-container');
let respostasFeitas = 0;
let respostasRespondidas = 0;
let perguntaAtualIndex = 0;

function principalAtivacao() {

    criandoQuiz();

    function perguntasQuiz() {
        const perguntas = [
            //pergunta 1
            {
                titulo: 'Pergunta 1',
                subtitulo: 'Qual número completa a sequência? 2-4-8-16-[...]',
                opcoes: ['18', '24', '32', '40'],
                resposta: '32'
            },

            //pergunta 2
            {
                titulo: 'Pergunta 2',
                subtitulo: 'João tem o dobro da idade de Pedro. Daqui a 10 anos, a soma das idades deles será 70. Qual a idade atual de João?',
                opcoes: ['20', '30', '40', '50'],
                resposta: '40'
            },

            //pergunta 3
            {
                titulo: 'Pergunta 3',
                subtitulo: 'Qual letra vem a seguir? A – C – E – G – ?',
                opcoes: ['H', 'I', 'J', 'K'],
                resposta: 'I'
            },


            //pergunta 4
            {
                titulo: 'Pergunta 4',
                subtitulo: 'Todos os cães são animais. Alguns animais são gatos. Logo:',
                opcoes: ['Todos os gatos são cães', 'Alguns cães são gatos', 'Nenhum gato é cão', 'Não é possível afirmar que algum gato é cão'],
                resposta: 'Não é possível afirmar que algum gato é cão'
            },


            //pergunta5 
            {
                titulo: 'Pergunta 5',
                subtitulo: 'Se 5 máquinas produzem 5 peças em 5 minutos, em quanto tempo 100 máquinas produzirão 100 peças?',
                opcoes: ['1 minuto', '2 minutos', '5 minutos', '20 minutos', '25 minutos'],
                resposta: '5 minutos'
            }

        ];

        return perguntas;
    }


    function criandoQuiz() {

        const todasAsPerguntas = perguntasQuiz();

        todasAsPerguntas.forEach((umaPergunta, indice) => {

            const quizPerguntas = document.createElement('div');
            quizPerguntas.classList.add('container-de-pergunta');

            if (indice > 0) {
                quizPerguntas.classList.add('pergunta-bloqueada');
            }

            //(armazendo) - entregando as resposta do quiz para um dataset
            quizPerguntas.dataset.resposta = umaPergunta.resposta;

            //criando o titulo o e o subtitulo da pergunta
            quizPerguntas.innerHTML = `
           <h2 class="text-danger"> ${umaPergunta.titulo} </h2>
           <p> ${umaPergunta.subtitulo} </p>
           
        `;

            const divBotao = document.createElement('div');
            divBotao.classList.add('d-grid', 'gap-2');

            //mostrando os valores dos botões na tela
            umaPergunta.opcoes.forEach(textoOpcoes => {
                const botao = document.createElement('button');
                botao.classList.add('btn', 'btn-outline-info');

                botao.textContent = textoOpcoes;

                quizPerguntas.appendChild(divBotao);
                divBotao.appendChild(botao);


            });

            const linha = document.createElement('hr');
            divBotao.appendChild(linha);

            quiz.appendChild(quizPerguntas);

        });

        clicandoBotao();
        botaoFinalizar();

    }

    function clicandoBotao() {
        quiz.addEventListener('click', function (e) {
            const el = e.target;


            if (el.tagName === 'BUTTON') {
                //verificando a pergunta mais próxima para ser avaliada
                const containerDaPergunta = el.closest('.container-de-pergunta');

                // Impede o clique em perguntas bloqueadas
                if (containerDaPergunta.classList.contains('pergunta-bloqueada')) {
                    alert('Por favor, responda as perguntas na ordem correta sendo de: (1 a 5).');
                    return;
                }

                //armazenando a resposta correta
                const respostaCorreta = containerDaPergunta.dataset.resposta;
                //verifica a seleção da resposta do usuario
                const respostaDoUsuario = el.textContent;
                const resultado = document.createElement('div');

                //verifica se a resposta está correta
                if (respostaDoUsuario === respostaCorreta) {
                    resultado.innerHTML = `<p class="alert alert-success mt-3">Correto!</p>`;
                    el.classList.add('bg-success', 'text-white');

                } else {
                    resultado.innerHTML = `<p class="alert alert-danger mt-3">Errado! A resposta era ${respostaCorreta}.</p>`;
                    el.classList.add('bg-danger', 'text-white');
                }

                containerDaPergunta.appendChild(resultado);

                const todosOsBotoesDaPergunta = containerDaPergunta.querySelectorAll('button');
                todosOsBotoesDaPergunta.forEach(botao => {
                    botao.disabled = true;
                });

                perguntaAtualIndex++;
                const listaDePerguntas = document.querySelectorAll('.container-de-pergunta');

                if (perguntaAtualIndex < listaDePerguntas.length) {
                    const proximaPergunta = listaDePerguntas[perguntaAtualIndex];
                    proximaPergunta.classList.remove('pergunta-bloqueada');
                }

                //escolha final para comparação
                const escolha = el.textContent;

                if (escolha === respostaCorreta) {
                    respostasFeitas++;
                }

                respostasRespondidas++;

                const totalPerguntas = perguntasQuiz().length;

                if (respostasRespondidas === totalPerguntas) {

                    const botaoFinalizar = document.querySelector('#btn-finalizar');
                    botaoFinalizar.classList.remove('d-none');

                }

            }
        });
    }

    function botaoFinalizar() {
        const botaoFinalizar = document.querySelector('#btn-finalizar');
        const corpoModal = document.querySelector('#modal-corpo-resultado');
        const totalPerguntas = perguntasQuiz().length;

        botaoFinalizar.addEventListener('click', function () {
            
            corpoModal.innerHTML = `
            <h4>Seu Desempenho:</h4>
            <p>Você acertou: <strong>${respostasFeitas}</strong> de <strong>${totalPerguntas}</strong> perguntas.</p>
            `;
        });
    }


}
principalAtivacao();