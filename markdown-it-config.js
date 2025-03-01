import MarkdownItPluginCodeAsMDCode from './src/components/markdown-it-plugin-code-as-mdcode'

const markdownItSetup = async (md) => {
    console.log('markdownItSetup called.')
    // console.log(`md.renderer`, md.renderer)
    md.use(MarkdownItPluginCodeAsMDCode, {})
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
    markdownItSetup: markdownItSetup,
}

export default markdownItConfig
