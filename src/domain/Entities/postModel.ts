interface postModel {
    _id: string;
    user: String;
    tour: String;
    time: String;
    caption: String;
    images: String;
    favorites: Array<String>;
}

export type {postModel}