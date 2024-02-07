import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public urls = {};

  constructor() {}

  getUrl(id: string): string {
    const prev = this.urls[id];
    return prev ? prev : undefined;
  }

  createUrl(id: string, to: string | undefined): string {
    const prev = this.urls[id];
    if (!!prev) {
      return 'already exists';
    } else if (AppService.checkValidUrl(to)) {
      this.urls[id] = to;
      this.syncUrl();
      return 'successful';
    } else return 'invalid url';
  }

  deleteUrl(id: string): string {
    const prev = this.urls[id];
    if (!!prev) {
      delete this.urls[id];
      this.syncUrl();
      return 'successful';
    } else return 'does not exist';
  }

  private syncUrl() {
    // object in memory should sync with file.
  }

  private static checkValidUrl(url: string) {
    console.log(url); // check if url is valid
    return true;
  }
}
