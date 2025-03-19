<template>
    <MDContent></MDContent>
</template>

<script setup>
import * as md_obj from '/src/md_content/abbr_test.md'
const MDContent = md_obj.default
console.log('md_obj', md_obj)
</script>

<style>
code {
    background: darkblue;
    color: orchid;
    padding: 0.1em 0.5em;
}
.markdown-body {
    font-size:1.8em;
}
</style>
