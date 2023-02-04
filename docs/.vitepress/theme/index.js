import DefaultTheme from 'vitepress/theme';

import Cover from '../components/Cover.vue';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component('Cover', Cover);
  },
};
