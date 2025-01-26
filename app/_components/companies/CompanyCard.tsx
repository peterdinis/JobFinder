import type { Company } from "@/app/_types/companyTypes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Building2,
	Calendar,
	DollarSign,
	MapPin,
	Star,
	Users,
} from "lucide-react";

interface CompanyCardProps {
	company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
	return (
		<Card
			className={`hover:shadow-lg transition-all ${company.featured ? "border-primary" : ""}`}
		>
			<CardHeader className="flex flex-row items-center gap-4">
				<Avatar className="h-16 w-16">
					<AvatarImage src={company.logo} alt={`${company.name} logo`} />
					<AvatarFallback>
						{company.name.slice(0, 2).toUpperCase()}
					</AvatarFallback>
				</Avatar>
				<div className="space-y-1">
					<div className="flex items-center gap-2">
						<CardTitle className="text-xl">{company.name}</CardTitle>
						{company.featured && (
							<Badge variant="default" className="bg-primary">
								Featured
							</Badge>
						)}
					</div>
					<CardDescription className="flex items-center gap-1">
						<MapPin className="h-4 w-4" />
						{company.location}
					</CardDescription>
				</div>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<p className="text-sm text-muted-foreground">{company.description}</p>

					<div className="grid grid-cols-2 gap-4 py-2">
						<div className="flex items-center gap-2">
							<Users className="h-4 w-4 text-muted-foreground" />
							<span className="text-sm">
								{company.stats.employees.toLocaleString()} employees
							</span>
						</div>
						<div className="flex items-center gap-2">
							<Calendar className="h-4 w-4 text-muted-foreground" />
							<span className="text-sm">Founded {company.stats.founded}</span>
						</div>
						<div className="flex items-center gap-2">
							<DollarSign className="h-4 w-4 text-muted-foreground" />
							<span className="text-sm">Raised {company.stats.raised}</span>
						</div>
						<div className="flex items-center gap-2">
							<Star className="h-4 w-4 text-yellow-500" />
							<span className="text-sm">{company.stats.rating} rating</span>
						</div>
					</div>

					<div className="space-y-2">
						<div className="flex flex-wrap gap-2">
							<Badge variant="secondary" className="flex items-center gap-1">
								<Building2 className="h-3 w-3" />
								{company.industry}
							</Badge>
							<Badge variant="secondary" className="flex items-center gap-1">
								<Users className="h-3 w-3" />
								{company.size}
							</Badge>
						</div>

						<div className="flex flex-wrap gap-1">
							{company.techStack.map((tech) => (
								<Badge key={tech} variant="outline" className="text-xs">
									{tech}
								</Badge>
							))}
						</div>
					</div>

					<div className="space-y-2">
						<p className="text-sm font-medium">Benefits & Perks</p>
						<div className="flex flex-wrap gap-2">
							{company.benefits.map((benefit) => (
								<Badge key={benefit} variant="secondary" className="text-xs">
									{benefit}
								</Badge>
							))}
						</div>
					</div>

					<div className="flex items-center justify-between pt-2">
						<p className="text-sm font-medium text-primary">
							{company.openPositions} open positions
						</p>
						<Button variant="outline">View Jobs</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
