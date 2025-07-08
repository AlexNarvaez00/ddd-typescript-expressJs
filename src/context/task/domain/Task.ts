import { Entity } from '../../shared/domain/Entity'
import { Uuid } from '../../shared/domain/value-object/uuid/Uuid'
import { TaskAuthors } from './TaskAuthors'
import { TaskContent } from './TaskContent'
import { TaskPrimitives } from './TaskPrimitives'
import { TaskPriority } from './TaskPriority'
import { TaskProps } from './TaskProps'
import { TaskTitle } from './TaskTitle'

export class Task extends Entity<TaskProps> {
    private constructor({ id, ...props }: TaskProps) {
        super(props, id)
    }

    public get id(): string {
        return this._id.value
    }

    public get title(): string {
        return this.props.title.value
    }

    public get content(): string {
        return this.props.content.value
    }

    public get priority(): number {
        return this.props.priority.value
    }

    public get authors(): string[] {
        return this.props.authors.value
    }

    public static create(props: TaskProps): Task {
        return new Task(props)
    }

    public static fromPrimitives({
        id,
        title,
        content,
        priority,
        authors,
    }: TaskPrimitives): Task {
        return new Task({
            id: id ? new Uuid(id) : Uuid.random(),
            title: new TaskTitle(title),
            content: new TaskContent(content),
            priority: new TaskPriority(priority),
            authors: new TaskAuthors(authors),
        })
    }

    public toPrimitives(): TaskPrimitives {
        return {
            id: this._id.value,
            title: this.title,
            content: this.content,
            priority: this.priority,
            authors: this.authors,
        }
    }
}
