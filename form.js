 


if(localStorage.getItem("vetcurriculos") === null){
    localStorage.setItem("vetcurriculos", "[]");
}else {
    localdata = JSON.parse(localStorage.getItem("vetcurriculos"));

    for(let i=0 ; i<localdata.length ; i++) {

        list(JSON.parse(localdata[i]).cpf, 
        JSON.parse(localdata[i]).nome, 
        JSON.parse(localdata[i]).cidade, 
        JSON.parse(localdata[i]).curriculo);

    }
}

const btn = document.querySelector("input.adiciona");
const cpftxt = document.querySelector("input.cpf");
const nometxt = document.querySelector("input.nome");
const cidadetxt = document.querySelector("input.cidade");
const curriculotxt = document.querySelector("textarea");

btn.addEventListener('click', function () {
    let cpf = cpftxt.value;
    let nome = nometxt.value;
    let cidade = cidadetxt.value;
    let form = curriculotxt.value;

    addcurr(cpf, nome, cidade, form);

    if (typeof (Storage) !== "undefined") {}
    
    listar(cpf, nome, cidade, form);
});


const tbody = document.querySelector("tbody");

tbody.addEventListener('click', function () {

    if(event.target.type == 'submit') {
        remcurr(event.target.parentNode.parentNode.querySelector(".cpf").textContent);
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
    };
});


function listar(cpf,nome,cidade,form){
    let cpf, nome, cidade, form;
    if(typeof a == "string") {
        cpf = cpf;
        nome = nome;
        cidade = cidade;
        form = form;
    } else {
        cpf = cpf.value;
        nome = nome.value;
        cidade = cidade.value;
        form = form.value;
    }
    const btn = `<td><button>Excluir</button></td>`;
    let cpf = `<td><p>CPF: </p></td><td class="cpf">${cpf}</td>`;
    let nome = `<td><p>Nome: </p><td>${nome}</td>`;
    let cidade = `<td><p>Cidade: </p><td>${cidade}</td>`;
    let form =  `<td><p>Currículo: </p><br><td>${curriculo}</td>`;
    let tr = `<tr>${cpf}${nome}${cidade}${form}${btn}</tr>`;
    tbody.innerHTML += tr;
}

function addcurr(cpf,nome,cidade,form){
    curr = '{"cpf":"'+cpf+'", "nome":"'+nome+'", "cidade":"'+cidade+'", "curriculo":"'+form+'"}';
    vet = JSON.parse(localStorage.getItem("vetcurriculos"));
    vet.push(curr);
    localStorage.setItem("vetcurriculos", JSON.stringify(vet));


}



function remcurr(cpf){
    vet = JSON.parse(localStorage.getItem("vetcurriculos"));
    for(let i=0;i<vet.length;i++){
        if( JSON.parse(vet[i]).cpf === cpf) {
            vet.splice(vet[i], 1);
            localStorage.setItem("vetcurriculos", JSON.stringify(vet));
        }
    }
}