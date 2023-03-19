class Paths {
  private paths: Map<string, string>;
  readonly serverUrl: string;

  constructor() {
    this.paths = new Map([
      ['/', 'Home'],
      ['/about', 'About Us'],
    ]);
    this.serverUrl =
      'https://raw.githubusercontent.com/teumik/teumik-REACT2023Q1/module01/public/data.json';
  }

  get = (path: string) => this.paths.get(path) || '404';
}

const paths = new Paths();
export { paths };
