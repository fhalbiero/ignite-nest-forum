import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { CreateAccountController } from './controllers/create-account.controller';
import { envSchema } from './env';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: env => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ], //imports are used to import other modules
  controllers: [CreateAccountController], //controllers are classes that handle incoming requests and return responses
  providers: [PrismaService], //providers are services that can be injected into other classes like controllers
})
export class AppModule {}
