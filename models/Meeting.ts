import { DataTypes } from "sequelize";
import {
	AllowNull,
	AutoIncrement,
	BelongsTo,
	BelongsToMany,
	Column,
	Default,
	ForeignKey,
	HasMany,
	Index,
	PrimaryKey,
	Table,
	Unique,
} from "sequelize-typescript";
import { MeetingStatus, MeetingStatusEnum } from "../types";
import { SequelizeModel } from "../types/SequelizeModel";
import { Participant } from "./Participant";
import { User } from "./User";

@Table
export class Meeting extends SequelizeModel<Meeting> {
	@Index
	@PrimaryKey
	@AutoIncrement
	@Column(DataTypes.INTEGER.UNSIGNED)
	_meetingId!: number;

	@Index
	@AllowNull(false)
	@Unique(true)
	@Default(DataTypes.UUIDV4)
	@Column(DataTypes.STRING(36))
	meetingId!: string;

	@Index
	@ForeignKey(() => User)
	@Column(DataTypes.INTEGER.UNSIGNED)
	createdBy!: number;

	@AllowNull(false)
	@Column(DataTypes.ENUM(...MeetingStatusEnum))
	status!: MeetingStatus;

	@AllowNull(false)
	@Column(DataTypes.DATE)
	scheduledAt!: Date;

	@AllowNull(false)
	@Default(DataTypes.NOW)
	@Column(DataTypes.DATE)
	createdAt!: Date;

	@AllowNull(true)
	@Default(DataTypes.NOW)
	@Column(DataTypes.DATE)
	updatedAt!: Date;

	@BelongsTo(() => User)
	user!: User;

	@HasMany(() => Participant)
	participants!: Participant[];
}
