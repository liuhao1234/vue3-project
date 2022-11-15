<template>
  <div class="container">
    <el-button 
      type="success"
      @click="handleIncrement"
    >Success</el-button>
    {{count}}
  </div>
</template>

<script>
import useGlobalState from '@/store/global'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
export default {
  name:"Login",
  setup(){
    const router = useRouter()
    const globalStore = useGlobalState()
    const { increment } = globalStore
    function handleIncrement(){
      increment()
      router.push({
        name:"home"
      })
    }
    return {
      count:computed(()=>globalStore.count),
      handleIncrement
    }
  }
}
</script>

<style lang="scss" scoped>

</style>