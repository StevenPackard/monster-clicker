import Player from "../Models/Player.js";
import Item from "../Models/Item.js";
import Palico from "../Models/Palico.js";


let _player = new Player({ health: 100, attacks: { click: 1, punch: 2 } })
let _swordAndShield = new Item({ name: "Sword and Shield", price: 20, multiplier: 2 })
let _longSword = new Item({ name: "Longsword", price: 50, multiplier: 4 })
let _greatSword = new Item({ name: "Greatsword", price: 100, multiplier: 10 })
let _palico1 = new Palico({ name: "Roger", price: 100, multiplier: 20 })
let _palico2 = new Palico({ name: "Sammy", price: 200, multiplier: 50 })
let _palico3 = new Palico({ name: "Anubis", price: 10000, multiplier: 200 })

export default class GameService {
  constructor() {
    // console.log("Hello from Game Service");
    // console.log(_player);
  }

  attack(attackName) {
    // console.log(attackName + " from service");
    _player.zenny += (_player.attacks[attackName] + _player.clickModifier);

  }
  autoClick() {
    _player.zenny += _player.autoClicker

  }



  purchaseItem(itemName) {
    if (itemName == "Sword and Shield") {
      _swordAndShield.quantity++
      _player.clickModifier += _swordAndShield.multiplier
      _player.zenny -= _swordAndShield.price
    } else if (itemName == "Longsword") {
      _longSword.quantity++
      _player.clickModifier += _longSword.multiplier
      _player.zenny -= _longSword.price
    } else if (itemName == "Greatsword") {
      _greatSword.quantity++
      _player.clickModifier += _greatSword.multiplier
      _player.zenny -= _greatSword.price
    }
  }

  purchasePalico(palicoName) {
    if (palicoName == "Roger") {
      _palico1.quantity++
      _player.autoClicker += _palico1.multiplier
      _player.zenny -= _palico1.price
    } else if (palicoName == "Sammy") {
      _palico2.quantity++
      _player.autoClicker += _palico2.multiplier
      _player.zenny -= _palico2.price
    } else if (palicoName == "Anubis") {
      _palico3.quantity++
      _player.autoClicker += _palico3.multiplier
      _player.zenny -= _palico3.price
    }
  }


  get TotalZenny() {
    return _player.zenny
  }
  get TotalAuto() {
    return _player.autoClicker
  }
  get TotalSNS() {
    return _swordAndShield.quantity
  }
  get TotalLS() {
    return _longSword.quantity
  }
  get TotalGS() {
    return _greatSword.quantity
  }
  get SNSprice() {
    return _swordAndShield.price
  }
  get LSprice() {
    return _longSword.price
  }
  get GSprice() {
    return _greatSword.price
  }
  get P1price() {
    return _palico1.price
  }
  get P2price() {
    return _palico2.price
  }
  get P3price() {
    return _palico3.price
  }

}


