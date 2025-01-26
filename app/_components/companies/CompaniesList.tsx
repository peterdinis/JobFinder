"use client";

import { companies, industries } from "@/app/_data/companies";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Briefcase, Building2, Search, Trophy } from "lucide-react";
import { FC, useState } from "react";
import { CompanyCard } from "./CompanyCard";

const CompaniesList: FC = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedIndustry, setSelectedIndustry] = useState("");

	const filteredCompanies = companies.filter((company) => {
		const matchesSearch =
			company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			company.description.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesIndustry =
			!selectedIndustry || company.industry === selectedIndustry;
		return matchesSearch && matchesIndustry;
	});

	const featuredCompanies = filteredCompanies.filter(
		(company) => company.featured,
	);
	const regularCompanies = filteredCompanies.filter(
		(company) => !company.featured,
	);

	const totalJobs = companies.reduce(
		(acc, company) => acc + company.openPositions,
		0,
	);
	const totalCompanies = companies.length;
	const averageRating = (
		companies.reduce((acc, company) => acc + company.stats.rating, 0) /
		companies.length
	).toFixed(1);

	return (
		<div className="container mx-auto py-8 space-y-8">
			{/* Header Stats */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<Card>
					<CardContent className="flex items-center gap-4 p-6">
						<div className="p-3 bg-primary/10 rounded-full">
							<Briefcase className="h-6 w-6 text-primary" />
						</div>
						<div>
							<p className="text-sm text-muted-foreground">Total Jobs</p>
							<p className="text-2xl font-bold">{totalJobs}</p>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="flex items-center gap-4 p-6">
						<div className="p-3 bg-primary/10 rounded-full">
							<Building2 className="h-6 w-6 text-primary" />
						</div>
						<div>
							<p className="text-sm text-muted-foreground">Companies</p>
							<p className="text-2xl font-bold">{totalCompanies}</p>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="flex items-center gap-4 p-6">
						<div className="p-3 bg-primary/10 rounded-full">
							<Trophy className="h-6 w-6 text-primary" />
						</div>
						<div>
							<p className="text-sm text-muted-foreground">Avg. Rating</p>
							<p className="text-2xl font-bold">{averageRating}</p>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Search and Filters */}
			<div className="flex flex-col md:flex-row gap-4 mb-8">
				<div className="relative flex-1">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					<Input
						placeholder="Search companies..."
						className="pl-9"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>
				<Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
					<SelectTrigger className="w-full md:w-[200px]">
						<SelectValue placeholder="Select Industry" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Industries</SelectItem>
						{industries.map((industry) => (
							<SelectItem key={industry} value={industry}>
								{industry}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			{/* Featured Companies */}
			{featuredCompanies.length > 0 && (
				<div className="space-y-6">
					<h2 className="text-2xl font-bold">Featured Companies</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						{featuredCompanies.map((company) => (
							<CompanyCard key={company.id} company={company} />
						))}
					</div>
				</div>
			)}

			{/* Regular Companies */}
			<div className="space-y-6">
				<h2 className="text-2xl font-bold">All Companies</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{regularCompanies.map((company) => (
						<CompanyCard key={company.id} company={company} />
					))}
				</div>
			</div>

			{filteredCompanies.length === 0 && (
				<div className="text-center py-12">
					<p className="text-lg text-muted-foreground">
						No companies found matching your criteria.
					</p>
				</div>
			)}
		</div>
	);
}

export default CompaniesList