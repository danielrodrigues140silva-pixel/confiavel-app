document.getElementById('search').addEventListener('input', (e)=>{
  const query = e.target.value.toLowerCase();
  const features = document.getElementById('features');
  features.innerHTML = `<p>Resultados da pesquisa para: ${query}</p>`;
});
