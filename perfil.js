let conteudo = document.getElementById("conteudo")

function carConteudo(){
    
    
    if (conteudo.textContent.trim() === "") {
        document.getElementById("conteudo").innerHTML = "+ 55 62 99130 - 6314 <br> polianabadio@gmail.com"
      } else {
        document.getElementById("conteudo").innerHTML = ""
      }
}

function adicionar() {

    let tabela = document.getElementById("tabela");
    let curso = document.getElementById("curso").value;
    let periodo = document.getElementById("periodo").value;
    
    let novaLinha = tabela.insertRow();
  
    
    let celula1 = novaLinha.insertCell(0);
    let celula2 = novaLinha.insertCell(1);
  

    celula1.innerHTML = curso;
    celula2.innerHTML = periodo;
  }