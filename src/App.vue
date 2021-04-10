<template>
  <div class="container">
    <Area v-on:setImgSrc="setImgSrc"/>
    <textarea v-model="value"></textarea>
  </div>
</template>

<script>
import Area from "./components/Area.vue";
export default {
  name: "App",
  components: {
    Area
  },
  data: function() {
    return {
      value: '',
    }
  },
  methods: {
    setImgSrc: function (value) {
      this.value = value;
      
    }
  }
};
</script>
<style>
textarea {
  display: block;
  height: 200px;
  max-width: 100%;
  min-width: 100%;
  padding: calc(0.75em - 1px);
  resize: vertical;
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  width: 100%;
  background-color: #fff;
  border-color: #dbdbdb;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>