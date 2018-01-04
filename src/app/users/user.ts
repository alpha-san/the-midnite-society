export class User {
    _id?: string;
    firstName: string;
    lastName: string;
    details: string;
    email: string;
    phone: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
