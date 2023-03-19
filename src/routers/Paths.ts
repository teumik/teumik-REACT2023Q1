class Paths {
  private paths: Map<string, string>;
  readonly serverUrl: string;

  constructor() {
    this.paths = new Map([
      ['/', 'Home'],
      ['/about', 'About Us'],
    ]);
    // this.serverUrl = 'https://fakestoreapi.com/products';
    this.serverUrl = '';
  }

  get = (path: string) => this.paths.get(path) || '';
}

const paths = new Paths();
export { paths };
