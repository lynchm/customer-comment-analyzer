export class ExMap extends Map {
    constructor() {
      super()
      
      this.constructor.prototype.increment = function (key: any) {
        this.has(key) && this.set(key, this.get(key) + 1)
      }
      this.constructor.prototype.decrement = function (key: any) {
        this.has(key) && this.set(key, this.get(key) - 1)
      }
    }
  }