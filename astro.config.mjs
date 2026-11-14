// @ts-check
import { defineConfig, envField } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  env: {
    schema: {
      OPENROUTER_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
      }),
      OPENROUTER_MODEL: envField.string({
        context: 'server',
        access: 'public',
        default: 'anthropic/claude-haiku-5.5',
      }),
      PORT: envField.string({
        context: 'server',
        access: 'public',
        default: '4321',
      }),
    },
  },
});