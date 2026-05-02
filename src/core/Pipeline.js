import bus from "./EventBus";

import { detectIntent }
  from "./IntentEngine";

import { routeTools }
  from "./router";

import { executeTools }
  from "./executor";



export async function runPipeline(
  userInput = ""
) {

  try {

    // =====================
    // STEP 1
    // =====================
    bus.emit(
      "pipeline:start",
      userInput
    );


    // =====================
    // STEP 2
    // =====================
    const intents =
      detectIntent(
        userInput
      );

    bus.emit(
      "intent:detected",
      intents
    );


    // =====================
    // STEP 3
    // =====================
    const tools =
      routeTools(
        intents
      );

    bus.emit(
      "tools:selected",
      tools
    );


    // =====================
    // STEP 4
    // =====================
    const results =
      await executeTools(
        tools
      );

    bus.emit(
      "tools:completed",
      results
    );


    // =====================
    // STEP 5
    // =====================
    bus.emit(
      "pipeline:finished",
      results
    );


    return results;


  } catch (error) {

    bus.emit(
      "pipeline:error",
      error
    );

    console.error(
      "Pipeline Error:",
      error
    );

    return null;
  }
}
