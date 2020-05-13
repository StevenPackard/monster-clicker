export default class Player {
  constructor(data) {
    this.zenny = 0
    this.clicks = 0
    this.attacks = data.attacks
    this.clickModifier = 0
    this.autoClicker = 0
    this.health = data.health
    // console.log("Hello from Player");
  }
}