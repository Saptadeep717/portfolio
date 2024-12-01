import { ApiEndpoint } from '../components/ApiEndpoint';

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>

        <ApiEndpoint
          method="GET"
          endpoint="/api/v1/about"
          description="Retrieve detailed information about my background and expertise"
          response={`{
  "status": 200,
  "statusText": "OK",
  "data": {
    "background": {
      "degree": "B.E in Electronics and Communication",
      "institution": "Jadavpur University",
      "year": 2024
    },
    "skills": {
      "languages": ["JavaScript", "C++", "Java"],
      "frameworks": ["Node.js","Express.js","Fastify"],
      "databases": ["PostgreSQL", "MongoDB", "MySQL"],
      "cloud": ["AWS"],
      "tools": ["Docker", "Git"]
    },
    "interests": [
      "API Design",
      "System Architecture",
      "Problem Solving"
    ]
  }
 
}`}
        />

        <div className="mt-12 prose prose-lg">
          <p>
            A passionate fresher exploring the vast world of technology. I love
            learning how the internet works, designing APIs, understanding
            system architectures, and diving deep into backend systems. With a
            strong passion for problem-solving and competitive programming, I
            strive to build scalable and efficient solutions while continuously
            growing my knowledge in the field
          </p>
        </div>
      </div>
    </div>
  );
}
