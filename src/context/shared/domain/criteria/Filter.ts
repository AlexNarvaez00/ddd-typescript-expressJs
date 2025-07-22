import { Operator } from './Operator'

type Value = string | number | boolean | Date
export type FilterValue = Value | Array<Value>

export class Filter {
    field: string
    operator: Operator
    value: FilterValue

    private constructor(field: string, operator: Operator, value: FilterValue) {
        this.field = field
        this.operator = operator
        this.value = value
    }

    public static fromValues(values: [string, Operator, FilterValue]) {
        const [field, operator, value] = values

        return new Filter(field, operator, value)
    }
}
