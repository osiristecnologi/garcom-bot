import intentEngine from "./intentEngine";
import router from "./router";
import eventBus from "./eventBus";
import commandHistory from "./commandHistory";


const executor = {

  async run(
    input
  ) {

    try {

      // 1. salvar histórico
      commandHistory.add(
        input
      );


      eventBus.emit(
        "log",
        {
          agent:
            "Executor",

          msg:
            "Recebendo comando..."
        }
      );


      // 2. interpretar intenção
      const intent =
        intentEngine.analyze(
          input
        );


      eventBus.emit(
        "log",
        {
          agent:
            "IntentEngine",

          msg:
            JSON.stringify(intent)
        }
      );


      // 3. selecionar tools
      const tasks =
        router.resolve(
          intent
        );


      eventBus.emit(
        "log",
        {
          agent:
            "Router",

          msg:
            `${tasks.length} tools selecionadas`
        }
      );


      // 4. executar tools
      const results =
        await router.run(
          tasks,
          input
        );


      eventBus.emit(
        "log",
        {
          agent:
            "Executor",

          msg:
            "Execução finalizada"
        }
      );


      // 5. retorno final
      return {

        success:
          true,

        input,

        intent,

        results
      };

    } catch (
      error
    ) {

      eventBus.emit(
        "log",
        {
          agent:
            "Executor",

          msg:
            "Erro na execução"
        }
      );


      return {

        success:
          false,

        error:
          error.message
      };
    }
  }

};


export default
  executor;
