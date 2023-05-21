import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import IRepository from './IRepository';
@Injectable()
export default class Repository<T> implements IRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }
  getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  create(item: T | any): Promise<T> {
    return this._repository.create(item);
  }

  update(id: any, item: T | any) {
    return this._repository.findByIdAndUpdate(id, item);
  }
  delete(id: any) {
    return this._repository.deleteOne({ id: id }).exec();
  }
}
