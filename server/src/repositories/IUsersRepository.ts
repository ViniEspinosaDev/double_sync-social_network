import { DIResult } from "../entities/DIResult";
import { User } from "../entities/Users";

export interface IUsersRepository {
    findByEmail(email: string): Promise<Boolean>;
    getUserByEmail(email: string): Promise<User>;
    getUserById(id: string): Promise<User>;
    getUserByPassword(email: string, password: string): Promise<User>;
    save(user: User): Promise<DIResult>;
    update(user: User): Promise<DIResult>;
}