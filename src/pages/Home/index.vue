<template>
  <div class="container">
    {{count}}
  </div>
</template>

<script>
import useGlobalState from '@/store/global'
export default {
  name:"Home",
  setup(){
    const globalStore = useGlobalState()
    const { count } = globalStore
    return {
      count
    }
  }
}
</script>

<style lang="scss" scoped>

</style>