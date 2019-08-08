import { Entity, Column } from "typeorm";
import { ElfUser } from "elf-authentication";

@Entity()
export class User extends ElfUser {
	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	age: number;

	password: string;

	/**
	 *
	 */
	constructor(dto: Partial<User> = {}) {
		super(dto);

		this.firstName = dto.firstName;
		this.lastName = dto.lastName;
		this.age = dto.age;
		this.password = dto.password;
	}
}
