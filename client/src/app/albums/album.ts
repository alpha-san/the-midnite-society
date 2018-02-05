export class Album {
    _id?: string;
    name: string;
    artistId: string;
    albumImageUrl: string;
    description: string;
    soundcloudUrl: string;
    youtubeUrl: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
