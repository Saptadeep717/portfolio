import { TypeAnimation } from 'react-type-animation';
import { Terminal } from 'lucide-react';
import { ApiEndpoint } from '../components/ApiEndpoint';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-center gap-4 mb-8">
          <Terminal size={40} className="text-blue-600" />
          <TypeAnimation
            sequence={[
              'Saptadeep Sen',
              2000,

              'Backend Developer',
              2000,
              'Problem Solver',
              2000,
              'API Architect',
              2000,
              'System Design Enthusiast',
              2000,
            ]}
            wrapper="h1"
            className="text-4xl font-bold"
            repeat={Infinity}
          />
        </div>

        <div className="space-y-8">
          <ApiEndpoint
            method="GET"
            endpoint="/api/v1/profile"
            description="Fetch my professional profile"
            response={`{
  "status": 200,
  "statusText": "OK",
  "data"{
    "name": "Saptadeep Sen",
    "role": "Backend Developer",
    "interests": ["API Development","System Architecture","Computer Networks"]
    "tech_stack": ["Node.js", "Express.js", "C++", "MongoDB", "MySQL"]
  }
 
}`}
          />

          <div className="mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Passionate about building scalable backend systems and designing
              robust APIs. Let's collaborate to create something amazing
              together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
