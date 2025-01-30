let user = localStorage.getItem('user') || '';
let scores = JSON.parse(localStorage.getItem('scores')) || {};

document.getElementById('run').addEventListener('click', () => {
    const code = document.getElementById('code').value;
    const type = document.getElementById('code-type').value;
    if (type === 'js') {
        try {
            const result = eval(code);
            document.getElementById('output').innerText = result !== undefined ? result : 'Código executado sem erros';
        } catch (error) {
            document.getElementById('output').innerText = 'Erro: ' + error.message;
        }
    } else if (type === 'html') {
        document.getElementById('html-output').contentDocument.body.innerHTML = code;
    } else if (type === 'css') {
        document.getElementById('html-output').contentDocument.head.innerHTML = `<style>${code}</style>`;
    }
});

document.querySelectorAll('#challenges li').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('code').value = item.getAttribute('data-code');
        document.getElementById('code-type').value = item.getAttribute('data-type');
    });
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('login-toggle').addEventListener('click', () => {
    document.getElementById('login').classList.toggle('hidden');
});

document.getElementById('login-btn').addEventListener('click', () => {
    user = document.getElementById('username').value.trim();
    if (user) {
        localStorage.setItem('user', user);
        alert(`Bem-vindo, ${user}!`);
        document.getElementById('login').classList.add('hidden');
        document.getElementById('login-toggle').innerText = user;
        updateRanking();
    }
});

function updateRanking() {
    const rankingList = document.getElementById('ranking-list');
    rankingList.innerHTML = '';
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    sortedScores.forEach(([name, score]) => {
        const li = document.createElement('li');
        li.textContent = `${name} - ${score} pts`;
        rankingList.appendChild(li);
    });
}

window.onload = () => {
    if (user) {
        document.getElementById('login').classList.add('hidden');
        document.getElementById('login-toggle').innerText = user;
    }
    updateRanking();
};