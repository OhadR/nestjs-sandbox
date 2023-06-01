import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {

  constructor() {
  }

  public async copyRules(
      fromDomain: string,
      fromCluster: string,
      toDomain: string,
      toCluster: string,
      downloads: boolean,
      merge: boolean,
  ) {
    console.info(`copyRules, from: ${fromDomain}/${fromCluster}, to: ${toDomain}/${toCluster}`);
    let path = downloads ? '' : 'configurations/';


    console.trace('copying...');
    console.debug('done copying.');
  };
}
