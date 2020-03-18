export class NiFiLibError extends Error {
    public type: string;
    public status: number;
    public component: string;
    public details: string;

    public constructor(message: string, status: number, component?: string) {
        super(message || 'Unknown Nifi Error');
        this.type = this.constructor.name;
        this.details = message;

        Error.captureStackTrace(this, this.constructor);

        this.status = status || 500;
        this.component = component || 'Unknown';
    }
}