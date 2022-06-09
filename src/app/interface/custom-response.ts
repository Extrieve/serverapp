import { Server } from "./server";

export interface CustomResponse {
    timeStamp: Date;
    statusCode: number;
    status: string;
    errorMessage: string;
    successMessage: string;
    developerMessage: string;
    date: { servers?: Server[], server?: Server} // optional
}