import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import {  UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { Evaluacion } from './entities/evaluacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EvaluacionService {

  private readonly logger = new Logger('EvaluacionService');

  constructor(
    @InjectRepository(Evaluacion)
    private readonly evaluacionRepository: Repository<Evaluacion>,

    ){}


  async create(createEvaluacionDto: CreateEvaluacionDto) {
    try {
      const evaluacion =  this.evaluacionRepository.create(createEvaluacionDto);
      await this.evaluacionRepository.save(evaluacion);

      return evaluacion;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }

  }

  findAll() {
    return this.evaluacionRepository.find({});

  }

  async findOne(id: string) {
    const evaluacion= await  this.evaluacionRepository.findOneBy ({ id });
    if (!evaluacion)
      throw new NotFoundException(`evaluacion ${id} no encontrado`);
    return evaluacion;

  }

  async update(id: string, updateEvaluacionDto: UpdateEvaluacionDto) {
    const evaluacion = await this.evaluacionRepository.preload({
      id: id,
      ...updateEvaluacionDto
    });
    if (!evaluacion) throw new NotFoundException(`evaluacion ${id} no encontrado`)

    try {
      await  this.evaluacionRepository.save(evaluacion)
      return evaluacion;

    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const evaluacion = await this.findOne(id);
    await this.evaluacionRepository.remove(evaluacion);

  }
}
