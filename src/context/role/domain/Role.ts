import { Entity } from '../../shared/domain/Entity'
import { Uuid } from '../../shared/domain/value-object/uuid/Uuid'
import { RoleName } from './RoleName'
import { RolePermissions } from './RolePermissions'
import { RolePrimitives } from './RolePrimitives'
import { RoleProps } from './RoleProps'

export class Role extends Entity<RoleProps> {
    private constructor({ id, ...props }: RoleProps) {
        super(props, id)
    }

    public get id(): string {
        return this._id.value
    }

    public get name(): string {
        return this.props.name.value
    }

    public get permissions(): string[] {
        return this.props.permissions.value
    }

    public addPermission(value: string) {
        const uniqueValues = new Set<string>(this.permissions)
        uniqueValues.add(value)

        this.props.permissions = new RolePermissions(
            Array.from(uniqueValues.values())
        )
    }

    public static fromPrimitives({ id, name, permissions }: RolePrimitives) {
        return new Role({
            id: id ? new Uuid(id) : undefined,
            name: new RoleName(name),
            permissions: new RolePermissions(permissions),
        })
    }

    public toPrimitives(): RolePrimitives {
        return {
            id: this.id,
            name: this.name,
            permissions: this.permissions,
        }
    }
}
