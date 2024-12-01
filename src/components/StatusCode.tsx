import { FC } from 'react';

interface StatusCodeProps {
  code: number;
  text: string;
}

export const StatusCode: FC<StatusCodeProps> = ({ code, text }) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="font-mono bg-gray-100 px-2 py-1 rounded">
        {code}
      </span>
      <span className="text-gray-600">{text}</span>
    </div>
  );
};