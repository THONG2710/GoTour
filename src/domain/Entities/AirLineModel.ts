interface AirlineModel {
    _id: string;
    from: string;
    to: string;
    time: string;
    airlineCompany: string;
    price: number;
    departureTime: string;
    endTime: string;
    isOneWayTicket: boolean;
}

export = AirlineModel;