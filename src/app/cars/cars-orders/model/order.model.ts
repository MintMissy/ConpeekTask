export type Order = {
	fromDate: Date;
	toDate: Date;
	clientId: number;
	hasPaid: boolean;
	comment: string;
};

export type CarOrder = Order & {
	carId: number;
	totalRentCost: number;
	hasPickedUpCar: boolean;
	hasReturnedCar: boolean;
	hasExtraInsurance: boolean;
};
