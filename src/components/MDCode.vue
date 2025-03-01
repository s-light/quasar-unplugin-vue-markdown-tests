<template>
    <div class="MDCode">
        <span>'{{ include_path }}'</span>
        <!-- TODO: change span to label -->
        <!-- TODO: or make it clickable to point to source on github... -->
        <VCodeBlock
            :code="content"
            highlightjs
            :label="codeFilePath"
            :lang="codeLanguage"
            :theme="theme"
        ></VCodeBlock>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import VCodeBlock from '@wdns/vue-code-block'

defineProps({
    content: String,
    codeLanguage: String,
    include_path: String,
    codeFilePath: String,
})

const theme = ref('base16/solarized-dark')
const $q = useQuasar()
watch(
    () => $q.dark.isActive,
    (val) => {
        console.log(val ? 'On dark mode' : 'On light mode')
        if (val) {
            // dark
            theme.value = 'base16/solarized-dark'
        } else {
            // light
            theme.value = 'base16/solarized-light'
        }
    },
)
</script>

<style lang="sass" scoped></style>
