export function MarkdownItPluginCodeAsMDCode(md) {
    console.log(`MarkdownItPluginCodeAsMDCode setup..`)

    md.renderer.rules.fence = function (tokens, idx, options, env, slf) {
        console.log(`MarkdownItPluginCodeAsMDCode.fence called`)

        const token = tokens[idx]
        token.tag = 'MDCode'
        token.attrJoin('content', token.content)
        token.attrJoin('codeLanguage', token.info)
        token.attrJoin('include_path', token.meta?.include_path)
        token.attrJoin('codeFilePath', token.meta?.codeFilePath)
        console.log(`tokens[idx]: `, tokens[idx])

        // rendering
        return `<${token.tag} ${slf.renderAttrs(token)}></${token.tag}>`
    }

    console.log(`done.`)
}

export default MarkdownItPluginCodeAsMDCode
