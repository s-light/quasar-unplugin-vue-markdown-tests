<template>
    <div class="my-markdown-wrapper">
        <!-- <mdrender></mdrender> -->
        <div class="my-markdown" v-html="contentHTML"></div>
    </div>
</template>

<script setup>
// import { toRaw, h } from "vue";
import { toRaw } from 'vue'
import { shallowRef, ref, watchEffect } from 'vue'

// import MDCode from 'src/components/MDCode.vue'

// import VueMarkdown from "vue-markdown-render";
// this component is based on
// https://github.com/cloudacy/vue-markdown-render/tree/master
// import MarkdownIt from "markdown-it";
import MarkdownIt from 'markdown-it-async'

import MarkdownItPluginCodeAsMDCode from './markdown-it-plugin-code-as-mdcode'

import source from 'src/md_content/code_test.md?raw'
// console.log("source", source);

// ------------------------------------------
// setup markdown-it

const md_options = {
    html: true,
    linkify: true,
    typographer: true,
    eval: false,
}

const md = shallowRef(new MarkdownIt(md_options))

md.value.use(MarkdownItPluginCodeAsMDCode)

const contentHTML = ref('')

watchEffect(async () => {
    contentHTML.value = md.value.render(source)
    console.log('contentHTML.value', toRaw(contentHTML.value))
})

// const mdrender = () => {
//     return h('div', contentHTML.value);
// };
</script>
