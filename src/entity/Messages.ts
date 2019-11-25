import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Messages {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    content: string;

    @Column()
    createdAt: string;

    @Column()
    updateAt: string;
}
