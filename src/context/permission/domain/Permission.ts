import { Entity } from '../../shared/domain/Entity'
import { Uuid } from '../../shared/domain/value-object/uuid/Uuid'
import { PermissionName } from './PermissionName'
import { PermissionPrimitives } from './PermissionPrimitives'
import { PermissionsProps } from './PermissionsProps'

export class Permission extends Entity<PermissionsProps> {
    private constructor({ id, ...props }: PermissionsProps) {
        super(props, id)
    }

    public get id() {
        return this._id.value
    }

    public get name() {
        return this.props.name.value
    }

    public static fromPrimitives({ id, name }: PermissionPrimitives) {
        return new Permission({
            id: id ? new Uuid(id) : undefined,
            name: new PermissionName(name),
        })
    }

    public toPrimitives(): PermissionPrimitives {
        return {
            id: this.id,
            name: this.name,
        }
    }
}
