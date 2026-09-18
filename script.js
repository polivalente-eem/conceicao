const params = new URLSearchParams(window.location.search);
const ano = params.get("ano") || "1";

const nomes = {
  "1": "1º Ano do Ensino Médio",
  "2": "2º Ano do Ensino Médio",
  "3": "3º Ano do Ensino Médio"
};

const titulo = document.getElementById("year-title");
if (titulo) titulo.textContent = nomes[ano] || nomes["1"];

/*
  COLOQUE AQUI OS LINKS DAS PASTAS DO GOOGLE DRIVE.

  Estrutura:
  links["ano"]["disciplina"] = "URL_DO_DRIVE";

  Exemplo:
  links["1"]["matematica"] = "https://drive.google.com/drive/folders/...";
*/

const links = {
  "1": {
    "matematica": "https://drive.google.com/drive/folders/1EnrZvKC2XUwyR3Mh-9kJvDGFZvuVbUYT?usp=drive_link",
    "quimica": "https://drive.google.com/drive/u/0/folders/1JI9vRJm1REjv_-12qA4H54NZlIvJ-ZtQ",
    "biologia": "#",
    "portugues": "#",
    "geografia": "#",
    "historia": "#",
    "fisica": "#",
    "ingles": "#",
    "artes": "#",
    "filosofia": "#",
    "sociologia": "#",
    "educacao-fisica": "#"
  },
  "2": {
    "matematica": "https://drive.google.com/drive/folders/14wuCOpYBZgV1vBGtYH3W26DDXXMu8bsZ?usp=drive_link",
    "quimica": "https://drive.google.com/drive/u/0/folders/10kmzO9UV-nyWrFSdfpOZwtpXKdFStu3f",
    "biologia": "#",
    "portugues": "#",
    "geografia": "#",
    "historia": "#",
    "fisica": "#",
    "ingles": "#",
    "artes": "#",
    "filosofia": "#",
    "sociologia": "#",
    "educacao-fisica": "#"
  },
  "3": {
    "matematica": "https://drive.google.com/drive/u/0/folders/1x5j3JfLJ0esE5q6OVw26SqtH5v4nuiro",
    "quimica": "https://drive.google.com/drive/u/0/folders/122_6w9i_6sBA_tQn1rFra0n7eGFdjILc",
    "biologia": "#",
    "portugues": "#",
    "geografia": "#",
    "historia": "#",
    "fisica": "#",
    "ingles": "#",
    "artes": "#",
    "filosofia": "#",
    "sociologia": "#",
    "educacao-fisica": "#"
  }
};

document.querySelectorAll(".subject-card").forEach(card => {
  const subject = card.dataset.subject;
  const url = links[ano]?.[subject] || "#";
  card.href = url;

  // Evita abrir uma nova aba enquanto o link ainda é um placeholder.
  if (url === "#") {
    card.removeAttribute("target");
    card.addEventListener("click", event => {
      event.preventDefault();
      alert("O link do Google Drive desta disciplina ainda não foi configurado.");
    });
  }
});
