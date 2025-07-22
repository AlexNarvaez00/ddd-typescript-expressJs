import { BaseRepository } from '../../shared/domain/BaseRepository'
import { Role } from './Role'

export interface RoleRepository extends BaseRepository<Role> {
    save(role: Role): Promise<void>
}
