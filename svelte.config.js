import sveltePreprocess from 'svelte-preprocess'
import postcss from './postcss.config.cjs';

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  css:{
    postcss
  }
}
