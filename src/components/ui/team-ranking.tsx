import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrophyIcon } from 'lucide-react';

const TeamRanking = ({ teamRanking }: { teamRanking: string[] }) => {
    if (teamRanking.length === 0) return null;
  return (
    <Card className="p-4">
      <CardContent>
        <h1 className="font-semibold mb-4 flex items-center">
          <TrophyIcon className="w-6 h-6 text-yellow-500 mr-2" />
          Team Rankings
        </h1>
        <ul className="list-disc list-inside space-y-2">
          {teamRanking.map((member, index) => (
            <li key={index} className="flex items-center">
              <span className="font-medium mr-2">{index + 1}.</span>
              <span>{member}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TeamRanking;
