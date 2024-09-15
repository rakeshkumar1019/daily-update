import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"


// Define the type for the workload data
type Workload = {
    name: string;
    workload: number;
    status: 'high' | 'medium' | 'low';
};

// Define a color map for the status
const statusColors: Record<string, string> = {
    high: 'bg-red-500 text-white',
    medium: 'bg-yellow-500 text-black',
    low: 'bg-green-500 text-white',
};


const TeamWorkload = ({teamWorkload}:{teamWorkload: Workload[]}) => {
    if(teamWorkload[0]?.name === "") return null;
    console.log("teamWorkload", teamWorkload)
    const sortedTeamWorkload = [...teamWorkload].sort((a, b) => b.workload - a.workload);
    return (
        <Table className="border rounded-lg shadow-md">
            <TableHeader>
                <TableRow>
                    <TableHead>Team Member</TableHead>
                    <TableHead>Workload Status</TableHead>
                    <TableHead>Workload Time</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    sortedTeamWorkload?.map((team, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{team.name}</TableCell>
                            <TableCell>
                                <Badge variant="outline" className={`${statusColors[team.status]}`}>
                                    {team.status}
                                </Badge>
                            </TableCell>
                            <TableCell>{team.workload}</TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </Table>


    );
};

export default TeamWorkload;
