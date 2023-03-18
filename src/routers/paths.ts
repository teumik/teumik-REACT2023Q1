class Paths {
  private paths: Map<string, string>;
  constructor() {
    this.paths = new Map([
      ['/', 'Home'],
      ['/about', 'About Us'],
    ]);
  }

  get = (path: string) => this.paths.get(path);
}

const paths = new Paths();
export { paths };
