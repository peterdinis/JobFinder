"use client"

import { FC, useState } from "react";
import { Search, MapPin, DollarSign, Building2, Clock, Banknote, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { jobs, jobTypes, experienceLevels, salaryRanges } from "./customData";


const JobDashboardLayout: FC = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
    const [selectedSalaryRanges, setSelectedSalaryRanges] = useState<string[]>([]);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === 'all' || job.type.toLowerCase() === selectedType.toLowerCase();
        return matchesSearch && matchesType;
    });

    const toggleExperience = (level: string) => {
        setSelectedExperience(prev =>
            prev.includes(level)
                ? prev.filter(e => e !== level)
                : [...prev, level]
        );
    };

    const toggleSalaryRange = (range: string) => {
        setSelectedSalaryRanges(prev =>
            prev.includes(range)
                ? prev.filter(r => r !== range)
                : [...prev, range]
        );
    };

    const sidebarWidth = isSidebarCollapsed ? 'w-16' : 'w-64';
    const mainContentMargin = isSidebarCollapsed ? 'ml-16' : 'ml-64';

    return (
        <>
            <div className=" bg-gray-50 dark:bg-background">

                <div className="pt-4 flex">
                    {/* Sidebar */}
                    <aside className={`fixed h-[calc(100vh-4rem)] bg-white dark:bg-stone-900 border-r border-gray-200 overflow-y-auto transition-all duration-300 ease-in-out ${sidebarWidth}`}>
                        <button
                            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                            className="absolute -right-3 top-6 bg-white border dark:bg-stone-900 border-gray-200 rounded-full p-1 shadow-md hover:shadow-lg transition-shadow"
                        >
                            {isSidebarCollapsed ? (
                                <ChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-100" />
                            ) : (
                                <ChevronLeft className="h-4 w-4 text-gray-600 dark:text-gray-100" />
                            )}
                        </button>

                        <div className={`space-y-6 p-6 ${isSidebarCollapsed ? 'hidden' : 'block'}`}>
                            {/* Job Type Filter */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-sky-50 mb-3 flex items-center">
                                    <Building2 className="h-4 w-4 mr-2" />
                                    Job Type
                                </h3>
                                <div className="space-y-2">
                                    {jobTypes.map(type => (
                                        <label key={type} className="flex items-center p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">
                                            <input
                                                type="radio"
                                                name="jobType"
                                                value={type.toLowerCase()}
                                                checked={selectedType === type.toLowerCase()}
                                                onChange={(e) => setSelectedType(e.target.value)}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <span className="ml-2 text-sm text-gray-600 dark:text-sky-50">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Experience Level Filter */}
                            <div>
                                <h3 className="text-sm font-semibold dark:text-sky-50 text-gray-900 mb-3 flex items-center">
                                    <GraduationCap className="h-4 w-4 mr-2" />
                                    Experience Level
                                </h3>
                                <div className="space-y-2">
                                    {experienceLevels.map(level => (
                                        <label key={level} className="flex items-center p-2 hover:bg-stone-400 rounded-md cursor-pointer transition-colors">
                                            <input
                                                type="checkbox"
                                                checked={selectedExperience.includes(level)}
                                                onChange={() => toggleExperience(level)}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <span className="ml-2 text-sm text-gray-600 dark:text-sky-50">{level}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Salary Range Filter */}
                            <div>
                                <h3 className="text-sm font-semibold dark:text-sky-50 text-gray-900 mb-3 flex items-center">
                                    <Banknote className="h-4 w-4 mr-2" />
                                    Salary Range
                                </h3>
                                <div className="space-y-2">
                                    {salaryRanges.map(range => (
                                        <label key={range} className="flex items-center p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">
                                            <input
                                                type="checkbox"
                                                checked={selectedSalaryRanges.includes(range)}
                                                onChange={() => toggleSalaryRange(range)}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <span className="ml-2 text-sm text-gray-600 dark:text-sky-50">{range}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Collapsed Sidebar Icons */}
                        {isSidebarCollapsed && (
                            <div className="py-6 space-y-6">
                                <div className="flex justify-center" title="Job Type">
                                    <Building2 className="h-5 w-5 text-gray-600 dark:text-sky-50" />
                                </div>
                                <div className="flex justify-center" title="Experience Level">
                                    <GraduationCap className="h-5 w-5 text-gray-600 dark:text-sky-50" />
                                </div>
                                <div className="flex justify-center" title="Salary Range">
                                    <Banknote className="h-5 w-5 text-gray-600 dark:text-sky-50" />
                                </div>
                            </div>
                        )}
                    </aside>

                    {/* Main Content */}
                    <main className={`${mainContentMargin} flex-1 p-8 transition-all duration-300 ease-in-out`}>
                        {/* Search Section */}
                        <div className="mb-8">
                            <div className="relative max-w-3xl mx-auto">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="Search jobs, companies, or keywords..."
                                    className="w-full pl-10 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-background bg-white shadow-sm hover:shadow-md transition-shadow"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Results Summary */}
                        <div className="flex justify-between items-center mb-6 bg-white dark:bg-stone-900 p-4 rounded-lg shadow-sm">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-sky-50">
                                {filteredJobs.length} jobs found
                            </h2>
                            <div className="flex items-center text-sm text-gray-500 dark:text-sky-50 dark:bg-stone-900 bg-gray-50 px-3 py-1.5 rounded-full">
                                <Clock className="h-4 w-4 mr-1.5" />
                                <span>Updated 5 minutes ago</span>
                            </div>
                        </div>

                        {/* Job List */}
                        <div className="space-y-4">
                            {filteredJobs.map(job => (
                                <div key={job.id} className="bg-white dark:bg-background rounded-xl shadow-sm border border-gray-200 dark:border-zinc-900 p-6 hover:shadow-md transition-all duration-200 group">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-900 dark:text-sky-50 group-hover:text-blue-600 transition-colors">
                                                {job.title}
                                            </h2>
                                            <p className="text-gray-600 mt-1 group-hover:text-gray-900 dark:text-sky-50 transition-colors">{job.company}</p>
                                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                                <div className="flex items-center bg-gray-50 px-2.5 py-1 rounded-full">
                                                    <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                                                    {job.location}
                                                </div>
                                                <div className="flex items-center bg-gray-50 px-2.5 py-1 rounded-full">
                                                    <DollarSign className="h-4 w-4 mr-1 text-gray-400" />
                                                    {job.salary}
                                                </div>
                                                <div className="flex items-center bg-gray-50 px-2.5 py-1 rounded-full">
                                                    <GraduationCap className="h-4 w-4 mr-1 text-gray-400" />
                                                    {job.experience}
                                                </div>
                                                <span className="text-gray-400">•</span>
                                                <span className="text-gray-500">{job.posted}</span>
                                            </div>
                                        </div>
                                        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md">
                                            Apply Now
                                        </button>
                                    </div>
                                    <p className="mt-4 text-gray-600 dark:text-sky-50 line-clamp-2">{job.description}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {job.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default JobDashboardLayout