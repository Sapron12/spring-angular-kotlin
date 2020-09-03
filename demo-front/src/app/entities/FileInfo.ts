export class FileInfo {
  size: number;
  relativePath: string;

  constructor(relativePath, size) {
    this.size = size;
    this.relativePath = relativePath;
  }
}
