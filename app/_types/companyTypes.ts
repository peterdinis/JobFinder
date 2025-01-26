export interface CompanyStats {
	employees: number;
	founded: number;
	raised: string;
	rating: number;
}

export interface Company {
	id: number;
	name: string;
	logo: string;
	location: string;
	industry: string;
	size: string;
	openPositions: number;
	description: string;
	featured?: boolean;
	benefits: string[];
	stats: CompanyStats;
	techStack: string[];
}
