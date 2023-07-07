import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { Evaluacion } from './entities/evaluacion.entity';
import { Repository } from 'typeorm';
export declare class EvaluacionService {
    private readonly evaluacionRepository;
    private readonly logger;
    constructor(evaluacionRepository: Repository<Evaluacion>);
    create(createEvaluacionDto: CreateEvaluacionDto): Promise<Evaluacion>;
    findAll(): Promise<Evaluacion[]>;
    findOne(id: string): Promise<Evaluacion>;
    update(id: string, updateEvaluacionDto: UpdateEvaluacionDto): Promise<Evaluacion>;
    remove(id: string): Promise<void>;
}
