<template>
    <q-page class="">
        <h2>MarkdownRendering</h2>
        <MarkdownRendering></MarkdownRendering>
        <hr />

        <h2>MDComponentRendering</h2>
        <MDComponentRendering />
        <hr />

        <!--
            <h2>GlobImportTest</h2>
            <GlobImportTest/> -->
        <hr />
    </q-page>
</template>

<script setup>
import MDComponentRendering from 'src/components/MDComponentRendering.vue'
import MarkdownRendering from 'src/components/MarkdownRendering.vue'
</script>
