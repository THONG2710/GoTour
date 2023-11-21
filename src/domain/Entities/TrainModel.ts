interface TrainModel {
    _id: string;
    from: string;
    to: string;
    price: number;
    departureTime: string;
    endTime: string;
    isOneWayTicket: boolean;
}

export = TrainModel;