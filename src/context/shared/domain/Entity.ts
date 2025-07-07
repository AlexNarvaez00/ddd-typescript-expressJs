import { Uuid } from './value-object/uuid/Uuid'

export class Entity<Props> {
    public readonly _id: Uuid

    constructor(
        protected readonly props: Props,
        id?: Uuid
    ) {
        this._id = id ?? Uuid.random()
    }
}
