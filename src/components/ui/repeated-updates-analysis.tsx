'use client';
import { useState } from 'react';
import { Badge } from './badge';

type Update = {
    date: string;
    update: string;
};

type Analysis = {
    repeatedPatterns: string[];
    missing: string[];
    recommendations: string[];
};

type RepeatedUpdatesItem = {
    ticketId: string;
    assignee: string;
    updates: Update[];
    analysis: Analysis;
};

const RepeatedUpdatesAnalysis = ({ repeatedUpdatesAnalysis }: { repeatedUpdatesAnalysis: RepeatedUpdatesItem[] }) => {
    const [selectedAssignee, setSelectedAssignee] = useState<string | null>(null);
    if(repeatedUpdatesAnalysis[0]?.ticketId === "") return null;


    const assignees = Array.from(new Set(repeatedUpdatesAnalysis.map(item => item.assignee)));

    const filteredData = selectedAssignee
        ? repeatedUpdatesAnalysis.filter(item => item.assignee === selectedAssignee)
        : repeatedUpdatesAnalysis;

    if (repeatedUpdatesAnalysis.length === 0) return null;

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Repeated Updates Analysis</h1>

            <div className="mb-4">
                <div className="flex space-x-4 mb-6">
                    {assignees.map((assignee, index) => (
                        <Badge
                            variant={`outline`}
                            key={index}
                            className={`cursor-pointer  ${selectedAssignee === assignee ? 'bg-black text-white' : ""}`}
                            onClick={() => setSelectedAssignee(assignee)}
                        >{assignee}</Badge>

                    ))}

                    <Badge
                        variant={`outline`}
                        className={`cursor-pointer  ${selectedAssignee === null ? 'bg-black text-white' : ""}`}
                        onClick={() => setSelectedAssignee(null)}
                    >ALL</Badge>
                </div>

                <div className="space-y-6">
                    {filteredData.map((item, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-xl font-semibold mb-2">Ticket ID: {item.ticketId}</h2>
                            <p className="text-sm font-medium mb-2">Assignee: <span className="font-normal">{item.assignee}</span></p>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium mb-1">Updates</h3>
                                <ul className="list-disc list-inside ml-4">
                                    {item.updates.map((update, idx) => (
                                        <li key={idx} className="text-sm">
                                            <span className="font-semibold">{update.date}:</span> {update.update}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium mb-1">Analysis</h3>
                                <div className="mb-2">
                                    <h4 className="text-md font-medium mb-1">Repeated Patterns</h4>
                                    <ul className="list-disc list-inside ml-4">
                                        {item.analysis.repeatedPatterns.map((pattern, idx) => (
                                            <li key={idx} className="text-sm">{pattern}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-2">
                                    <h4 className="text-md font-medium mb-1">Missing Information</h4>
                                    <ul className="list-disc list-inside ml-4">
                                        {item.analysis.missing.map((missing, idx) => (
                                            <li key={idx} className="text-sm">{missing}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-md font-medium mb-1">Recommendations</h4>
                                    <ul className="list-disc list-inside ml-4">
                                        {item.analysis.recommendations.map((recommendation, idx) => (
                                            <li key={idx} className="text-sm">{recommendation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RepeatedUpdatesAnalysis;
