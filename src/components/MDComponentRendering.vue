<template>
    <MDContent></MDContent>
</template>

<script setup>
import * as md_obj from 'src/md_content/code_test.md'
const MDContent = md_obj.default

console.log('md_obj', md_obj)
</script>
