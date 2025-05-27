<template>
  <div class="separator">
    <strong>
      <slot />
    </strong>
  </div>
</template>
<style scoped>
.separator {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  text-align: center;
}

.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 3px solid #e3e3e3;
  border-style: groove;
}

.separator:not(:empty)::before {
  margin-right: 1em;
}

.separator:not(:empty)::after {
  margin-left: 1em;
}
</style>
