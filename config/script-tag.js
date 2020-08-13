/**
 * 转换成DOM字符串
 */
const cheerio = require('cheerio')

module.exports = (str, tags) => {
    const $ = cheerio.load(str, { decodeEntities: false })

    if (!tags || tags.length === 0) {
        return str
    }

    tags = !Array.isArray(tags) ? [tags] : tags
    let len = tags.length

    while (len--) {
        $(tags[len]).remove()
    }

    return $.html()
}

/**
 * 获取标签中的文本内容
 * @param  {[String]} str e.g '<html><body><h1>header</h1></body><script></script></html>'
 * @param  {[String]} tag e.g 'h1'
 * @return {[String]}     e.g 'header'
 */
exports.fetch = function(str, tag) {
    var $ = cheerio.load(str, {decodeEntities: false});
    if (!tag) return str;

    return $(tag).html();
};