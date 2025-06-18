import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


// Importa tus módulos personalizados
import { UsuariosModule } from './usuarios/usuarios.module';
import { PreguntasModule } from './preguntas/preguntas.module';
import { PaqueteRespuestasModule } from './paquete_respuestas/paquete_respuestas.module';
import { ReporteAiModule } from './reporte_ai/reporte_ai.module';
import { TestModule } from './test/test.module';
import { RespuestasModule } from './respuestas/respuestas.module';


@Module({
  imports: [
    // Carga variables de entorno
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Conexión a MongoDB Atlas usando la variable de entorno DB_URI
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        uri: process.env.DB_URI,
      }),
      inject: [],
    }),

    // Módulos de la aplicación
    UsuariosModule,
    PreguntasModule,
    PaqueteRespuestasModule,
    ReporteAiModule,
    TestModule,
    RespuestasModule,
  ],
})
export class AppModule {}
