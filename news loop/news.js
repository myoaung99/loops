const endPoint =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=caa8a3621a5e481c96807e77fe1dfc91";

let data = fetch(endPoint)
  .then((response) => response.json())
  .then((data) => data);
