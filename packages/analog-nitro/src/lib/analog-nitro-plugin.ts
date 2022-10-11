import { loadEsmModule } from '@angular-devkit/build-angular/src/utils/load-esm';
import { NitroConfig } from 'nitropack';
import { Plugin } from 'vite';

type Options = {
  port: number;
};

export function analogNitro(opts: Options & NitroConfig): Plugin {
  return {
    name: 'nitro-plugin',

    async buildStart() {
      const { createNitro, createDevServer, prepare, build, prerender } =
        await loadEsmModule<typeof import('nitropack')>('nitropack');

      // Development build
      if (opts.dev) {
        const nitroConfig: NitroConfig = {
          preset: 'nitro-dev',
          ...opts,
        };
        const nitro = await createNitro(nitroConfig);
        const server = createDevServer(nitro);
        await server.listen(opts.port);
        await prepare(nitro);
        await build(nitro);
      } else {
        // Production build
        const nitroConfig: NitroConfig = {
          ...opts,
        };
        const nitro = await createNitro(nitroConfig);
        await prepare(nitro);
        await prerender(nitro);
        await build(nitro);
        await nitro.close();
      }
    },
  };
}
