import { z } from "zod";

// Schema for team workload analysis
const teamWorkloadSchema = z.object({
  name: z.string().describe("The name of the team member"),
  workload: z.number().describe("The workload of the team member, measured in sprint points and priorities"),
  status: z.enum(["high", "medium", "low"]).describe("The workload status of the team member")
}).describe("Schema for analyzing the workload of a team member.");

// Schema for individual updates related to a ticket
const updateSchema = z.object({
  date: z.string().describe("The date when the update was made"),
  update: z.string().describe("The content of the update")
}).describe("Schema for recording updates related to a ticket.");

// Schema for the analysis of repeated updates
const analysisSchema = z.object({
  repeatedPatterns: z.array(z.string()).describe("A list of patterns that are repeated in the updates"),
  missing: z.array(z.string()).describe("A list of elements that are missing from the updates"),
  recommendations: z.array(z.string()).describe("A list of recommendations for improving update practices")
}).describe("Schema for analyzing repeated updates in tickets.");

// Schema for analyzing repeated updates for a ticket
const repeatedUpdatesAnalysisSchema = z.object({
  ticketId: z.string().describe("The ID of the ticket being analyzed"),
  assignee: z.string().describe("The name of the person assigned to the ticket"),
  updates: z.array(updateSchema).describe("A list of updates associated with the ticket"),
  analysis: analysisSchema.describe("The analysis of the updates for this ticket, including repeated patterns, missing elements, and recommendations.")
}).describe("Schema for analyzing repeated updates for each ticket individually(very important)and for each team member");

// Schema for categorizing the diversity of tickets for a team member
const ticketDiversitySchema = z.object({
  name: z.string().describe("The name of the team member"),
  categories: z.array(z.string()).describe("A list of categories of tickets the team member has worked on")
}).describe("Schema for analyzing the diversity of tickets a team member has worked on.");

// Schema for analyzing the performance of a team member
const performanceAnalysisSchema = z.object({
  name: z.string().describe("The name of the team member"),
  overallPerformance: z.string().describe("The overall performance rating of the team member"),
  areasForImprovement: z.array(z.string()).describe("A list of areas where the team member can improve"),
  achievements: z.array(z.string()).describe("A list of notable achievements of the team member")
}).describe("Schema for evaluating the performance of a team member.");

// Overall team analysis schema
const teamAnalysisSchema = z.object({
  teamWorkload: z.array(teamWorkloadSchema).describe("An array of team members with their workload analysis"),
  repeatedUpdatesAnalysis: z.array(repeatedUpdatesAnalysisSchema).describe("An array where each entry provides analysis for the updates of a specific ticket, including repeated patterns and recommendations for improvement."),
  ticketDiversity: z.array(ticketDiversitySchema).describe("An array of team members and the diversity of tickets they have worked on"),
  performanceAnalysis: z.array(performanceAnalysisSchema).describe("An array of team members with their performance analysis"),
  teamRanking: z.array(z.string()).describe("A list of team members ranked by performance")
}).describe("Schema for the overall analysis of the team, including workload, updates, diversity, performance, and ranking.");

export default teamAnalysisSchema;
