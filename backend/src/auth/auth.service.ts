import { Injectable } from '@nestjs/common';
import { CreateAuthDto, SignInDTO } from './dto/sign-in.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  signIn(signInDTO: SignInDTO) {
    return 'This action adds a new auth';
  }
}
