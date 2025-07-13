import { Criteria } from './criteria/Criteria'

export interface Repository<T> {
    match(criteria: Criteria): Promise<T>
}
