import { Criteria } from './criteria/Criteria'

export interface BaseRepository<T> {
    match(criteria: Criteria): Promise<T[]>
}
