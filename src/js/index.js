/* comentários */

const btnMais = document.querySelector('.btn-mostrar-projetos');
//const btnMais = document.getElementById('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

btnMais.addEventListener('click', () => {

    MostraMaisProjetos();

    esconderBotao();

});

//transformar os códigos acima em funções

function MostraMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function esconderBotao() {
    btnMais.classList.add('remover');
}





