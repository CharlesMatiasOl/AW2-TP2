const meuBotao = document.getElementById('meuBotao');
meuBotao.addEventListener('click', async () => {
    try {
        const resposta = await fetch('http://localhost:3001/api/guests');
 // Modifique o URL conforme necessário
        if (resposta.ok) {
            const data = await resposta.json();
            console.log(data); // faça algo com os dados
        } else {
            console.error('Erro ao obter dados dos convidados:', resposta.status);
        }
    } catch (error) {
        console.error('Erro ao realizar solicitação:', error);
    }
});

function addGuest() {
    const nameInput = document.getElementById('nameInput').value;
    const emailInput = document.getElementById('emailInput').value;
    
    // Adicione lógica para adicionar o convidado ao seu aplicativo aqui
    
    guardarConvidados(novosConvidados); // Substitua 'novosConvidados' pelos dados atualizados dos convidados
}
