
if(localStorage.getItem("vetprodutos") === null){
    localStorage.setItem("vetprodutos", "[]");
} else {
    localdata = JSON.parse(localStorage.getItem("vetprodutos"));
    for(let i=0;i<localdata.length;i++){
        listar(localdata[i]);
    }
}


const addbtn = document.querySelector("input.adiciona");
const texto = document.querySelector("input.adicionar");

addbtn.addEventListener('click', function () {
    let newdata = texto.value;
    addprod(newdata);
    if (typeof (Storage) !== "undefined") {

    }
    listar(texto);
});


const tbody = document.querySelector("tbody");

tbody.addEventListener('click', function () {
    if(event.target.type == 'submit') {
        remprod(event.target.parentNode.parentNode.firstChild.firstChild.textContent);
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
    }
});



function listar(e){
    
    let produto;
    if(typeof e == "string") {
        produto = e;
    }else {
        produto = e.value;
    }

    let ts= `<tr><td>${produto}</td><td><button>Excluir</button></td></tr>`;

    tbody.innerHTML += ts;
}




function adicionaProduto(produto) {

    vetorProduto = JSON.parse(localStorage.getItem("vetprodutos"));

    vetorProduto.push(produto);

    localStorage.setItem("vetprodutos", JSON.stringify(vetorProduto));
}


function removeProduto(produto) {

    vetorProduto = JSON.parse(localStorage.getItem("vetprodutos"));

    vetorProduto.splice(vetorProduto.indexOf(produto), 1);

    localStorage.setItem("vetprodutos", JSON.stringify(vetorProduto));
}