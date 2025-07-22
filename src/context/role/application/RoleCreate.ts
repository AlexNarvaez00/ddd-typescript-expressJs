import { PermissionNotFoundError } from '../../permission/domain/error/PermissionNotFoundError'
import { PermissionRepository } from '../../permission/domain/PermissionRepository'
import { Criteria } from '../../shared/domain/criteria/Criteria'
import { Filters } from '../../shared/domain/criteria/Filters'
import { Operators } from '../../shared/domain/criteria/Operators'
import { Order } from '../../shared/domain/criteria/Order'
import { Role } from '../domain/Role'
import { RoleRepository } from '../domain/RoleRepository'

export class RoleCrete {
    constructor(
        private readonly repository: RoleRepository,
        private readonly permissionRepository: PermissionRepository
    ) {}

    public async run(role: Role): Promise<void> {
        const { permissions } = role.toPrimitives()
        await this.ensurePermissionsExist(permissions)
        await this.repository.save(role)
    }

    private async ensurePermissionsExist(
        permissionIds: string[]
    ): Promise<void> {
        const criteria = new Criteria(
            Filters.fromValues([['id', Operators.IN, permissionIds]]),
            Order.none()
        )
        const permissions = await this.permissionRepository.match(criteria)
        const permissionHasFound = permissions.length === 0
        const isSamePermissions = permissionIds.length !== permissions.length

        if (permissionHasFound && isSamePermissions) {
            throw new PermissionNotFoundError(permissionIds.join(','))
        }
    }
}
