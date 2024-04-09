/* comentários */

const btnMais = document.querySelector('.btn-mostrar-projetos');
//const btnMais = document.getElementById('.btn-mostrar-projetos');

const btnMenos = document.querySelector('.btn-esconder-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


btnMais.addEventListener('click', () => {
    MostraMaisProjetos();
});


btnMenos.addEventListener('click', () => {
    MostrarMenosProjetos();
});

//transformar os códigos acima em funções

function MostraMaisProjetos() {

    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
    var heightPage = document.body.scrollHeight;
    window.scrollTo(0, heightPage);

    btnMais.classList.add('remover');
    btnMenos.classList.remove('remover');
}

function MostrarMenosProjetos() {
    projetosInativos.forEach(projetoInativo => {

        projetoInativo.classList.remove('ativo');
    });

    btnMenos.classList.add('remover');
    btnMais.classList.remove('remover');
}




