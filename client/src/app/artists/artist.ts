import { Album } from '../albums/album';

export class Artist {
    _id?: string;
    firstName: string;
    lastName: string;
    details: string;
    email: string;
    phone: string;
    artistUrl: string;
    artistName: string;
    soundcloudUrl: string;
    twitterUrl: string;
    facebookUrl: string;
    instagramUrl: string;
    youtubeUrl: string;
    snapchatUrl: string;
    tagLine: string;
    biography: string;
    isAdmin: boolean;
    albums: Array<Album>;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
