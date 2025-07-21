import { BaseRepository } from '../../shared/domain/BaseRepository'
import { User } from './User'

export interface UserRepository extends BaseRepository<User> {
    save(user: User): Promise<void>
}
