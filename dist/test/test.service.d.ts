import { Model } from 'mongoose';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test } from './schemas/test.schema';
export declare class TestService {
    private readonly testModel;
    constructor(testModel: Model<Test>);
    create(createTestDto: CreateTestDto): Promise<Test>;
    findAll(): Promise<Test[]>;
    findOne(id: string): Promise<Test | null>;
    update(id: string, updateTestDto: UpdateTestDto): Promise<Test | null>;
    remove(id: string): Promise<Test | null>;
}
