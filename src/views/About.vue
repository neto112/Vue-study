<template>
  <a
  @click="openWhatsApp"
    class="whatsapp-link"
    target="_blank"
  >
    <v-icon class="mt-1" color="#fff" size="3rem">mdi-whatsapp</v-icon>
  </a>
</template>

<script lang="ts">
export default {
  methods: {
    openWhatsApp() {
      open("https://api.whatsapp.com/send?phone=5511222221111");
    },
  },
};
</script>

<style>
.whatsapp-link {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  font-size: 30px;
  box-shadow: 1px 1px 2px #888;
  z-index: 1000;
}
</style>
