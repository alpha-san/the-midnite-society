import { User } from '../users/user';

export class Album {
    _id?: string;
    name: string;
    artists: User[];
    albumImageUrl: string;
    description: string;
    soundcloudUrl: string;
    youtubeUrl: string;
}
