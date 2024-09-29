import { createUserDTO } from '@infra/http/dtos/create';
import { EditUserDTO } from '@infra/http/dtos/edit';
import { UserService } from '@infra/http/services/user.service';
import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Post,
  Put,
  Get,
  Delete,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private supplieService: UserService) {}

  @Post('create')
  async create(@Body() createUserDTO: createUserDTO) {
    const user = await this.supplieService.create(createUserDTO);
    if (user instanceof Error)
      throw new BadRequestException(user.message);

    return { message: 'Produto cadastrado com sucesso!' };
  }

  @Get(':id/find')
  async findUserById(@Param('id') id: string) {
    const user = await this.supplieService.findUserById(id);

    return user;
  }

  @Get('find')
  async findUser() {
    const users = await this.supplieService.findUser();

    return users;
  }

  @Put(':id/edit')
  async edit(@Param('id') id: string, @Body() editUserDTO: EditUserDTO) {
    const user = await this.supplieService.updateUser(id, editUserDTO);

    return user;
  }

  @Delete(':id/delete')
  async delete(@Param('id') id: string) {
    const user = await this.supplieService.deleteUser(id);
    if (user instanceof Error)
      throw new BadRequestException('Erro ao deletar produto!');
    return 'Produto deletado com sucesso!';
  }
}
