# 🧠🤔 Quiz de Raciocínio Lógico  

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)  
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)  

Um quiz interativo e dinâmico construído com **JavaScript puro**, **HTML5** e **CSS3**, com o objetivo de testar as habilidades de raciocínio lógico do usuário e praticar conceitos fundamentais de desenvolvimento web front-end.  

---

## 🚀 Sobre o Projeto  
Este projeto foi desenvolvido como uma forma prática de aprofundar os conhecimentos em manipulação do **DOM** e **lógica de programação com JavaScript**.  

O quiz apresenta uma série de perguntas que devem ser respondidas em sequência, fornecendo feedback imediato ao usuário e calculando a pontuação final.  

---

## ✨ Funcionalidades  

- **Carregamento Dinâmico:** Perguntas carregadas a partir de um array de objetos em JavaScript, facilitando a manutenção do quiz.  
- **Validação Sequencial:** O usuário deve responder na ordem correta; perguntas futuras ficam bloqueadas até a resposta da atual.  
- **Feedback Imediato:** Após cada resposta, o usuário recebe aviso de acerto ou erro.  
- **Alerta de Interação:** Se o usuário tentar responder fora de ordem, recebe uma mensagem de orientação.  
- **Placar Final:** Um modal (Bootstrap) mostra a pontuação final.  
- **Opção de Reiniciar:** É possível recomeçar o quiz ou voltar para a tela inicial.  

---

## 🛠️ Tecnologias Utilizadas  

- **HTML5:** Estrutura semântica.  
- **CSS3:** Estilizações personalizadas e controle visual do estado das perguntas.  
- **JavaScript (ES6+):** Lógica, DOM, eventos e controle de estado.  
- **Bootstrap 5:** Layout responsivo, botões estilizados e modal de resultados.  

---

## 📖 Principais Aprendizados  

- **Manipulação Avançada do DOM**: `createElement`, `innerHTML`, `textContent`, `appendChild`.  
- **Event Delegation**: Um único `addEventListener` para gerenciar todos os cliques nos botões de resposta.  
- **Controle de Estado**: Variáveis globais (`perguntaAtualIndex`, `respostasFeitas`) para armazenar progresso.  
- **Trabalho com Arrays e Objetos**: Uso de `.forEach()` para iterar sobre perguntas e gerar interface dinâmica.  
- **Atributos data-\***: Armazenamento de informações diretamente no HTML para fácil recuperação.  
- **Manipulação de Classes CSS**: Alteração dinâmica da aparência (ex: bloquear/desbloquear perguntas, colorir botões).  

---

## ⚙️ Como Executar o Projeto  

Este é um projeto **front-end puro**, sem necessidade de dependências externas.  

1. Clone este repositório:  
   ```bash
   git clone https://github.com/seu-usuario/nome-do-seu-repo.git
