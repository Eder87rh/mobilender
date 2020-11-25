<template>
  <div class="circle-button__container">
    <div class="circle-button">
      <div class="circle-button__icon">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.circle-button__container {
  position: relative;
}

.circle-button {
  position: absolute;
  /* top: -310; */
  transform: translate(-6rem, -2.2rem);
  width: 4rem;
  height: 4rem;
  background-color: var(--grey-light-color);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
