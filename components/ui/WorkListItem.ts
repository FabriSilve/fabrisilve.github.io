import { h } from "vue";

export default (props, context) => {
  const { name, position, link, to, from } = props.work;
  return h("a", {
    class: 'flex flex-col gap-1 sm:flex-row flex-nowrap justify-between items-start sm:gap-6 hover:bg-sky-700',
    href: link,
    target: '_blank',
  }, [
    h("span", { class: 'font-theme_bold text-head_text' }, position),
    h("span", { class: 'flex-[1_1_auto]' }),
    h("span", { class: 'sm:text-right text-sm sm:text-base italic' }, name),
    h("span", { class: 'text-sm sm:text-base' }, `${from} - ${to}`),
  ])
}
