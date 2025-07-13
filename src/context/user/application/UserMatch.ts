import { Criteria } from '../../shared/domain/criteria/Criteria'
import { UserRepository } from '../domain/UserRepository'

export class UserMatch {
    constructor(private readonly userRepository: UserRepository) {}

    async run(criteria: Criteria): Promise<void> {
        await this.userRepository.match(criteria)
    }
}
