<template>
  <div>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  data() {
    return {
      msg: "hello vue222",
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>
<style></style>
