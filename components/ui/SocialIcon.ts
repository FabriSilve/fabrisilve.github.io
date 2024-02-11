import {h} from "vue";
import {Icon} from "@iconify/vue";

export default (props, _context) => {
    const {link, title, icon} = props;
    return h('a', {href: link, title, target: "_blank"},
        h(Icon, {icon, class: "text-p_text rounded-md hover:bg-border_sm p-2 transition-all", width: "50"})
    )
}