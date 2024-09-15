"use client";

import { useState } from "react";
import { experimental_useObject as useObject } from "ai/react";
import { Button } from "@/components/ui/button";

import teamAnalysisSchema from "@/schemas/teamAnalysisSchema";
import TeamAnalysis from "@/components/ui/team-analysis";
type Ticket = {
    ticketId: string
    description: string
    assignee: string
    status: string
    priority: string
    storyPoints: number
    estimatedTime: string
    dailyUpdates: DailyUpdate[]
  }
  type DailyUpdate = {
    date: string
    update: string
  }
  type TicketData = {
    tickets: Ticket[]
  }

export default function TeamAnalysisPage() {
  const [prompt, setPrompt] = useState<TicketData>({
    tickets: [
      {
        "ticketId": "WEBUI-1497",
        "description": "CSP should not allow '*' as source for default-src & script-src",
        "assignee": "Alok Ranjan",
        "status": "In Progress",
        "priority": "High",
        "storyPoints": 5,
        "estimatedTime": "35",
        "dailyUpdates": [
          {
            "date": "2024-09-09",
            "update": "Started investigating CSP policies. Identified areas where '*' is used for default-src and script-src."
          },
          {
            "date": "2024-09-10",
            "update": "Reviewed current CSP settings and documented necessary changes to restrict '*' usage."
          },
          {
            "date": "2024-09-11",
            "update": "Implemented initial changes to CSP configuration. Testing and validation in progress."
          }
        ]
      },
      {
        "ticketId": "WEBUI-1282",
        "description": "Allow Content Security Policy without 'script-src data:'",
        "assignee": "Alok Ranjan",
        "status": "Done",
        "priority": "Medium",
        "storyPoints": 3,
        "estimatedTime": "21",
        "dailyUpdates": [
          {
            "date": "2024-09-05",
            "update": "Reviewed the current Content Security Policy to ensure 'script-src data:' is removed."
          },
          {
            "date": "2024-09-06",
            "update": "Updated CSP configuration to remove 'script-src data:'. Changes deployed and verified."
          }
        ]
      },
      {
        "ticketId": "WEBUI-1498",
        "description": "Restrict object-src to 'none' in CSP",
        "assignee": "Alok Ranjan",
        "status": "In Review",
        "priority": "High",
        "storyPoints": 8,
        "estimatedTime": "56",
        "dailyUpdates": [
          {
            "date": "2024-09-07",
            "update": "Proposed changes to restrict object-src to 'none'. Completed initial implementation."
          },
          {
            "date": "2024-09-08",
            "update": "Testing the impact of object-src restrictions. Addressing any issues identified."
          },
          {
            "date": "2024-09-09",
            "update": "Finalizing review and preparing documentation for the CSP update."
          }
        ]
      },
      {
        "ticketId": "WEBUI-1575",
        "description": "The content of the spreadsheet popup did not load correctly",
        "assignee": "Alok Ranjan",
        "status": "In Progress",
        "priority": "Low",
        "storyPoints": 2,
        "estimatedTime": "14",
        "dailyUpdates": [
          {
            "date": "2024-09-10",
            "update": "Investigated the issue with spreadsheet popup content not loading. Identified potential causes."
          },
          {
            "date": "2024-09-11",
            "update": "Implementing fixes to address the content loading issue. Testing in progress."
          }
        ]
      },
      {
        "ticketId": "WEBUI-1580",
        "description": "CSP code fix for nuxeo live connect addon",
        "assignee": "Alok Ranjan",
        "status": "Done",
        "priority": "Medium",
        "storyPoints": 3,
        "estimatedTime": "21",
        "dailyUpdates": [
          {
            "date": "2024-09-04",
            "update": "Completed the CSP code fix for nuxeo live connect addon. Verified changes and deployed."
          }
        ]
      },
      {
        "ticketId": "WEBUI-1447",
        "description": "How to migrate nuxeo-app code to nuxeo-web-ui 3.x",
        "assignee": "rjain",
        "status": "In Progress",
        "priority": "High",
        "storyPoints": 8,
        "estimatedTime": "56",
        "dailyUpdates": [
          {
            "date": "2024-09-05",
            "update": "Started researching migration steps from nuxeo-app to nuxeo-web-ui 3.x."
          },
          {
            "date": "2024-09-06",
            "update": "Documenting the migration plan and identifying key code changes required."
          },
          {
            "date": "2024-09-07",
            "update": "Beginning implementation of migration steps. Initial code changes underway."
          }
        ]
      },
      {
        "ticketId": "WEBUI-1448",
        "description": "How to migrate custom element to Polymer 3?",
        "assignee": "rjain",
        "status": "Done",
        "priority": "Medium",
        "storyPoints": 5,
        "estimatedTime": "35",
        "dailyUpdates": [
          {
            "date": "2024-09-01",
            "update": "Completed migration of custom elements to Polymer 3. Final testing and validation done."
          }
        ]
      },
      {
        "ticketId": "SUPINT-2413",
        "description": "Analyze customizations in the current integrated PDF library",
        "assignee": "rakesh.kumarsingh@contractors.onbase.com",
        "status": "In Progress",
        "priority": "High",
        "storyPoints": 5,
        "estimatedTime": "35",
        "dailyUpdates": [
          {
            "date": "2024-09-09",
            "update": "Started analyzing customizations in the integrated PDF library. Gathering necessary details."
          },
          {
            "date": "2024-09-10",
            "update": "Ongoing analysis and documentation of customizations. Identifying potential improvements."
          }
        ]
      },
      {
        "ticketId": "NAC-141",
        "description": "Admin console - Single picture renditions generation",
        "assignee": "nsingh@ext.nuxeo.com",
        "status": "None",
        "priority": "High",
        "storyPoints": 5,
        "estimatedTime": "None",
        "dailyUpdates": [
          {
            "date": "2024-09-10",
            "update": "Initiated research for single picture renditions generation. Preparing implementation plan."
          }
        ]
      },
      {
        "ticketId": "NAC-143",
        "description": "Admin console - Folder picture renditions generation",
        "assignee": "rakesh.kumarsingh@contractors.onbase.com",
        "status": "None",
        "priority": "High",
        "storyPoints": 5,
        "estimatedTime": "None",
        "dailyUpdates": [
          {
            "date": "2024-09-11",
            "update": "Planning phase for folder picture renditions generation. Reviewing requirements."
          }
        ]
      },
      {
        "ticketId": "NAC-139",
        "description": "Admin console - NXQL query picture renditions generation",
        "assignee": "rjain",
        "status": "None",
        "priority": "High",
        "storyPoints": 5,
        "estimatedTime": "None",
        "dailyUpdates": [
          {
            "date": "2024-09-12",
            "update": "Preparing for NXQL query picture renditions generation. Drafting implementation approach."
          }
        ]
      },
      {
        "ticketId": "WEBUI-1522",
        "description": "[UNSET-VALUE] SRCCLR-SID-37811 | Unknown",
        "assignee": "Alok Ranjan",
        "status": "None",
        "priority": "Medium",
        "storyPoints": 3,
        "estimatedTime": "None",
        "dailyUpdates": [
          {
            "date": "2024-09-12",
            "update": "Identified as an unknown issue. Researching and clarifying details."
          }
        ]
      },
      {
        "ticketId": "WEBUI-1523",
        "description": "[MARKED] SRCCLR-SID-6274 | Unknown",
        "assignee": "rakesh.kumarsingh@contractors.onbase.com",
        "status": "None",
        "priority": "Medium",
        "storyPoints": 3,
        "estimatedTime": "None",
        "dailyUpdates": [
          {
            "date": "2024-09-11",
            "update": "Analyzing issue details for SRCCLR-SID-6274. Awaiting further information."
          }
        ]
      },
      {
        "ticketId": "WEBUI-1487",
        "description": "Fix memory footprint after using WebUI for a long time",
        "assignee": "rjain",
        "status": "None",
        "priority": "High",
        "storyPoints": 5,
        "estimatedTime": "900",
        "dailyUpdates": [
          {
            "date": "2024-09-09",
            "update": "Started investigating memory footprint issues. Identifying potential causes."
          },
          {
            "date": "2024-09-10",
            "update": "Documenting findings and beginning to develop fixes. Testing memory usage improvements."
          }
        ]
      },
      {
        "ticketId": "SUPINT-2413",
        "description": "Analyze customizations in the current integrated PDF library",
        "assignee": "rakesh.kumarsingh@contractors.onbase.com",
        "status": "In Progress",
        "priority": "High",
        "storyPoints": 5,
        "estimatedTime": "35",
        "dailyUpdates": [
          {
            "date": "2024-09-01",
            "update": "Started reviewing the existing customizations in the integrated PDF library. Noticed some outdated code that might need refactoring."
          },
          {
            "date": "2024-09-04",
            "update": "Completed the initial review of customization points. Drafted a list of modifications required and discussed them with the team."
          },
          {
            "date": "2024-09-08",
            "update": "Made progress on implementing required changes. Encountered some compatibility issues with the current PDF version which I'm addressing now."
          },
          {
            "date": "2024-09-11",
            "update": "Finalized the modifications and reviewed the updated library with QA. Everything is looking good, awaiting final sign-off."
          }
        ]
      },
      {
        "ticketId": "ELEMENTS-1755",
        "description": "Replace the current version of PDF.js with the latest version",
        "assignee": "rakesh.kumarsingh@contractors.onbase.com",
        "status": "None",
        "priority": "Medium",
        "storyPoints": 3,
        "estimatedTime": "None",
        "dailyUpdates": [
          {
            "date": "2024-09-01",
            "update": "Initiated the process to update PDF.js. Downloaded the latest version and reviewed the release notes."
          },
          {
            "date": "2024-09-04",
            "update": "Started integrating the new PDF.js version into the project. Encountered some deprecated features that need adjustment."
          },
          {
            "date": "2024-09-08",
            "update": "Completed the integration of the new PDF.js version. Currently working on resolving compatibility issues and running initial tests."
          },
          {
            "date": "2024-09-11",
            "update": "Finished the update and resolved all identified issues. Final testing is underway, and the update is almost ready for deployment."
          }
        ]
      },
      {
        "ticketId": "WEBUI-1572",
        "description": "Schedule Veracode scan to run in nuxeo-web-ui",
        "assignee": "rakesh.kumarsingh@contractors.onbase.com",
        "status": "None",
        "priority": "Low",
        "storyPoints": 2,
        "estimatedTime": "None",
        "dailyUpdates": [
          {
            "date": "2024-09-01",
            "update": "Started the process to schedule a Veracode scan for nuxeo-web-ui. Set up the basic configuration."
          },
          {
            "date": "2024-09-04",
            "update": "Configured Veracode scan parameters and completed preliminary setup. Awaiting verification of scan schedules."
          },
          {
            "date": "2024-09-08",
            "update": "Scheduled the scan and initiated a test run. Encountered some issues with scan parameters which are being resolved."
          },
          {
            "date": "2024-09-11",
            "update": "Resolved issues with scan configuration and verified successful scan execution. Preparing report based on scan results."
          }
        ]
      },
      {
        "ticketId": "QA-794",
        "description": "Resolving pipeline failure issue",
        "assignee": "Mansa Bajaj",
        "status": "None",
        "priority": "Low",
        "storyPoints": 1,
        "estimatedTime": "None",
        "dailyUpdates": [
          {
            "date": "2024-09-01",
            "update": "Started investigating the pipeline failure issue. Analyzed logs and identified some potential causes."
          },
          {
            "date": "2024-09-04",
            "update": "Found that the pipeline failure was due to outdated dependencies. Updated them and tested the pipeline."
          },
          {
            "date": "2024-09-08",
            "update": "Pipeline is now passing all stages after updating dependencies. Conducted further tests to ensure stability."
          },
          {
            "date": "2024-09-11",
            "update": "Confirmed that the issue is resolved and pipeline is running smoothly. Documented the fix for future reference."
          }
        ]
      },
      {
        "ticketId": "NAC-125",
        "description": "Admin console - Detailed probes status",
        "assignee": "nsingh@ext.nuxeo.com",
        "status": "None",
        "priority": "High",
        "storyPoints": 5,
        "estimatedTime": "None",
        "dailyUpdates": [
          {
            "date": "2024-09-01",
            "update": "Started working on the detailed probes status for the admin console. Reviewed existing documentation and identified gaps."
          },
          {
            "date": "2024-09-04",
            "update": "Updated probes status with additional details. Coordinated with other team members to ensure accuracy."
          },
          {
            "date": "2024-09-08",
            "update": "Continued refining the probes status report. Addressed feedback from initial reviews and incorporated suggestions."
          },
          {
            "date": "2024-09-11",
            "update": "Completed the detailed probes status and presented the final report to stakeholders for approval."
          }
        ]
      },
      {
        "ticketId": "NAC-128",
        "description": "Admin console - Probes status update",
        "assignee": "schoudhury",
        "status": "None",
        "priority": "High",
        "storyPoints": 5,
        "estimatedTime": "None",
        "dailyUpdates": [
          {
            "date": "2024-09-01",
            "update": "Initiated update for probes status in the admin console. Reviewed current status and identified required changes."
          },
          {
            "date": "2024-09-04",
            "update": "Made initial updates to probes status. Encountered some issues with data accuracy which are being addressed."
          },
          {
            "date": "2024-09-08",
            "update": "Implemented additional updates and conducted preliminary tests to ensure correctness."
          },
          {
            "date": "2024-09-11",
            "update": "Finalized the probes status update and prepared for deployment. Awaiting final approval."
          }
        ]
      },
      {
        "ticketId": "NXDOC-2708",
        "description": "Update nuxeo document for adding new property in nuxeo conf file",
        "assignee": "rjain",
        "status": "None",
        "priority": "Medium",
        "storyPoints": 2,
        "estimatedTime": "None",
        "dailyUpdates": [
          {
            "date": "2024-09-01",
            "update": "Started updating the Nuxeo document to include the new property. Reviewed current configurations."
          },
          {
            "date": "2024-09-04",
            "update": "Completed the update to the Nuxeo document. Verified changes with the team."
          },
          {
            "date": "2024-09-08",
            "update": "Finalized updates and prepared documentation for the new property."
          }
        ]
      },
      {
        "ticketId": "NXDOC-2715",
        "description": "Update nuxeo document for adding new property trustedDomain in nuxeo conf file",
        "assignee": "Alok Ranjan",
        "status": "None",
        "priority": "Low",
        "storyPoints": 1,
        "estimatedTime": "None",
        "dailyUpdates": [
          {
            "date": "2024-09-01",
            "update": "Started adding the trustedDomain property to the Nuxeo document. Reviewed existing properties."
          },
          {
            "date": "2024-09-04",
            "update": "Completed the addition of the trustedDomain property. Tested and validated the update."
          }
        ]
      },
      {
        "ticketId": "QA-782",
        "description": "Run Rainforest tests for LTS 2021.59",
        "assignee": "Mansa Bajaj",
        "status": "None",
        "priority": "Low",
        "storyPoints": 1,
        "estimatedTime": "None",
        "dailyUpdates": [
          {
            "date": "2024-09-01",
            "update": "Started running Rainforest tests for LTS 2021.59. Initial setup is complete."
          },
          {
            "date": "2024-09-04",
            "update": "Ran initial test cases and noted some issues. Working on resolving them."
          },
          {
            "date": "2024-09-08",
            "update": "Resolved issues from previous tests and completed additional test cases."
          },
          {
            "date": "2024-09-11",
            "update": "Finalized all test cases and reviewed results. Preparing report for review."
          }
        ]
      },
      {
        "ticketId": "QA-784",
        "description": "Run Rainforest tests for LTS 2023.2",
        "assignee": "Mansa Bajaj",
        "status": "None",
        "priority": "Medium",
        "storyPoints": 3,
        "estimatedTime": "None",
        "dailyUpdates": [
          {
            "date": "2024-09-01",
            "update": "Started running Rainforest tests for LTS 2023.2. Configured the test environment."
          },
          {
            "date": "2024-09-04",
            "update": "Completed initial test cases. Encountered some configuration issues that are being addressed."
          },
          {
            "date": "2024-09-08",
            "update": "Addressed configuration issues and ran additional test cases."
          },
          {
            "date": "2024-09-11",
            "update": "Finalized test results and prepared the report for review."
          }
        ]
      },
      {
        "ticketId": "NAC-987",
        "description": "Update Nuxeo CMS to the latest version",
        "assignee": "Schoudhury",
        "status": "None",
        "priority": "Medium",
        "storyPoints": 3,
        "estimatedTime": "None",
        "dailyUpdates": [
          {
            "date": "2024-09-01",
            "update": "Started updating Nuxeo CMS to the latest version. Downloaded the update and reviewed release notes."
          },
          {
            "date": "2024-09-04",
            "update": "Completed the initial update. Resolved conflicts and began integration testing."
          },
          {
            "date": "2024-09-08",
            "update": "Finished integration testing and began preparing for deployment."
          },
          {
            "date": "2024-09-11",
            "update": "Reviewed final changes and completed deployment preparation. Awaiting deployment approval."
          }
        ]
      }
    ]
  })
  const [analysisData, setAnalysisData] = useState<any>(null);
  const { object, submit, isLoading } = useObject({
    schema: teamAnalysisSchema,
    api: "/api/team-analysis", // Adjusted API path
    initialValue: {
      teamWorkload: [
        {
          name: "",
          workload: 0,
          status: "low" // Default to 'low'
        }
      ],
      repeatedUpdatesAnalysis: [
        {
          ticketId: "",
          assignee: "",
          updates: [
            {
              date: "",
              update: ""
            }
          ],
          analysis: {
            repeatedPatterns: [],
            missing: [],
            recommendations: []
          }
        }
      ],
      ticketDiversity: [
        {
          name: "",
          categories: []
        }
      ],
      performanceAnalysis: [
        {
          name: "",
          overallPerformance: "",
          areasForImprovement: [],
          achievements: []
        }
      ],
      teamRanking: []
    },
  });

  const handleAnalyze = async () => {
    await submit({ prompt });
  };

  return (
    <div className="flex flex-col gap-4">
      <Button 
        disabled={isLoading} 
        onClick={handleAnalyze}
      >
        Analyze Team Data
      </Button>
      {isLoading && <h1>Loading....</h1>}
      <TeamAnalysis teamAnalysisData={object as any}/>
    </div>
  );
}
