<template>
  <div class="area" v-on:drop="handleDrop" v-on:dragover="handleDragover" >
    <div>
      <p>1. select image from folder and upload as base64</p>
      <p>2. drag image from folder and upload as base64</p>
    </div>
    <input type="file" ref="myInput" v-on:change="handleInput"/>
    <button v-on:click="handleButton">upload image</button>
  </div>
</template>

<script>
import util from "../util";
export default {
  props: {
    setImgSrc: Function
  },
  methods: {
    handleInput: async function (e) {
      this.$emit('setImgSrc', await util.getBase64(e.target.files[0]));
    },
    handleButton: function() {
      this.$refs.myInput.click();
    },
    handleDrop: async function (e) {
      e.preventDefault();
      this.$emit('setImgSrc', await util.getBase64(e.dataTransfer.files[0]));
    },
    handleDragover: async function (e) {
      e.preventDefault();
    },
  }
};
</script>

<style>
.container {
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: inset 0 0.0625em 0.125em #000;
  border-radius: 4px;
}
.area {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  border: 1px dashed #dbdbdb;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}
input {
  display: none;
}
button {
  display: inline-flex;
  font-size: 1rem;
  border-radius: 4px;
  line-height: 1.5;
  border: 1px solid transparent;
  background-color: #00c4a7;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
  box-shadow: none;
  height: 2.5em;
  color: #fff;
}
</style>