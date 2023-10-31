

<template>
  <div @click="itemClick">
    <h2>这是用户的第一页</h2>
  </div>

</template>



<script setup>
import {hello} from "../../service/user/user";

const itemClick = () => {
  hello()
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  console.log("--------------");
};
export default {
  name: "User",
  // created() {
  //   this.handle()
  // }

  // methods: {
  //   itemClick() {
  //     // hello()
  //     //   .then(res => {
  //     //     console.log(res)
  //     //   })
  //     //   .catch(err => {
  //     //     console.log(err)
  //     //   })
  //     console.log("--------------")
  //   }

  }
}
</script>

<style scoped>

</style>
