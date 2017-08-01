export default class LocalStorage {
  constructor() {
    this.store = {
      recentCities: [],
      currentCity: ''}
  }

  getItem(key) {
    return this.store[key]
  }

  setItem(key, string) {
    this.store[key] = string
  }

  clear() {
    this.store = {}
  }
}
