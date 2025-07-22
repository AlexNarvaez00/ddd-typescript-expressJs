import { Filters } from './Filters'
import { Order } from './Order'

export class Criteria {
    constructor(
        public readonly filters: Filters,
        public readonly order: Order,
        public readonly skip?: number,
        public readonly limit?: number
    ) {}

    public hasFilters() {
        return this.filters.filters.length > 0
    }
}
