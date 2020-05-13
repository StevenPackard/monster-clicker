import GameService from "../Services/GameService.js";


let _gameService = new GameService()

function _draw() {
  document.getElementById("zenny").innerText = _gameService.TotalZenny.toString()
  document.getElementById("SNSquant").innerText = _gameService.TotalSNS.toString()
  document.getElementById("LSquant").innerText = _gameService.TotalLS.toString()
  document.getElementById("GSquant").innerText = _gameService.TotalGS.toString()
}

function _disableItems() {
  let cantBuySnS = document.getElementById("SNSbutton")
  let cantBuyLS = document.getElementById("LSbutton")
  let cantBuyGS = document.getElementById("GSbutton")

  cantBuySnS.setAttribute("disabled", "true")
  cantBuyLS.setAttribute("disabled", "true")
  cantBuyGS.setAttribute("disabled", "true")

  if (_gameService.TotalZenny >= _gameService.SNSprice) {
    cantBuySnS.removeAttribute("disabled")
  }
  if (_gameService.TotalZenny >= _gameService.LSprice) {
    cantBuyLS.removeAttribute("disabled")
  }
  if (_gameService.TotalZenny >= _gameService.GSprice) {
    cantBuyGS.removeAttribute("disabled")
  }
}

function _disablePalicos() {
  let cantBuyP1 = document.getElementById("P1button")
  let cantBuyP2 = document.getElementById("P2button")
  let cantBuyP3 = document.getElementById("P3button")

  cantBuyP1.setAttribute("disabled", "true")
  cantBuyP2.setAttribute("disabled", "true")
  cantBuyP3.setAttribute("disabled", "true")

  if (_gameService.TotalZenny >= _gameService.P1price) {
    cantBuyP1.removeAttribute("disabled")
  } else if (_gameService.TotalZenny >= _gameService.P2price) {
    cantBuyP2.removeAttribute("disabled")
  } else if (_gameService.TotalZenny >= _gameService.P3price) {
    cantBuyP3.removeAttribute("disabled")
  }
}

function _startInterval() {
  setInterval(_gameService.autoClick, 3000)
  setInterval(_draw, 3000)
}

export default class GameController {
  constructor() {
    // console.log("Hello from Controller");
    _disableItems()
    _disablePalicos()
  }

  attack(attackName) {
    // console.log(attackName + " from controller");
    _gameService.attack(attackName)
    _draw()
    _disableItems()
    _disablePalicos()
  }

  purchaseItem(itemName) {
    _gameService.purchaseItem(itemName)
    _draw()
    _disableItems()
    _disablePalicos()
  }

  purchasePalico(palicoName) {
    _gameService.purchasePalico(palicoName)
    console.log(_gameService.TotalAuto);
    _startInterval()
    _draw()
    _disableItems
    _disablePalicos()
  }
}