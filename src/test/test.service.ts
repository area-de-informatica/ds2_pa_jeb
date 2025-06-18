import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test } from './schemas/test.schema';

@Injectable()
export class TestService {
  constructor(
    @InjectModel(Test.name) private readonly testModel: Model<Test>,
  ) {}

  async create(createTestDto: CreateTestDto): Promise<Test> {
    const test = new this.testModel(createTestDto);
    return test.save();
  }

  async findAll(): Promise<Test[]> {
    return this.testModel.find().exec();
  }

  async findOne(id: string): Promise<Test | null> {
    return this.testModel.findById(id).exec();
  }

  async update(id: string, updateTestDto: UpdateTestDto): Promise<Test | null> {
    return this.testModel.findByIdAndUpdate(id, updateTestDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Test | null> {
    return this.testModel.findByIdAndDelete(id).exec();
  }
}
