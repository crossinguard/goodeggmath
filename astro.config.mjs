import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://goodeggmath.com/',
  integrations: [starlight({
    title: 'good egg',
    logo: {
      light: './src/assets/logo-sm.svg',
      dark: './src/assets/logo-light-sm.svg',
      replacesTitle: true
    },
    social: {
      github: 'https://github.com/crossinguard'
    },
    customCss: [
    // Relative path to your custom CSS file
    './src/styles/custom.css'],
    sidebar: [{
      label: 'Getting Started',
      link: '/getting-started/'
    }, {
      label: 'Types of Numbers',
      items: [{
        label: 'Overview',
        link: '/learn/number-types/overview'
      }],
      badge: {
        text: 'under construction'
      }
    }, {
      label: 'Arithmetic Operations',
      items: [{
        label: 'Overview',
        link: '/learn/arithmetic-operations/overview'
      }, {
        label: 'Addition',
        link: '/learn/arithmetic-operations/addition'
      }, {
        label: 'Subtraction',
        link: '/learn/arithmetic-operations/subtraction'
      }, {
        label: 'Multiplication',
        link: '/learn/arithmetic-operations/multiplication'
      }, {
        label: 'Division',
        link: '/learn/arithmetic-operations/division'
      }, {
        label: 'Floor Division',
        link: '/learn/arithmetic-operations/floor-division'
      }, {
        label: 'Modulus',
        link: '/learn/arithmetic-operations/modulus'
      }, {
        label: 'Exponents',
        link: '/learn/arithmetic-operations/exponents'
      }],
      badge: {
        text: 'under construction'
      }
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }, {
      label: 'About',
      link: '/about/'
    }]
  }), icon()]
});