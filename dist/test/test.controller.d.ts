import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
export declare class TestController {
    private readonly testService;
    constructor(testService: TestService);
    create(createTestDto: CreateTestDto): Promise<import("./schemas/test.schema").Test>;
    findAll(): Promise<import("./schemas/test.schema").Test[]>;
    findOne(id: string): Promise<import("./schemas/test.schema").Test | null>;
    update(id: string, updateTestDto: UpdateTestDto): Promise<import("./schemas/test.schema").Test | null>;
    remove(id: string): Promise<import("./schemas/test.schema").Test | null>;
}
