import { uuid } from 'uuidv4';
import { FriendshipStatusEnum } from '../enums/FriendshipStatusEnum';

export class Friends {
    public readonly id!: string;

    public firstUser_id!: string;
    public secondUser_id!: string;
    public status!: FriendshipStatusEnum;

    constructor(props: Omit<Friends, 'id'>, id: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}