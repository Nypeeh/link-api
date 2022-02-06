import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('opportunities')
export class Opportunity {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  title: string

  @Column()
  person_name: string

  @Column()
  value: number

  @Column()
  currency: string

  @Column()
  update_time: string

  @Column()
  status: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
