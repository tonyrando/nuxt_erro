<template>
  <div > ets
  </div>
</template>

<script>
import Vue from 'vue'
import { addresses } from '@/store'

export default Vue.extend({
  layout: 'default_1',

  async asyncData(){
    await addresses.index()
  }
})
</script> 