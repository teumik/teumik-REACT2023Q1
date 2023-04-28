import express from 'express';
import path from 'path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 6969;

const ansi = {
  space: () => ' ',
  newLine: () => '\n',
  bold: (string: string) => `\x1b[1m${string}\x1b[22m`,
  cyan: (string: string) => `\x1b[36m${string}\x1b[0m`,
  underline: (string: string) => `\x1b[4m${string}\x1b[24m`,
};

const info: string[] = [
  ansi.newLine(),
  ansi.bold('Local:'),
  ansi.space(),
  ansi.underline(ansi.cyan(`http://127.0.0.1:${port}`)),
  ansi.newLine(),
];

const print = (string: string): void => {
  process.stdout.write(string);
};

async function startServer() {
  const app = express();

  const vite = await createViteServer({
    server: {
      middlewareMode: true,
    },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const file = await fs.readFile(path.resolve(dirname, '../index.html'), 'utf-8');
      const html = await vite.transformIndexHtml(url, file);

      const [beforeOutlet, afterOutlet] = html.split('<!--ssr-outlet-->');
      res.write(beforeOutlet);

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      const stream = render(url, {
        onShellReady() {
          stream.pipe(res);
        },
        onShellError(error: Error) {
          res.status(500);
          res.setHeader('content-type', 'text/html');
          res.send(`<h1>${error.message}</h1>`);
        },
        onAllReady() {
          res.write(afterOutlet);
          res.end();
        },
        onError(error: Error) {
          print(String(error));
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        vite.ssrFixStacktrace(error);
      }
      next(error);
    }
  });

  app.listen(port, () => {
    print(info.join(''));
  });
}

startServer();
