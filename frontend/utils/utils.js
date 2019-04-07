export default {
    makeHtml: content => {
        return { __html: content }
    },
    makeHighLight: (content, keywords) => {
        const contents = content.replace(keywords, `<span class='high-light-span'>${keywords}</span>`)

        return { __html: contents }
    }
}