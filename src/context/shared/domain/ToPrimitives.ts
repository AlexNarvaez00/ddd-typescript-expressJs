import { ValueObject } from './value-object/ValueObject'

export type ToPrimitives<T> = {
    [key in keyof T]: T[key] extends ValueObject<infer U> ? U : unknown
}
