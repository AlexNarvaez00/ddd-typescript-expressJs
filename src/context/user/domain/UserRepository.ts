import { Repository } from '../../shared/domain/Repository'
import { User } from './User'

export interface UserRepository extends Repository<User> {
    save(user: User): Promise<void>
}
