export enum TicketStatus {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED'
}

export class Ticket {
    id: number;
    title: string;
    description: string;
    status: TicketStatus;
    createdOn: Date;
    changedOn: Date;
    department: any;
    creator: string;
    asignee: string;
}