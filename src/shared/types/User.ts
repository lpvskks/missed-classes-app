export const enum UserRole {
    DEANERY = "DEANERY",
    TEACHER = "TEACHER",
    STUDENT = "STUDENT",
    USER = "USER",
    ADMIN = "ADMIN"
}

export interface User {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    userRole: UserRole,
    studentGroup: string | null 
}

