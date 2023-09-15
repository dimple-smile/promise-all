<template>
  <div style="padding: 20px">
    <div style="border: 1px solid #aaa">

      <svg
        width="1200px"
        height="400px"
        viewBox="0 0 1200 400"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <path class="line" d="M 0,200 L 200,0 L 400,200 L 600,400 L 800,200" stroke="red" fill="none"></path>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.line {
  /* stroke-dasharray: 1200; */
  /* stroke-dashoffset: 1200; */
  /* animation: offset 2s linear infinite; */
}

@keyframes offset {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
