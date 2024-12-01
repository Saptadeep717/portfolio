import { FC } from 'react';
import { CodeBlock } from './CodeBlock';

interface ApiEndpointProps {
  method: 'GET' | 'POST';
  endpoint: string;
  description: string;
  response?: string;
  statusCode?: number;
  statusText?: string;
}

export const ApiEndpoint: FC<ApiEndpointProps> = ({
  method,
  endpoint,
  description,
  response,
  statusCode = 200,
  statusText = 'OK'
}) => {
  const methodColors = {
    GET: 'bg-green-100 text-green-800',
    POST: 'bg-blue-100 text-blue-800'
  };

  const getStatusColor = (code: number) => {
    if (code >= 200 && code < 300) return 'text-green-600 bg-green-50';
    if (code >= 300 && code < 400) return 'text-blue-600 bg-blue-50';
    if (code >= 400 && code < 500) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2 flex-grow">
          <span className={`${methodColors[method]} px-3 py-1 rounded-full text-sm font-medium`}>
            {method}
          </span>
          <code className="text-gray-800 font-mono">{endpoint}</code>
        </div>
        <div className="flex items-center gap-2">
          <span className={`font-mono text-sm ${getStatusColor(statusCode)} px-2 py-1 rounded`}>
            {statusCode}
          </span>
          <span className={`text-sm ${getStatusColor(statusCode)}`}>{statusText}</span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      {response && <CodeBlock code={response} language="json" />}
    </div>
  );
};