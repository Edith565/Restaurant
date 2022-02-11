<template>
  <div>
    <h1>GISA IS HOT DOING {{ flowers }}</h1>
    <input type="text" v-model="loginform.username"/>
    <input type="password" v-model="loginform.password" />
    <button @click="login">login</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flowers: 69,
      loginform: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
        console.log(this.loginform)
    },
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style>
