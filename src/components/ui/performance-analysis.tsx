// PerformanceAnalysis.tsx
import React from 'react';
import { Badge } from './badge';

// Define the type for the performance analysis data
type PerformanceAnalysisItem = {
    name: string;
    overallPerformance: string;
    areasForImprovement: string[];
    achievements: string[];
};




const PerformanceAnalysis= ({performanceAnalysis}: {performanceAnalysis: PerformanceAnalysisItem[]}) => {
    if(performanceAnalysis[0]?.name === "") return null;
    return (
        <div className="p-4 border shadow-md">
            <h1 className="text-xl font-bold mb-6">Performance Analysis</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {performanceAnalysis.map((item, index) => (
                    <div key={index} className="bg-white shadow-md border rounded-lg p-4">
                        <h2 className="text-md font-semibold mb-2">{item.name}</h2>
                        <div className='flex gap-1 items-center'>
                            <h3 className="text-sm font-medium mb-2">Overall Performance: </h3>
                            <Badge variant={"outline"}>{item.overallPerformance}</Badge>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-medium mb-1">Areas for Improvement</h3>
                            <ul className="list-disc list-inside ml-4">
                                {item.areasForImprovement.map((area, idx) => (
                                    <li key={idx} className="text-sm">{area}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-1">Achievements</h3>
                            <ul className="list-disc list-inside ml-4">
                                {item.achievements.map((achievement, idx) => (
                                    <li key={idx} className="text-sm">{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PerformanceAnalysis;
