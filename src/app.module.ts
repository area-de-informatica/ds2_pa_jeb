import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

// Importación de tus módulos personalizados
import { UsuariosModule } from './usuarios/usuarios.module';
import { PreguntasModule } from './preguntas/preguntas.module';
import { PaqueteRespuestasModule } from './paquete_respuestas/paquete_respuestas.module';
import { ReporteAiModule } from './reporte_ai/reporte_ai.module';
import { TestModule } from './test/test.module';
import { RespuestasModule } from './respuestas/respuestas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        uri: process.env.DB_URI,
      }),
      inject: [],
    }),

    // Aquí se listan tus módulos personalizados
    UsuariosModule,
    PreguntasModule,
    PaqueteRespuestasModule,
    ReporteAiModule,
    TestModule,
    RespuestasModule,
  ],
})
export class AppModule {}
