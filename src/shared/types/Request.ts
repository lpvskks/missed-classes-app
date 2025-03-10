export interface Request {
    id: number,
    startedSkipping: string,
    finishedSkipping: string,
    status: ["REJECTED", "ACCEPTED", "PENDING"]
    userId: number,
}