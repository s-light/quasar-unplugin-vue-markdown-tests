import { defineBoot } from '#q-app/wrappers'
import MDCode from 'src/components/MDCode.vue'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(async ({ app }) => {
    // https://quasar.dev/app-extensions/tips-and-tricks/provide-a-ui-component/
    console.log('register global components')
    app.component('MDCode', MDCode)
})
