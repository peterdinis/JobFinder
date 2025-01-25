"use client"

import { FC } from "react";
import { Building2, GraduationCap, Banknote, ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (collapsed: boolean) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedExperience: string[];
  toggleExperience: (level: string) => void;
  selectedSalaryRanges: string[];
  toggleSalaryRange: (range: string) => void;
}

const Sidebar: FC<SidebarProps> = ({
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  selectedType,
  setSelectedType,
  selectedExperience,
  toggleExperience,
  selectedSalaryRanges,
  toggleSalaryRange
}) => {
  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];
  const experienceLevels = ["Entry Level", "1-3 years", "3-5 years", "5+ years"];
  const salaryRanges = ["$0-$50k", "$50k-$100k", "$100k-$150k", "$150k+"];

  return (
    <aside className={`fixed h-[calc(100vh-4rem)] bg-white dark:bg-stone-900 border-r border-gray-200 overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-16' : 'w-64'}`}>
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
    </aside>
  );
};

export default Sidebar;
