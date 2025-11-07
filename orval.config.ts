import { defineConfig } from 'orval';

export default defineConfig({
  midorisour: {
    input: 'https://api.midorisour.kro.kr/openapi.json',
    output: {
      baseUrl: 'https://api.midorisour.kro.kr',
      target: 'app/api/client.ts',
      schemas: 'app/api/model',
      client: 'fetch',
      clean: true,
    },
  },
});

