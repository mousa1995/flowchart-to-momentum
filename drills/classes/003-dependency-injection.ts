class Logger {
  log(message: string) {
    console.log(message);
  }
}

class TaskService {
  constructor(private logger: Logger) {}

  finishTask() {
    this.logger.log("Task finished");
  }
}

const log = new Logger();
const taskService = new TaskService(log);

taskService.finishTask();
