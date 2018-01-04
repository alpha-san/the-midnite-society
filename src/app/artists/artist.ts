export class Artist {
    _id?: string;
    firstName: string;
    lastName: string;
    details: string;
    email: string;
    phone: string;
    artistName: string;
    soundcloudUrl: string;
    twitterUrl: string;
    facebookUrl: string;
    instagramUrl: string;
    snapchatUrl: string;
    tagLine: string;
    biography: string;
    isAdmin: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
