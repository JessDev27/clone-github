const ul = document.querySelector("ul");

async function getApiGithub() {

   const response = await fetch('https://api.github.com/users/JessDev27/repos');
   const dados = await response.json();

   
   dados.forEach((item) => {
    
    ul.innerHTML += `
    
    <ul>
     <li class="repositories">
      <header class="hdr-text">
        <h2 class="nomeRepo">${item.name}</h2>
        <span>${item.visibility}</span>
      </header>
      <p class="descricao">${item.description}</p>
      <footer class="rodape">
       <span class="language">${item.language}</span>
       <span class="stars">*${item.stargazers_count}</span>
      </footer>
     </li>
    </ul>
   
    `
   });
}
getApiGithub();
