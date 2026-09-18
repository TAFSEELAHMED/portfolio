export interface ProjectCaseStudy {
  problem: string;
  approach: string;
  technology: string[];
  implementation: string;
  impact: string;
  results: string[];
  challenges: string[];
  architectureSummary: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI / ML' | 'Deep Learning' | 'NLP' | 'Web' | 'Other';
  description: string;
  problemStatement: string;
  solution: string;
  tags: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  caseStudy: ProjectCaseStudy;
  badge?: string;
  accentColor?: string;
}

export interface SkillNode {
  name: string;
  category: string;
  proficiencyNote: string;
  connectedSkills: string[];
  highlight?: boolean;
  description: string;
  level?: number;
}

export type SkillItem = SkillNode;

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  workAreas: string[];
  bulletPoints: string[];
  technologies: string[];
  description?: string;
}

export interface AchievementItem {
  title: string;
  type: 'Hackathon' | 'Workshop' | 'Project' | 'Certification';
  event: string;
  year: string;
  summary: string;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  institutionShort?: string;
  location?: string;
  period: string;
  batch?: string;
  cgpa: string;
  academicStanding?: string;
  coursework: string[];
  highlights: string[];
  keyModules?: {
    category: string;
    topics: string[];
  }[];
  campusDistinctions?: string[];
}

export interface LabExperiment {
  id: string;
  title: string;
  category: 'NLP' | 'Computer Vision' | 'ML Sandbox' | 'UI / Prompting';
  status: 'Active Experiment' | 'Concept' | 'Prototype';
  summary: string;
  interactiveType: 'attention' | 'convolution' | 'embeddings' | 'tokenizer';
}
