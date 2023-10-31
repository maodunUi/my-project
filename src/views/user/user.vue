

<template>
  <div>
    <h2>这是用户的第一页</h2>
    <button @onclick="itemClick">点击</button>
  </div>

</template>



<script>

// import {hello} from "service/user"

export default {
  name: "User",
  // created() {
  //   this.handle()
  // }

  methods: {
    itemClick() {
      console.log("--------------")
      // hello()
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })

    }
  }

}
</script>

<style scoped>

</style>
