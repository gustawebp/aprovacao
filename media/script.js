function verificar() {
let a1 = document.getElementById('a1').value
let res = document.getElementById('res')
let a2 = document.getElementById('a2').value
let aluno = document.getElementById('name').value
let media = (a1 + a2) / 2
if (media >= 6) {res.innerHTML=`O(a) Aluno(a) ${aluno} <br> foi Aprovado`} 
else {res.innerHTML=`O(a) Aluno(a) ${aluno} foi Reprovado`}


}
