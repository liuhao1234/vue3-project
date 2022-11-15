import { defineStore } from 'pinia'
const useStore = defineStore('global', {
  state: () => ({ 
    count: 0 
  }),
  getters: {
    double: (state) => {
      return state.count * 2
    }
  },
  actions: {
    increment() {
      this.count++
    }
  },
  persist: {
    enabled: true,
    strategies: [{
      storage: localStorage
    }]
  }
})
export default useStore