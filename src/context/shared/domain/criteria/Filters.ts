import { Filter, FilterValue } from './Filter'
import type { Operator } from './Operator'

export class Filters {
    private constructor(public readonly filters: Filter[]) {}

    public static fromValues(values: [[string, Operator, FilterValue]]) {
        const filters = values.map((filter) => {
            return Filter.fromValues(filter)
        })

        return new Filters(filters)
    }

    public static none() {
        return new Filters([])
    }
}
