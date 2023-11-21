interface HotelModel {
    _id: string;
    hotelName: string;
    address: string;
    star: number;
    notes: string;
    images: string;
    price: number;
    favorites: number;
    include: Array<string>;
}

export = HotelModel;