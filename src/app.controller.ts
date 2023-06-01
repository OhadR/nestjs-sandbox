import {
  Controller,
  Get,
  Post,
  Headers,
  Query, Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth.service';

const AUTH_ERROR = { error: 'AUTH_ERROR' };
const SERVER_ERROR = { error: 'SERVER_ERROR' };

const OTA_PREFIX = 'OTA_Versions/';


@Controller()
export class AppController {

  constructor(private readonly appService: AppService, 
              private readonly authService: AuthService) {
  }


  @Get('/health')
  health(): { status: string } {
    return { status: 'ok' };
  }

  @Get('/api/getUserMeta')
  async getUserMetadata(@Headers() headers) {
    console.info('/api/getUserMeta: token:', this.authService.token)
    //return await this.appService.getUserMetadata(headers);
  }

  @Get('/api/copyRules')
  async copyRulesController(@Req() request, @Query() query) {
    console.trace()
    console.debug(`controller received /api/copyRules`)

    const { fromDomain, fromCluster, toDomain, toCluster, downloads, merge } = query;
    return await this.appService.copyRules(
      fromDomain,
      fromCluster,
      toDomain,
      toCluster,
      downloads === 'true',
      merge === 'true',
    );
  }
}
