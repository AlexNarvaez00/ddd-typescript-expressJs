import { Entity } from '../../shared/domain/Entity'
import { Uuid } from '../../shared/domain/value-object/uuid/Uuid'
import { RoleName } from './RoleName'
import { RolePrimitives } from './RolePrimitives'
import { RoleProps } from './RoleProps'

export class Role extends Entity<RoleProps> {
    private constructor({ id, ...props }: RoleProps) {
        super(props, id)
    }

    public get id() {
        return this._id.value
    }

    public get name() {
        return this.props.name.value
    }

    public static fromPrimitives({ id, name }: RolePrimitives) {
        return new Role({
            id: id ? new Uuid(id) : undefined,
            name: new RoleName(name),
        })
    }

    public toPrimitives(): RolePrimitives {
        return {
            id: this.id,
            name: this.name,
        }
    }
}
