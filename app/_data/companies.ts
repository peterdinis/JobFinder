import { Company } from "../_types/companyTypes"

export const companies: Company[] = [
  {
    id: 1,
    name: "TechCorp Solutions",
    logo: "/placeholder.svg?height=100&width=100",
    location: "San Francisco, CA",
    industry: "Technology",
    size: "1000-5000 employees",
    openPositions: 12,
    description:
      "Leading provider of enterprise software solutions with a focus on cloud computing and digital transformation. We help businesses modernize their infrastructure.",
    featured: true,
    benefits: ["Remote Work", "Health Insurance", "401k Match", "Unlimited PTO"],
    stats: {
      employees: 3500,
      founded: 2010,
      raised: "$250M",
      rating: 4.8,
    },
    techStack: ["React", "Node.js", "AWS", "Python"],
  },
  {
    id: 2,
    name: "InnovateLabs",
    logo: "/placeholder.svg?height=100&width=100",
    location: "New York, NY",
    industry: "AI & Machine Learning",
    size: "500-1000 employees",
    openPositions: 8,
    description:
      "Pioneering AI solutions for tomorrow's challenges. Our team is dedicated to pushing the boundaries of what's possible with artificial intelligence.",
    featured: true,
    benefits: ["Flexible Hours", "Stock Options", "Learning Budget", "Gym Membership"],
    stats: {
      employees: 750,
      founded: 2015,
      raised: "$120M",
      rating: 4.6,
    },
    techStack: ["Python", "TensorFlow", "PyTorch", "Kubernetes"],
  },
  {
    id: 3,
    name: "GreenEnergy Co",
    logo: "/placeholder.svg?height=100&width=100",
    location: "Austin, TX",
    industry: "Renewable Energy",
    size: "100-500 employees",
    openPositions: 5,
    description:
      "Sustainable energy solutions for a better future. We're revolutionizing how the world thinks about and uses energy.",
    benefits: ["Healthcare", "Company Equity", "Paid Parental Leave"],
    stats: {
      employees: 320,
      founded: 2018,
      raised: "$75M",
      rating: 4.4,
    },
    techStack: ["React", "Python", "IoT", "Data Science"],
  },
  {
    id: 4,
    name: "HealthTech Inc",
    logo: "/placeholder.svg?height=100&width=100",
    location: "Boston, MA",
    industry: "Healthcare",
    size: "1000+ employees",
    openPositions: 15,
    description:
      "Innovative healthcare technology solutions that improve patient outcomes and streamline medical processes.",
    featured: true,
    benefits: ["Medical Coverage", "Life Insurance", "Annual Bonus", "Remote Work"],
    stats: {
      employees: 1200,
      founded: 2012,
      raised: "$180M",
      rating: 4.7,
    },
    techStack: ["Java", "React", "AWS", "MongoDB"],
  },
]

export const industries = Array.from(new Set(companies.map((company) => company.industry)))
