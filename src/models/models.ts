export interface Booking {
	grade: string;
	date: any;
	startTime: string;
	endTime: string;
	staff: Staff[];
}

export interface Staff {
	firstName: string;
	lastName: string;
	isAvailable: boolean;
}
