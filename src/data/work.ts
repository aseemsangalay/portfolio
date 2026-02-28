import { WorkExperience } from "@/types";

export const workExperiences: WorkExperience[] = [
  {
    company: "Wells Fargo",
    role: "Software Engineer",
    period: "2023 - Present",
    impacts: [
      "Designed and delivered enterprise decision-intelligence platform for leadership.",
      "Built metadata & usage telemetry ingestion pipeline under role-based governance.",
      "Implemented multi-dimensional similarity scoring (Jaccard + semantic models) to quantify BI redundancy.",
      "Built role-based React dashboard for executive insights.",
      "Reduced operational effort by **60%**.",
      "**2× Spotlight Award** recognition.",
    ],
  },
  {
    company: "MITACS",
    role: "Research Scholar",
    period: "2022",
    impacts: [
      "Selected for competitive international research program.",
      "Fine-tuned GPT-J for secure C/C++ code generation.",
      "Improved vulnerability-free output by **10%**.",
      "Published at IEEE/ACM FORGE ’24.",
    ],
  },
  {
    company: "FlipIt",
    role: "Software Engineer Intern",
    period: "2021 - 2022",
    impacts: [
      "Built NLP classification pipeline (**+40%** tagging accuracy).",
      "Designed recommender system (**+25%** engagement).",
      "Automated ingestion workflows (**−70%** manual effort).",
    ],
  },
];
