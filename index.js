var conteudo = document.getElementById('content');

function inserirSobre(){

// Criar elemento
var titulo = document.createElement('h1');
titulo.style.marginTop = "2%";
titulo.style.fontFamily = 'Poiret One';
titulo.style.textAlign = "center";

var p = document.createElement("h3");
p.style.fontSize = "15px";
p.style.textAlign = "center";
p.style.fontFamily = 'Poiret One';
p.style.marginTop = "-20px";
p.style.color = "red";

var p2 = document.createElement("p");
p2.style.margin = "0px 22.8%";
p2.style.textAlign = "left";
p2.style.width = "780px";
p2.style.fontFamily = "Asar";
p2.style.textAlign = "18px";
p2.style.color = "#363636";
p2.style.fontSize = "18px";
p2.style.lineHeight = "25px";

// Criar o nó de texto
var texto = document.createTextNode("Roxelly Tavares");
p.innerText = "RUA DOUTOR OSWALDO CRUZ · 445 · SANTOS/SP · (13) 98209-2264 · (13) 3327-8593 · ROXELLY.TAVARES@GMAIL.COM";
p2.innerHTML = "Experiência no setor educacional, tecnológico e administrativo, exercendo as seguintes atividades:" + '<br>' + "✅ Atendimento ao público em geral, matrículas, orientação aos alunos e professores." + '<br>' +  " ✅ Suporte aos alunos, professores e funcionários (presencialmente, em sala de aula e remotamente)."+ '<br>' +  " ✅ Instalação de softwares em computadores, montagem, instalação e manutenção de micros." + '<br>' +  " ✅ Preparação e expedição de documentos específicos de faculdade.";
// Anexar o nó de texto ao elemento h1
titulo.appendChild(texto);


// Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)

conteudo.innerHTML = "";
conteudo.appendChild(titulo);
conteudo.appendChild(p);
conteudo.appendChild(p2);
}


function inserirExp(){

// Criar elemento
var titulo2 = document.createElement('h1');
titulo2.style.marginTop = "2%";
titulo2.style.fontFamily = 'Poiret One';
titulo2.style.textAlign = "center";


var exp = document.createElement("h3");
exp.style.margin = "0 auto";
exp.style.textAlign = "left";
exp.style.width = "780px";
exp.style.fontFamily = 'Poiret One';
exp.style.fontSize = "21px";
exp.style.color = "black";

var exp2 = document.createElement("h3");
exp2.style.marginBottom = "7%";
exp2.style.margin = "0 auto";
exp2.style.textAlign = "left";
exp2.style.width = "780px";
exp2.style.fontFamily = 'Poiret One';
exp2.style.fontSize = "16px";
exp2.style.color = "red";

var exp3 = document.createElement("p");
exp3.style.margin = "0.5% auto";
exp3.style.textAlign = "left";
exp3.style.width = "780px";
exp3.style.fontFamily = "Asar";
exp3.style.fontSize = "18px";
exp3.style.color = "#363636";
exp3.style.lineHeight = "25px";


var titulo3 = document.createElement('h3');
titulo3.style.margin = "0 auto";
titulo3.style.textAlign = "left";
titulo3.style.width = "780px";
titulo3.style.marginTop = "4%";
titulo3.style.fontFamily = 'Poiret One';
titulo3.style.fontSize = "21px";
titulo3.style.color = "black";

var unip = document.createElement('h3');
unip.style.marginTop = "7%";
unip.style.margin = "0 auto";
unip.style.textAlign = "left";
unip.style.width = "780px";
unip.style.fontFamily = 'Poiret One';
unip.style.fontSize = "16px";
unip.style.color = "red";

var descunip = document.createElement('p');
descunip.style.margin = "0.5% auto";
descunip.style.textAlign = "left";
descunip.style.width = "780px";
descunip.style.fontFamily = "Asar";
descunip.style.fontSize = "18px";
descunip.style.color = "#363636";
descunip.style.lineHeight = "25px";

// Criar o nó de texto
var texto = document.createTextNode("Experiência");
exp.innerHTML = "Auxiliar técnico em T.I";
exp2.innerHTML = "São Judas Campus Unimonte";
exp3.innerHTML = "Instalação de softwares, manutenção e configuração de computadores, base em redes de computadores, atendimento ao aluno, atendimento aos professores e funcionários remotamente e presencialmente, gerenciamento de chamados via HelpDesk, instalação e configuração de datashow.";
titulo3.innerHTML = "Menor Aprendiz Administrativo";
unip.innerHTML = "Universidade Paulista UNIP";
descunip.innerHTML = "Rotina pedagógica e administrativa (atendimento em geral, preparação de malotes, recebimento e entrega de documentos, acessos aos sistemas, plataformas de ensino e matrículas de alunos).";
// Anexar o nó de texto ao elemento h1
titulo2.appendChild(texto);

// Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
conteudo.innerHTML = "";
conteudo.appendChild(titulo2);
conteudo.appendChild(exp);
conteudo.appendChild(exp2);
conteudo.appendChild(exp3);
conteudo.appendChild(titulo3);
conteudo.appendChild(unip);
conteudo.appendChild(descunip);
}	

function inserirForm(){

// Criar elemento
var tituloForm = document.createElement('h1');
tituloForm.style.marginTop = "2%";
tituloForm.style.fontFamily = 'Poiret One';
tituloForm.style.textAlign = "center";

var fatec = document.createElement('h3');
fatec.style.margin = "0 auto";
fatec.style.textAlign = "left";
fatec.style.width = "780px";
fatec.style.fontFamily = 'Poiret One';
fatec.style.fontSize = "21px";

var curso = document.createElement("h3");
curso.style.margin = "0 auto";
curso.style.textAlign = "left";
curso.style.width = "780px";
curso.style.fontFamily = 'Poiret One';
curso.style.fontSize = "18px";
curso.style.color = "red";

var periodo = document.createElement("p");
periodo.style.margin = "0.5% auto";
periodo.style.textAlign = "left";
periodo.style.width = "780px";
periodo.style.fontFamily = "Asar";
periodo.style.fontSize = "18px";
periodo.style.color = "4F4F4F";

var situ = document.createElement("h3");
situ.style.margin = "-4% auto";
situ.style.textAlign = "right";
situ.style.width = "780px";
situ.style.fontFamily = 'Poiret One';
situ.style.fontSize = "18px";
situ.style.color = "red";

var etec = document.createElement("h3");
etec.style.margin = "10% auto";
etec.style.textAlign = "left";
etec.style.width = "780px";
etec.style.fontFamily = 'Poiret One';
etec.style.fontSize = "21px";

var curso2 = document.createElement("h3");
curso2.style.margin = "-10% auto";
curso2.style.textAlign = "left";
curso2.style.width = "780px";
curso2.style.fontFamily = 'Poiret One';
curso2.style.fontSize = "18px";
curso2.style.color = "red";

var periodo2 = document.createElement("p");
periodo2.style.margin = "10.5% auto";
periodo2.style.textAlign = "left";
periodo2.style.width = "780px";
periodo2.style.fontFamily = "Asar";
periodo2.style.fontSize = "18px";
periodo2.style.color = "4F4F4F";

var situ2 = document.createElement("h3");
situ2.style.margin = "-13.5% auto";
situ2.style.textAlign = "right";
situ2.style.width = "780px";
situ2.style.fontFamily = 'Poiret One';
situ2.style.fontSize = "15px";
situ2.style.color = "red";

// Criar o nó de texto
var texto = document.createTextNode("Formação");
fatec.innerHTML = "Fatec Rubens Lara";
curso.innerHTML = "Tecnológo em Sistemas para Internet"
periodo.innerHTML = "Manhã";
situ.innerHTML = "Cursando";
etec.innerHTML = "Etec Aristóteles Ferreira";
curso2.innerHTML = "Técnico em Informática para Internet";
periodo2.innerHTML = "Concluído";
situ2.innerHTML = "06/2016 - 12/2017";

// Anexar o nó de texto ao elemento h1
tituloForm.appendChild(texto);

// Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
conteudo.innerHTML = "";
conteudo.appendChild(tituloForm);
conteudo.appendChild(fatec);
conteudo.appendChild(curso);
conteudo.appendChild(periodo);
conteudo.appendChild(situ);
conteudo.appendChild(etec);
conteudo.appendChild(curso2);
conteudo.appendChild(periodo2);
conteudo.appendChild(situ2);
}

function inserirConhec(){
   
// Criar elemento
var tituloConhec = document.createElement('h1');
tituloConhec.style.marginTop = "2%";
tituloConhec.style.fontFamily = 'Poiret One';
tituloConhec.style.textAlign = "center";

var ferconhec = document.createElement('h3');
ferconhec.style.margin = "0 auto";
ferconhec.style.textAlign = "left";
ferconhec.style.width = "780px";
ferconhec.style.fontFamily = "Poiret One";
ferconhec.style.color = "black";
ferconhec.style.fontSize = "21px";

var desconhec = document.createElement('p');
desconhec.style.margin = "0 auto";
desconhec.style.textAlign = "left";
desconhec.style.width = "780px";
desconhec.style.fontFamily = "Asar";
desconhec.style.color = "#4F4F4F";
desconhec.style.fontSize = "18px";

// Criar o nó de texto
var texto = document.createTextNode("Conhecimentos");
ferconhec.innerHTML = "Ferramentas & Conhecimentos";
desconhec.innerHTML = "📌 Desenvolvimento de Sites com CSS 3, HTML 5, JavaScript, Bootstrap e JQuery" + '<br>' + "📌 Conhecimento em JavaScript, .NET, PHP, Java, Pacote Adobe e plataforma Windows" + '<br>' + " 📌 Suporte Técnico presencial e remoto, manutenção de desktop e notebooks" + '<br>' + "📌 Rotina administrativa"; ;


// Anexar o nó de texto ao elemento h1
tituloConhec.appendChild(texto);

// Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
conteudo.innerHTML = "";
conteudo.appendChild(tituloConhec);
conteudo.appendChild(ferconhec);
conteudo.appendChild(desconhec);
}

function inserirInter(){
    // Criar elemento
    var tituloInter = document.createElement('h1');
    tituloInter.style.marginTop = "2%";
    tituloInter.style.fontFamily = 'Poiret One';
    tituloInter.style.textAlign = "center";

    var textoInter = document.createElement('p');
    textoInter.style.margin = "0 auto";
    textoInter.style.textAlign = "left";
    textoInter.style.width = "780px";
    textoInter.style.fontFamily = "Asar";
    textoInter.style.color = "#4F4F4F";
    textoInter.style.fontSize = "18px";
    textoInter.style.lineHeight = "25px";


// Criar o nó de texto
var texto = document.createTextNode("Interesses");
textoInter.innerHTML = "💻 Tenho conhecimento e estou cursando uma faculdade de tecnologia, minha meta é atuar na área de T.I, auxiliando meus colegas de trabalho e dando todo suporte necessário." + '<br>' + '<br>' + "💻 Como já atuei na área administrativa de uma empresa, também não vejo problemas em cuidar da arte interna da mesma, gerenciando toda parte técnica e fazendo o que for necessário para ganhar conhecimento e crescer junto com os meus colegas de setor.";


// Anexar o nó de texto ao elemento h1
tituloInter.appendChild(texto);

// Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
conteudo.innerHTML = "";
conteudo.appendChild(tituloInter);
conteudo.appendChild(textoInter);

}

function inserirCertif(){
     // Criar elemento
    var tituloCertif = document.createElement('h1');
    tituloCertif.style.marginTop = "2%";
    tituloCertif.style.fontFamily = 'Poiret One';
    tituloCertif.style.textAlign = "center";

    var textoCertif = document.createElement('p');
    textoCertif.style.margin = "0 auto";
    textoCertif.style.textAlign = "left";
    textoCertif.style.width = "780px";
    textoCertif.style.fontFamily = "Asar";
    textoCertif.style.color = "#4F4F4F";
    textoCertif.style.fontSize = "18px";
    textoCertif.style.lineHeight = "25px";
    // Criar o nó de texto
    var texto = document.createTextNode("Certificações");
    textoCertif.innerHTML = "🏆 Conceitos de Informática, Microsoft Office Business (Word, Excel e PowerPoint) e Internet (Navegação e Correio Eletrônico) – Colégio Afonso Pena" + '<br>' + "🏆 Técnico em Informática para Internet - ETEC Aristóteles Ferreira";

    // Anexar o nó de texto ao elemento h1
    tituloCertif.appendChild(texto);

    
    // Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
    conteudo.innerHTML = "";
    conteudo.appendChild(tituloCertif);
    conteudo.appendChild(textoCertif);
}