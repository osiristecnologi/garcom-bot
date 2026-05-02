function route(parsed) {

  if (parsed.createSite) {
    return generateSite(parsed);
  }

  return "Comando não reconhecido";
}

function generateSite(p) {

  let bg = p.dark ? "#0f1115" : "white";

  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: ${bg}; color: white; }
  </style>
</head>
<body>

<h1>Site Gerado</h1>

${p.menu ? "<button>☰ Menu</button>" : ""}

</body>
</html>
`;
}
