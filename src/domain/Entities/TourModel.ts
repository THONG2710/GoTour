interface TourModel {
    _id: string;
    tourName: string;
    price: Number;
    departureDay: String;
    endDate: String;
    numberOfDays: Number;
    numberOfNights: Number;
    numberOfReservations: Number;
    schedule: String;
    images: String;
    typeOfTour: string;
    numberOfSeatsBooked: Number;
    note: String;
    favorites: Number;
    departureLocation: String;
    describe: String;
}

export type {TourModel}