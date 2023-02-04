export type Address = {
	street: string;
	houseNumber: string;
	flatNumber: number;
	city: string;
	postCode: string;
}

export type Client = Address & {
	firstName: string;
	lastName: string;
	age: number;
	drivingLicenseId: string;
};
