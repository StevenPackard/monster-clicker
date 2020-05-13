import GameController from "./Controllers/GameController.js";

class App {
  constructor() {
    console.log("Hello from app");
    this.gameController = new GameController()

  }
}

window["app"] = new App()