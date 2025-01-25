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

const experienceLevels = ["Entry Level", "1-3 years", "3-5 years", "5+ years"];
const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];
const salaryRanges = ["$0-$50k", "$50k-$100k", "$100k-$150k", "$150k+"];


export {
    jobTypes,
    jobs,
    experienceLevels,
    salaryRanges
}