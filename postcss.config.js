/**
 * npm i -D postcss-scss postcss-strip-inline-comments postcss-preset-env postcss-nesting postcss-mixins postcss-simple-vars postcss-custom-media
*/

import syntax        from "postcss-scss"
import stripComments from "postcss-strip-inline-comments"
import presets       from "postcss-preset-env"
import nesting       from "postcss-nesting"
import mixins        from "postcss-mixins"
import variables     from "postcss-simple-vars"
import customMedia   from "postcss-custom-media"

export default {
    syntax: syntax,
    plugins: [
        stripComments(),
        presets({ stage: 1 }),
        nesting(),
        mixins(),
        variables(),
        customMedia({ preserve: false, }),
    ],
}