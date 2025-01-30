Code-Visionary - Plataforma de Aprendizado
Descrição do Projeto
O DevQuest é uma plataforma de aprendizado interativa e gamificada que permite aos usuários praticar programação em HTML, CSS e JavaScript. O aplicativo fornece um ambiente de edição de código onde os usuários podem escrever e executar seu código diretamente no navegador. Além disso, ele oferece desafios de programação, um editor de código com suporte para diferentes tipos de linguagem, e um ranking de pontuação para incentivar a competição saudável entre os participantes.

Este repositório contém o código-fonte de toda a plataforma, incluindo o HTML, CSS, e JavaScript necessários para sua execução. O objetivo é proporcionar uma experiência de aprendizado divertida e eficaz para iniciantes e desenvolvedores intermediários.

Funcionalidades
Editor de Código:

Os usuários podem escrever e testar código em JavaScript, HTML, e CSS.
O código pode ser executado diretamente na plataforma e o resultado é exibido em tempo real.
Desafios de Programação:

O aplicativo oferece desafios prontos para os usuários, com tarefas em HTML, CSS e JavaScript.
Os desafios estão organizados por tipo de linguagem, e ao clicar em um desafio, o código correspondente é carregado automaticamente no editor.
Modo Escuro:

O aplicativo permite alternar entre o modo claro e escuro para melhorar a experiência do usuário.
Sistema de Login:

Os usuários podem se registrar utilizando um nome de usuário.
Uma vez logado, o nome do usuário é exibido no botão de login e a pontuação do usuário é salva localmente.
Ranking:

A pontuação dos usuários é salva no armazenamento local e exibida em uma lista de classificação.
A classificação é baseada nas pontuações acumuladas dos usuários.

Estrutura de Arquivos

.
├── index.html         # Arquivo principal HTML da plataforma
├── styles.css         # Arquivo CSS para o estilo da plataforma
└── script.js          # Arquivo JavaScript que contém a lógica de execução


Como Rodar o Projeto

Pré-requisitos
Um navegador moderno (Chrome, Firefox, Edge, etc.)
Nenhum servidor ou ambiente de backend é necessário, já que o projeto é estático.
Passos para execução


Clone este repositório:

git clone https://github.com/walterdyna/CodeVisionary


Abra o arquivo index.html no seu navegador:

Navegue até o diretório onde o projeto foi clonado.
Dê um duplo clique no arquivo index.html para abrir o projeto no seu navegador.
Use a plataforma:

Você pode escrever código em JavaScript, HTML e CSS nos campos fornecidos.
Clique nos desafios disponíveis para obter exemplos de código e tentar resolver as tarefas.
Se desejar, altere o tema clicando no ícone de lua no canto superior direito.
Testar o Código
Escreva seu código no campo de texto.
Selecione o tipo de código desejado (JavaScript, HTML ou CSS) no seletor.
Clique no botão Executar para ver o resultado:
Para JavaScript, o resultado será exibido no console abaixo.
Para HTML, o código será renderizado em um iframe.
Para CSS, as mudanças de estilo serão aplicadas no iframe.
Funcionalidades Futuras
Persistência de Pontuação no Servidor: Atualmente, a pontuação é armazenada localmente no navegador. Uma próxima etapa seria armazenar as pontuações em um banco de dados remoto para permitir que os usuários acessem seu progresso de diferentes dispositivos.

Interface de Usuário Aprimorada: Melhorias visuais, como animações e mais interatividade, podem ser adicionadas para tornar a plataforma mais atraente.

Desafios de Programação Personalizados: Implementar uma funcionalidade onde os usuários possam criar e compartilhar seus próprios desafios de programação.

Leaderboard Global: Expandir a funcionalidade de ranking para incluir usuários globais e mostrar os melhores desempenhos de todos os tempos.


Descrição das Funcionalidades Implementadas


1. Editor de Código
O editor de código permite que os usuários escrevam código nas linguagens HTML, CSS e JavaScript. O código é executado ao clicar no botão Executar, e a plataforma apresenta o resultado dentro de um iframe para HTML e CSS, ou exibe a saída no painel de resultados para o código


 JavaScript.

<textarea id="code" placeholder="Escreva seu código aqui..."></textarea>
<button id="run">Executar</button>


2. Desafios
Os desafios são apresentados em uma lista de itens interativos. Cada item contém um trecho de código em HTML, CSS ou JavaScript que o usuário deve replicar ou modificar. Quando o usuário clica em um desafio, o código correspondente é carregado automaticamente no editor.

<ul>
    <li data-type="html" data-code="<h1>Olá, Mundo!</h1>">Criar um título H1</li>
    <li data-type="css" data-code="h1 { color: blue; }">Mudar cor do título</li>
    <li data-type="js" data-code="console.log('Olá, mundo!');">Imprimir "Olá, mundo!"</li>
</ul>

3. Login e Ranking
Os usuários podem se logar e visualizar sua posição no ranking. O nome do usuário é armazenado localmente, e as pontuações são armazenadas em um objeto no localStorage.

let user = localStorage.getItem('user') || '';
let scores = JSON.parse(localStorage.getItem('scores')) || {};

4. Modo Escuro
A alternância entre os modos claro e escuro é feita por meio de um botão que adiciona ou remove uma classe CSS chamada dark-mode.

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


Tecnologias Usadas
HTML5: Estrutura e marcação do conteúdo.
CSS3: Estilo visual da plataforma, incluindo o design responsivo e a implementação do modo escuro.
JavaScript: Lógica para execução de código, gerenciamento de desafios, login de usuários e pontuação.
Contribuindo
Faça um fork do repositório.
Crie uma nova branch (git checkout -b feature-nome-da-feature).
Faça as alterações necessárias.
Envie um pull request.
Licença
Este projeto é licenciado sob a MIT License - consulte o arquivo LICENSE para mais detalhes.