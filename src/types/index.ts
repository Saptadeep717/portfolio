export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse<T> {
  status: number;
  statusText: string;
  data: T;
}