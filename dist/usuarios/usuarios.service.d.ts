import { Model } from 'mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
export declare class UsuariosService {
    private readonly usuarioModel;
    constructor(usuarioModel: Model<Usuario>);
    create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id: string): Promise<Usuario | null>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario | null>;
    remove(id: string): Promise<Usuario | null>;
}
