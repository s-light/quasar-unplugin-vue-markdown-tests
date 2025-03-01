import MarkdownItPluginCodeAsMDCode from './src/components/markdown-it-plugins/markdown-it-plugin-code-as-mdcode'
import MarkdownItPluginAbbrAsMDAbbr from './src/components/markdown-it-plugins/markdown-it-plugin-abbr-as-mdabbr'

// import { mksAbbrCollection } from "src/content_md/mksAbbr";

const markdownItSetup = async (md) => {
    md.use(MarkdownItPluginCodeAsMDCode, {})
    md.use(MarkdownItPluginAbbrAsMDAbbr, {
    //     // abbreviations: mksAbbrCollection,
    })
    // md.use(LinkAttributes, {
    //     matcher: (link: string) => /^https?:\/\//.test(link),
    //     attrs: {
    //         target: '_blank',
    //         rel: 'noopener',
    //     },
    // });
}

// options see
// https://github.com/unplugin/unplugin-vue-markdown/blob/main/src/types.ts
const markdownItConfig = {
    // wrapperClasses: 'prose prose-sm m-auto text-left',
    // headEnabled: true,
    exposeExcerpt: true,
    transforms: {
        // before: fn,
        // after: fn,
    },
    markdownItSetup: markdownItSetup,
}

export default markdownItConfig
