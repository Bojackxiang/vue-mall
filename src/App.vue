<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},

  mounted() {
    axios
      .get("/api/activity/servicetime")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};
</script>

<style>
</style>
