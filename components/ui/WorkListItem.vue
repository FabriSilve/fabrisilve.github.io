<template>
  <a
    class="flex flex-col gap-1 sm:flex-row flex-nowrap justify-between items-start sm:gap-6 hover:bg-sky-700"
    :href="link"
    target="_blank"
  >
    <span class="font-theme_bold text-head_text">{{position}}</span>
    <span class="flex-[1_1_auto]"></span>
    <span class="sm:text-right text-sm sm:text-base italic">{{name}}</span>
    <span class="text-sm sm:text-base">{{from}} - {{to}}</span>
  </a>
</template>
<script>
const WorkListItem = {
    setup() {},
    props: ["name", "position", "link", "to", "from"]
}
export default WorkListItem;
</script>