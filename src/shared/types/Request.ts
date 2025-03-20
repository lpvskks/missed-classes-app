import { User } from "./User"

export interface File {
    id: number;
    fileName: string;
    downloadUrl: string;
}

export interface Request {
    id: number,
    startedSkipping: string,
    finishedSkipping: string,
    status: ["REJECTED", "ACCEPTED", "PENDING"]
    user: User,
    files: File[];
}

export type { User }

