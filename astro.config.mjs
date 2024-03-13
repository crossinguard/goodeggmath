import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://goodeggmath.com/',
  integrations: [starlight({
    title: 'good egg',
    // social: {
    //   github: 'https://github.com/withastro/starlight'
    // },
    customCss: [
      // Relative path to your custom CSS file
      './src/styles/custom.css',
    ],
    sidebar: [{
      label: 'Getting Stated',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), db()]
});