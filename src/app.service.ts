import { Injectable } from '@nestjs/common';
import Logger from './logger'
const logger = Logger.getLogger('app-service')

function sleep(secs) {
  console.debug(`sleeping for ${secs} secs... `)
  return new Promise(resolve => setTimeout(resolve, secs * 1000));
}

@Injectable()
export class AppService {

  constructor() {
  }

  public async copyRules(
      fromDomain: string,
      fromCluster: string,
      toDomain: string,
      toCluster: string,
  ) {
    logger.info(`copyRules, from: ${fromDomain}/${fromCluster}, to: ${toDomain}/${toCluster}`);

    //do something heavy:
    await sleep(45);

    logger.debug('done.');
  };
}
