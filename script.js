window.onload = function() {
    const chatBox = document.getElementById('chat-box');

    // Limpar chat-box e adicionar as instruções fixas
    chatBox.innerHTML = ""; // Limpa qualquer conteúdo anterior

    const instructions = document.createElement('div');
    instructions.classList.add('instructions');
    instructions.innerHTML = 
        "<span>🎯</span> Olá! Bem-vindo ao Chat FURIA!<br>" +
        "<span>1️⃣</span> Digite 1 - Para saber nossas classificações.<br>" +
        "<span>2️⃣</span> Digite 2 - Para conhecer nossa equipe.<br>" +
        "<span>3️⃣</span> Digite 3 - Para informações sobre os próximos jogos.<br>" +
        "<span>4️⃣</span> Digite 4 - Para ver curiosidades sobre a FURIA.";
    instructions.style.color = "#1E90FF"; // Cor azul para destaque
    instructions.style.fontWeight = "bold"; // Negrito
    instructions.style.marginBottom = "20px";
    chatBox.appendChild(instructions);
};

// Manter as instruções enquanto exibe apenas as mensagens relacionadas à opção escolhida
document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.trim();
    const chatBox = document.getElementById('chat-box');
    
    if (userInput) {
        // Limpar apenas as respostas anteriores, mantendo as instruções fixas
        const allMessages = Array.from(chatBox.children);
        allMessages.forEach((msg, index) => {
            // Remove mensagens, mas deixa o bloco de instruções (primeiro elemento)
            if (index > 0) msg.remove();
        });

        // Mostrar mensagem do usuário
        const userMessage = document.createElement('div');
        userMessage.textContent = `Você: ${userInput}`;
        userMessage.style.marginBottom = "10px";
        userMessage.style.animation = "fadeIn 0.5s";
        chatBox.appendChild(userMessage);

        // Responder com base no número digitado
        const responseMessage = document.createElement('div');
        if (userInput === "1") {
            responseMessage.textContent = 
                "FURIA: Nossa equipe está entre as melhores na classificação mundial!\n" +
                "- Kings League Brasil 2025: 1º lugar com 15 pontos após 5 rodadas.\n" +
                "- IEM Katowice 2025: Classificados para a fase de grupos, enfrentando NAVI na próxima rodada.\n" +
                "- Mundial de Clubes 2025: Garantimos vaga nas semifinais com desempenho excepcional!";
            responseMessage.style.whiteSpace = "pre-line"; // Respeita as quebras de linha
        }
        
         else if (userInput === "2") {
            responseMessage.textContent = 
                "FURIA: Conheça nossa equipe de 2025!\n" +
                "- **CS2 (Counter-Strike 2):**\n" +
                "  - Gabriel 'FalleN' Toledo: Líder estratégico e ícone do cenário brasileiro.\n" +
                "  - Yuri 'yuurih' Boian: Consistência e habilidade desde 2017.\n" +
                "  - Kaike 'KSCERATO' Cerato: Um dos melhores riflers do mundo.\n" +
                "  - Danil 'molodoy' Golubenko: Reforço internacional do Cazaquistão.\n" +
                "  - Mareks 'YEKINDAR' Gaļinskis: Stand-in experiente, conhecido por sua agressividade.\n\n" +
                "- **League of Legends:**\n" +
                "  - Guigo (Top): Experiência e liderança no topo.\n" +
                "  - Tatu (Jungler): Dinâmico e estratégico na selva.\n" +
                "  - Tutsz (Mid): Mestre em controle de rota.\n" +
                "  - Ayu (ADC): Precisão e impacto nas teamfights.\n" +
                "  - JoJo (Support): Suporte confiável e peça-chave para o time.\n\n" +
                "- **PUBG:**\n" +
                "  - Rds149: Campeão das Américas e destaque no cenário global.\n" +
                "  - guizeraa: Representando o Brasil com habilidade e dedicação.\n" +
                "  - Luna Galaxy: Core que alcançou a maior colocação brasileira no mundial de 2024.\n\n" +
                "FURIA: Uma equipe formada por talentos extraordinários que representam o Brasil com orgulho!";
            responseMessage.style.whiteSpace = "pre-line"; // Respeita as quebras de linha
        }
         else if (userInput === "3") {
            responseMessage.textContent = 
                "FURIA: Confira os próximos jogos da nossa equipe em 2025!\n" +
                "- **CS2 (Counter-Strike 2):**\n" +
                "  - PGL Major Bucharest: FURIA x Virtus.pro - 10 de abril, às 15h (horário de Brasília).\n" +
                "  - BLAST Premier Spring Finals: FURIA x NAVI - 20 de abril, às 18h.\n\n" +
                "- **League of Legends:**\n" +
                "  - LTA Sul 2025: FURIA x paiN Gaming - 9 de fevereiro, às 16h.\n" +
                "  - Playoffs da LTA Sul: FURIA x LOUD - 15 de fevereiro, às 14h.\n\n" +
                "- **VALORANT:**\n" +
                "  - VCT Kickoff Americas: FURIA x 2Game - 16 de janeiro, às 19h.\n" +
                "  - Segunda rodada: FURIA x Leviatan (se classificado) - 20 de janeiro, às 21h.\n\n" +
                "Fique ligado e torça pela FURIA em todas as competições!";
            responseMessage.style.whiteSpace = "pre-line"; // Respeita as quebras de linha
        }
         else if (userInput === "4") {
            responseMessage.textContent = 
                "FURIA: Confira algumas curiosidades sobre nossa organização!\n" +
                "- **Origem do Nome:**\n" +
                "  - O nome FURIA foi inspirado na força e determinação de um predador, simbolizado pela pantera negra.\n\n" +
                "- **Símbolo da Pantera:**\n" +
                "  - A pantera representa resistência, luta e orgulho brasileiro, sendo um ícone de nossa identidade.\n\n" +
                "- **#DIADEFURIA:**\n" +
                "  - Uma hashtag que mobiliza fãs em dias de jogos, criando um clima de Copa do Mundo no cenário de Esports.\n\n" +
                "- **Documentário 'Road to Legends':**\n" +
                "  - Produzido pela RedBull TV, o documentário mostra a trajetória da FURIA até se tornar uma das maiores organizações de Esports.\n\n" +
                "- **Lifestyle:**\n" +
                "  - Além dos Esports, a FURIA investe em moda e design, criando peças que representam seus seguidores e fãs.\n\n" +
                "FURIA: Uma organização que vai além dos jogos, inspirando e conectando pessoas!";
            responseMessage.style.whiteSpace = "pre-line"; // Respeita as quebras de linha
        }
         else {
            responseMessage.textContent = "FURIA: Por favor, digite um número de 1 a 4 para informações específicas.";
        }

        responseMessage.style.color = "#00FF00"; // Cor verde para resposta
        responseMessage.style.marginBottom = "10px";
        responseMessage.style.animation = "fadeIn 0.5s";
        chatBox.appendChild(responseMessage);

        // Rolagem para a última mensagem
        chatBox.scrollTop = chatBox.scrollHeight;

        // Limpar campo de entrada
        document.getElementById('user-input').value = "";
    }
});
