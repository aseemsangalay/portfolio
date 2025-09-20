export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  impacts: string[];
  link?: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "TechCorp",
    role: "Senior Software Engineer",
    period: "2022 - Present",
    impacts: [
      "Led development of microservices architecture serving 1M+ daily active users",
      "Reduced API response time by 40% through performance optimization"
    ],
    link: "https://techcorp.com"
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    impacts: [
      "Built and launched MVP from scratch, achieving 10K+ user signups in first quarter",
      "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes"
    ],
    link: "https://startupxyz.com"
  },
  {
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2019 - 2020",
    impacts: [
      "Developed responsive web applications for 15+ clients across various industries",
      "Improved client website performance scores by average 30 points on Lighthouse"
    ]
  }
];
