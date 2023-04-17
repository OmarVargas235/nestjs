import { BaseEntity } from "src/config/base.entity";
import { IProject } from "src/interfaces/project.interface";
import { Column, Entity } from "typeorm";

@Entity({ name: 'users' })
export class ProjectsEntity extends BaseEntity implements IProject {

    @Column()
    description: string;
    @Column()
    name: string;
}