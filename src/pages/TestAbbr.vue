<template>
    <h2>testing Abbreviations</h2>
    <MDAbbr abbrDescription="Hello World">HW</MDAbbr>
    <br />
    <MDAbbr abbrDescription="sky with bright sunshine">sb</MDAbbr>
    <br />
    <MDAbbr :abbrDescription="md_html">UART</MDAbbr>
</template>

<script setup>
import md_raw from 'src/md_content/abbr/UART.md?raw'
console.log('md_raw', md_raw)

import md2html from 'src/components/markdown-it-plugins/markdown-rendering.js'
const md_html = md2html(md_raw)

console.log('md_html', md_html)
</script>

<style>
code {
    background: darkblue;
    color: orchid;
    padding: 0.1em 0.5em;
}
.markdown-body {
    font-size: 1.8em;
}
</style>
