export type Order = {
	fromDate: Date;
	toDate: Date;
	clientId: number;
	notes: string;
	hasPaid: boolean;
};

export type CarOrder = Order & {
	carId: number;
	totalRentCost: number;
	hasPickedUpCar: boolean;
	hasReturnedCar: boolean;
	hasExtraInsurance: boolean;
};
