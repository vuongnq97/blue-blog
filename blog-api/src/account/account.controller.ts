import { Controller, Get, Query } from '@nestjs/common';
import { AccountService } from './account.service';
import type { AccountProfile } from './account.service';
import { RequiredValuePipe } from '../common/pipes/required-value.pipe';
import {ApiBearerAuth} from "@nestjs/swagger";

@ApiBearerAuth()
@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Get('info')
    getInfo(@Query('id', new RequiredValuePipe('Query parameter "id" is required')) id: string): AccountProfile {
        return this.accountService.getAccountProfile(id);
    }
}
