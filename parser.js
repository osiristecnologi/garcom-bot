function parseCommand(text) {

  let cmd = text.toLowerCase();

  return {
    createSite: cmd.includes("site"),
    dark: cmd.includes("dark"),
    menu: cmd.includes("menu")
  };
}
