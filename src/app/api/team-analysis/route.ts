import { NextResponse } from "next/server";
import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";

import teamAnalysisSchema from "@/schemas/teamAnalysisSchema";

const modelName = "gpt-4o-2024-08-06";

export async function POST(req: Request) {
  const { prompt } = await req.json();

//   const analysisPrompt = `Given the team's ticket details, analyze the data to produce the following insights: **Team Workload Analysis**—calculate each team member's workload based on ticket priority and story points, and identify those with the highest and lowest workloads. **Repeated Updates Analysis**—detect tickets with updates that lack progress or specificity, detailing repeated elements, missing information, and recommendations for enhancing update quality. **Ticket Diversity**—categorize the types of tickets each team member has worked on, such as R&D, CI/CD, Frontend, Backend, and DevOps. **Performance Analysis**—evaluate each team member's overall performance, noting areas for improvement and significant achievements. **Team Ranking**—rank team members based on their performance, achievements, and contributions during the current sprint.`;

//   const combinedPrompt = `Please analyze the following team data: ${prompt} `;

  const { object } = await generateObject({
    model: openai(modelName, { structuredOutputs: true }),
    schema: teamAnalysisSchema,
    prompt:  JSON.stringify(prompt),
  });

  return NextResponse.json(object);
}
