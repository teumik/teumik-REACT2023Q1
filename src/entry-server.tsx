import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StrictMode } from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';

const render = (url: string, streamOptions: RenderToPipeableStreamOptions) =>
  renderToPipeableStream(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
    streamOptions
  );

export { render };
