import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@ApiTags('Роли')
@Controller('roles')
export class RolesController {

    constructor(private rolesService: RolesService) {}

    @ApiOperation({ summary: 'Создать роль' })
    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.rolesService.createRole(dto)
    }

    @ApiOperation({ summary: 'Получить роль по названию' })
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.rolesService.getRoleByValue(value)
    }

    @ApiOperation({ summary: 'Получить все роли' })
    @Get()
    getAll(@Param('value') value: string) {
        return this.rolesService.getAllRoles()
    }

}
