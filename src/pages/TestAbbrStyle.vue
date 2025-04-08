<template>
    <h2>testing Abbreviations Style (MDAbbr)</h2>
    <MDAbbr>
        <template #default>HW</template>
        <template #abbrDescription>"Hello World"</template>
    </MDAbbr>
    <br />
    <MDAbbr>
        <template #default>sb</template>
        <template #abbrDescription>sky with bright sunshine</template>
    </MDAbbr>
    <br />
    <MDAbbr>
        <template #default>sb</template>
        <template #abbrDescription>
            <div v-html="md_html"></div>
        </template>
    </MDAbbr>
</template>

<script setup>
import md_raw from '/src/md_content/abbr/UART.md?raw'
console.log('md_raw', md_raw)

import md2html from '/src/components/markdown-it-plugins/markdown-rendering.js'
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
