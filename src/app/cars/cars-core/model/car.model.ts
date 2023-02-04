export type GearBoxType = "Manual" | "Automatic"

export type CarType = "Small" | "Medium" | "Big" | "Bus"

export type Car = {
	brand: string
	model: string
	engineSize: string;
	color: string;
	gearBoxType: GearBoxType
	carType: CarType
	pricePerDay: number
}