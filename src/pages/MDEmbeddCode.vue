<template>
    <q-page>
        (MDEmbeddCode.vue)
        <mdcontent></mdcontent>
    </q-page>
</template>

<script setup>
const mdcontent = import.meta.glob('src/md_content/code_test.md', { eager: true })

console.log('mdcontent', mdcontent)

// live import..
// https://github.com/vitejs/vite/discussions/4158#discussioncomment-1282397
// render components from a string:
// https://github.com/orgs/vuejs/discussions/11174
// https://stackoverflow.com/a/73839415/574981
// or use render functions
// https://vuejs.org/guide/extras/render-function.html

// import { ref } from 'vue'
// const customTemplate = ref('<h1>Hello World</h1>')
</script>
