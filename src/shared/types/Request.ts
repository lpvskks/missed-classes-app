import { User } from "./User"

export interface Request {
    id: number,
    startedSkipping: string,
    finishedSkipping: string,
    status: ["REJECTED", "ACCEPTED", "PENDING"]
    user: User
}

export type { User }

