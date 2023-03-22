class Paths {
  private paths: Map<string, string>;
  readonly serverUrl: string;

  constructor() {
    this.paths = new Map([
      ['/', 'Home'],
      ['/about', 'About Us'],
      ['/forms', 'Forms'],
    ]);
    this.serverUrl =
      'https://raw.githubusercontent.com/teumik/teumik-REACT2023Q1/module01/public/data.json';
  }

  getPath = (path: string) => this.paths.get(path) || '404';

  getDatas = () => [...this.paths.entries()];
}

const paths = new Paths();
export { paths };
