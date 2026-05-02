function agent(command) {

  const parsed = parseCommand(command);
  const result = route(parsed);

  return result;
}
