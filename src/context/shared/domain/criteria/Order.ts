import { OrderType } from './OrderType'

export class Order {
    private constructor(
        public readonly order: OrderType,
        public readonly sortBy: string
    ) {}

    public static none() {
        return new Order('none', '')
    }

    public static fromValues(values: [OrderType, string]) {
        const [order, sortBy] = values

        return new Order(order, sortBy)
    }
}
