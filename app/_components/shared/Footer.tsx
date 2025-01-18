import { FC } from "react";
import { Briefcase } from "lucide-react";
import Link from "next/link";

const Footer: FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <Briefcase className="h-8 w-8 text-blue-500" />
                            <span className="text-2xl font-bold text-white">JobFinder</span>
                        </div>
                        <p className="text-gray-400">Connecting talent with opportunity. Your next career move starts here.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">For Job Seekers</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Browse Jobs</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Career Resources</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Resume Builder</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Job Alerts</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">For Employers</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Post a Job</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Browse Candidates</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Recruitment Solutions</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Pricing Plans</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li>support@jobfinder.com</li>
                            <li>1-800-Job-Finder</li>
                            <li>123 Career Street</li>
                            <li>San Francisco, CA 94105</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">© 2025 JobFinder. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link>
                            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link>
                            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer