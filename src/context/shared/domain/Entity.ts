import { Uuid } from "./value-object/uuid/Uuid";

export class Entity<Props> {
  public readonly id: Uuid;

  constructor(private readonly props: Props, id?: Uuid) {
    this.id = id ?? Uuid.random();
  }
}
