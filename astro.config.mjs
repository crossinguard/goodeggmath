import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://goodeggmath.com/',
  integrations: [starlight({
    title: 'good egg',
    logo: {
      light: './src/assets/logo-sm.svg',
      dark: './src/assets/logo-light-sm.svg',
      replacesTitle: true,
    },
    social: {
      github: 'https://github.com/crossinguard'
    },
    customCss: [
      // Relative path to your custom CSS file
      './src/styles/custom.css',
    ],
    sidebar: [{
      label: 'Getting Started',
      link: '/getting-started/',
    }, {
      label: 'Learn',
      autogenerate: {
        directory: 'learn'
      }
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }, {
      label: 'About',
      link: '/about/',
    }]
  })]
});