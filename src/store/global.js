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
})
export default useStore