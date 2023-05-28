<template>
  <div id="app">
    <v-collapse-pro ref="collapse" :fold="foldStatus" @collapseStatusChange="collapseStatusChange">
      <div style="background:#198">
        <p>哈哈哈哈哈哈哈哈</p>
        <p>哈哈哈哈哈哈哈哈</p>
        <p>哈哈哈哈哈哈哈哈</p>
      </div>
    </v-collapse-pro>
  </div>
</template>

<script>
import { VCollapsePro } from "v-collapse-pro";
import "v-collapse-pro/v-collapse-pro.css";

export default {
  data() {
    return {
      foldStatus: false
    }
  },
  components: {
    VCollapsePro
  },
  methods: {
    handleChange() {
      this.foldStatus = !this.foldStatus
      this.$refs.collapse.updateFoldStatus(this.foldStatus)
    },
    collapseStatusChange(status) {
      console.log(status)
    }
  },
}
</script>

<style></style>
