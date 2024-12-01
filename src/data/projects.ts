import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "API Gateway Service",
    description: "A high-performance API Gateway built with Node.js and Express, handling rate limiting, caching, and authentication.",
    technologies: ["Node.js", "Express", "Redis", "JWT"],
    githubUrl: "https://github.com/yourusername/api-gateway",
    liveUrl: "https://api-gateway-demo.herokuapp.com"
  },
  {
    id: 2,
    title: "Microservices Architecture",
    description: "A scalable microservices system using Docker and Kubernetes for container orchestration.",
    technologies: ["Docker", "Kubernetes", "gRPC", "MongoDB"],
    githubUrl: "https://github.com/yourusername/microservices-arch",
    liveUrl: "https://micro-services-demo.cloud.com"
  },
  {
    id: 3,
    title: "Real-time Data Pipeline",
    description: "Event-driven data pipeline processing millions of events per second using Apache Kafka.",
    technologies: ["Kafka", "Python", "ElasticSearch", "Kibana"],
    githubUrl: "https://github.com/yourusername/data-pipeline",
    liveUrl: "https://data-pipeline-demo.dev"
  }
];