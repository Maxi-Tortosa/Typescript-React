export interface Sup {
	nick: string;
	supMonths: number;
	avatar: string;
	description?: string;
}

export type SupsPromise = Array<{
	nick: string;
	months: number;
	profileUrl: string;
	description?: string;
}>;
