"use client"

import { FC, useState } from "react";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import JobCard from "./JobCard";

const jobs = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        salary: "$120k - $150k",
        type: "Full-time",
        experience: "5+ years",
        posted: "2d ago",
        description: "We're looking for an experienced Frontend Developer to join our team...",
        tags: ["React", "TypeScript", "Tailwind"]
    },
    {
        id: 2,
        title: "Product Designer",
        company: "Design Studios",
        location: "Remote",
        salary: "$90k - $120k",
        type: "Full-time",
        experience: "3+ years",
        posted: "1d ago",
        description: "Join our creative team as a Product Designer...",
        tags: ["Figma", "UI/UX", "Design Systems"]
    },
    {
        id: 3,
        title: "Backend Engineer",
        company: "DataFlow Systems",
        location: "New York, NY",
        salary: "$130k - $160k",
        type: "Full-time",
        experience: "4+ years",
        posted: "5d ago",
        description: "Looking for a Backend Engineer to scale our infrastructure...",
        tags: ["Node.js", "PostgreSQL", "AWS"]
    }
];

const JobDashboardLayout: FC = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [selectedType, setSelectedType] = useState("full-time");
    const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
    const [selectedSalaryRanges, setSelectedSalaryRanges] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleExperience = (level: string) => {
        setSelectedExperience(prev => prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]);
    };

    const toggleSalaryRange = (range: string) => {
        setSelectedSalaryRanges(prev => prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]);
    };

    return (
        <div className="flex">
            <Sidebar
                isSidebarCollapsed={isSidebarCollapsed}
                setIsSidebarCollapsed={setIsSidebarCollapsed}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                selectedExperience={selectedExperience}
                toggleExperience={toggleExperience}
                selectedSalaryRanges={selectedSalaryRanges}
                toggleSalaryRange={toggleSalaryRange}
            />
            <div className="flex-1 p-8 ml-64">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs
                        .filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map(job => <JobCard key={job.id} job={job} />)}
                </div>
            </div>
        </div>
    );
};

export default JobDashboardLayout;