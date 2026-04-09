
export class AppError extends Error {
    statusCode: number;

    constructor(message:string, statusCode: number){
        super(message)
            this.statusCode = statusCode;
            this.name = "AppError";
        }
    }

export function handleError(error: unknown): void { //error could be anything string, objec, error, customer error
    if (error instanceof AppError) {
        console.error(`App Error [${error.statusCode}]:${error.message}`);
    } else if (error instanceof Error) { //checking if this is a normal JS eror
        console.error('Generic Error: ${error.message}');
    } else {
        console.error("Uknowen Error")
    }
    }
