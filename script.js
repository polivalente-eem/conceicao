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
    "matematica": "#",
    "quimica": "#",
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
    "matematica": "#",
    "quimica": "#",
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
    "matematica": "#",
    "quimica": "#",
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
