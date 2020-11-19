import { DIResult } from "../entities/DIResult";
import { User } from "../entities/Users";

export interface IUsersRepository {
    findByEmail(email: string): Promise<Boolean>;
    save(user: User): Promise<DIResult>;
    update(user: User): Promise<DIResult>;
}