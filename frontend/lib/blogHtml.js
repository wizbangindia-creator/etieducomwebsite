export const hasCustomStyles = (html = '') => /<style[\s>]|\sstyle\s*=|<link[^>]+stylesheet/i.test(html);

// Confine pasted <style> blocks to the article so they can't restyle the site header/footer.
export const scopeBlogStyles = (html = '', root = '.blog-custom-html') =>
  html.replace(/<style([^>]*)>([\s\S]*?)<\/style>/gi, (_, attrs, css) =>
    `<style${attrs}>@scope (${root}) {${css.replace(/(^|[\s,{}])(html|body)(?=[\s,{.:#[])/gi, '$1:scope')}}</style>`);
