export interface ProjectOverview {
  period: string;
  role: string;
  teamComposition: string;
  performance: string;
}
export interface ProjectTextCard {
  cardTitle: string;
  cardContent: string;
}
export interface ProjectOutlineType {
  intro: {
    introText: string;
    features: string[];
  };
  achievements: {
    projects: string[];
    collaboration: string[];
  };
  rolesAndResponsibilities: ProjectTextCard[];
}
export interface ProjectTagCard {
  title: string;
  tags: string[];
  description: string;
}
export interface ProjectRetrospectionType {
  content: ProjectTextCard[];
}
export interface BlogPost extends ProjectTagCard {
  url: string;
}
export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  techStack: string;
  description: string[];
  gradientColor: string;
  image: string;
  projectImages: string[];
  favicon: string;
  githubUrl: string;
  demoUrl: string;
  overview: ProjectOverview;
  outline: ProjectOutlineType;
  skillStack: ProjectTagCard[];
  retrospection: ProjectRetrospectionType[];
  blogPosts: BlogPost[];
}
