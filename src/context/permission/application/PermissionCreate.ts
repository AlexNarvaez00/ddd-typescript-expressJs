import { Permission } from '../domain/Permission'
import { PermissionRepository } from '../domain/PermissionRepository'

export class PermissionCreate {
    constructor(private readonly repository: PermissionRepository) {}

    public async run(permission: Permission): Promise<void> {
        await this.repository.save(permission)
    }
}
