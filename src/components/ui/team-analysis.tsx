import teamAnalysisSchema from "@/schemas/teamAnalysisSchema";
import { z } from "zod";
import TeamWorkload from "./team-workload";
import TeamRanking from "./team-ranking";
import TeamTicketDiversity from "./team-ticket-diversity";
import PerformanceAnalysis from "./performance-analysis";
import RepeatedUpdatesAnalysis from "./repeated-updates-analysis";
export default function TeamAnalysis({ teamAnalysisData }: { teamAnalysisData?: z.infer<typeof teamAnalysisSchema> }) {
    // if (!teamAnalysisData || teamAnalysisData?.teamRanking?.length === 0) return null;
    return (
        <div>
            <div className="flex flex-row gap-4 p-5">
                <div className="flex flex-col gap-5">
                    <TeamWorkload teamWorkload={teamAnalysisData?.teamWorkload || []} />
                    <PerformanceAnalysis performanceAnalysis={teamAnalysisData?.performanceAnalysis || []} />
                </div>

                <div className="flex flex-col gap-5">
                    <TeamRanking teamRanking={teamAnalysisData?.teamRanking || []} />
                    <TeamTicketDiversity ticketDiversity={teamAnalysisData?.ticketDiversity || []} />
                </div>
            </div>
            <div>
                <RepeatedUpdatesAnalysis repeatedUpdatesAnalysis={teamAnalysisData?.repeatedUpdatesAnalysis || []}/>
            </div>
        </div>
    );
}