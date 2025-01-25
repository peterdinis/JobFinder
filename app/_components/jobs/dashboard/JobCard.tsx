import { FC } from "react";
import { MapPin, DollarSign, GraduationCap } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  experience: string;
  posted: string;
  description: string;
  tags: string[];
}

interface JobCardProps {
  job: Job;
}

const JobCard: FC<JobCardProps> = ({ job }) => {
  return (
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
  );
};

export default JobCard;
