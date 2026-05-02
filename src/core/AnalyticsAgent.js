import bus from "./EventBus";


class AnalyticsAgent {

  constructor() {

    this.name =
      "Analytics Agent";

    this.status =
      "online";

    this.stats = {

      totalQueries: 0,

      totalErrors: 0,

      toolsUsage: {},

      agentsUsage: {},

      executionTimes: []
    };
  }


  // =====================
  // TRACK QUERY
  // =====================
  trackQuery() {

    this.stats
      .totalQueries++;
  }


  // =====================
  // TRACK TOOL
  // =====================
  trackTool(
    toolName
  ) {

    if (
      !this.stats
        .toolsUsage[
          toolName
        ]
    ) {

      this.stats
        .toolsUsage[
          toolName
        ] = 0;
    }


    this.stats
      .toolsUsage[
        toolName
      ]++;
  }


  // =====================
  // TRACK AGENT
  // =====================
  trackAgent(
    agentName
  ) {

    if (
      !this.stats
        .agentsUsage[
          agentName
        ]
    ) {

      this.stats
        .agentsUsage[
          agentName
        ] = 0;
    }


    this.stats
      .agentsUsage[
        agentName
      ]++;
  }


  // =====================
  // TRACK ERROR
  // =====================
  trackError() {

    this.stats
      .totalErrors++;
  }


  // =====================
  // TRACK TIME
  // =====================
  trackExecutionTime(
    ms
  ) {

    this.stats
      .executionTimes
      .push(ms);
  }


  // =====================
  // REPORT
  // =====================
  getReport() {

    const times =
      this.stats
        .executionTimes;


    const avgTime =
      times.length
        ? (
            times.reduce(
              (a, b) =>
                a + b,
              0
            ) /
            times.length
          ).toFixed(2)
        : 0;


    const report = {

      ...this.stats,

      averageExecution:
        avgTime + " ms"
    };


    bus.emit(
      "analytics:report",
      report
    );


    return report;
  }


  // =====================
  // RESET
  // =====================
  reset() {

    this.stats = {

      totalQueries: 0,

      totalErrors: 0,

      toolsUsage: {},

      agentsUsage: {},

      executionTimes: []
    };


    bus.emit(
      "analytics:reset",
      {
        agent: this.name
      }
    );
  }


  // =====================
  // STATUS
  // =====================
  getStatus() {

    return {

      name: this.name,

      status: this.status
    };
  }

}


const analyticsAgent =
  new AnalyticsAgent();


export default
  analyticsAgent;
