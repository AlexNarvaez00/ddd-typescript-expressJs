import { BaseRepository } from '../../shared/domain/BaseRepository'
import { Permission } from './Permission'

export interface PermissionRepository extends BaseRepository<Permission> {
    save(permission: Permission): Promise<void>
}
