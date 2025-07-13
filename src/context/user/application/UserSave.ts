import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'

export class UserSave {
    constructor(private readonly userRepository: UserRepository) {}

    async run(user: User): Promise<void> {
        await this.userRepository.save(user)
    }
}
