document.getElementById('news-form').addEventListener('submit', function(event) {
    // Impede o formulário de recarregar a página
    event.preventDefault();

    // Captura os valores dos campos
    const title = document.getElementById('news-title').value;
    const category = document.getElementById('news-category').value;
    const content = document.getElementById('news-content').value;

    // Obtém a data e hora atual formatada
    const now = new Date();
    const dateString = now.toLocaleDateString('pt-BR') + ' às ' + now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    // Seleciona o container do feed de notícias
    const newsFeed = document.getElementById('news-feed');

    // Remove a mensagem de "Nenhuma notícia" se for a primeira notícia
    const emptyMessage = document.querySelector('.empty-message');
    if (emptyMessage) {
        emptyMessage.remove();
    }

    // Cria a estrutura do cartão da notícia
    const newsCard = document.createElement('article');
    newsCard.classList.add('news-card');

    newsCard.innerHTML = `
        <div class="meta">
            <span class="category-tag">${category}</span>
            <span>Postado em ${dateString}</span>
        </div>
        <h3>${title}</h3>
        <p>${content}</p>
    `;

    // Adiciona a nova notícia no topo do feed
    newsFeed.insertBefore(newsCard, newsFeed.firstChild);

    // Limpa o formulário para a próxima postagem
    document.getElementById('news-form').reset();
});
