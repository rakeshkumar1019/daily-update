'use client'

import { useState, useRef, useMemo } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, GridIcon, ListIcon, TableIcon } from 'lucide-react'

type DailyUpdate = {
  date: string
  update: string
}

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

type TicketData = {
  tickets: Ticket[]
}

const priorityColors = {
  High: 'bg-red-500',
  Medium: 'bg-yellow-500',
  Low: 'bg-green-500',
}

const statusColors = {
  'In Progress': 'bg-blue-500',
  Done: 'bg-green-500',
  'In Review': 'bg-purple-500',
  None: 'bg-gray-500',
}

export default function DailyUpdatesDashboard() {
  const [data, setData] = useState<TicketData>({
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

  const [statusFilter, setStatusFilter] = useState<string>('All')
  const [priorityFilter, setPriorityFilter] = useState<string>('All')
  const [viewType, setViewType] = useState<'grid' | 'list' | 'table' | 'kanban'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortConfig, setSortConfig] = useState<{ key: keyof Ticket; direction: 'asc' | 'desc' } | null>(null)

  const filteredTickets = useMemo(() => {
    return data.tickets.filter(ticket => 
      (statusFilter === 'All' || ticket.status === statusFilter) &&
      (priorityFilter === 'All' || ticket.priority === priorityFilter) &&
      (searchQuery === '' || 
        ticket.ticketId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.assignee.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ).sort((a, b) => {
      if (sortConfig !== null) {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1
        }
      }
      return 0
    })
  }, [data.tickets, statusFilter, priorityFilter, searchQuery, sortConfig])

  const userTickets = useMemo(() => {
    return filteredTickets.reduce((acc, ticket) => {
      if (!acc[ticket.assignee]) {
        acc[ticket.assignee] = []
      }
      acc[ticket.assignee].push(ticket)
      return acc
    }, {} as Record<string, Ticket[]>)
  }, [filteredTickets])

  const userRefs = Object.keys(userTickets).reduce((acc, user) => {
    acc[user] = useRef<HTMLDivElement>(null)
    return acc
  }, {} as Record<string, React.RefObject<HTMLDivElement>>)

  const scrollToUser = (user: string) => {
    userRefs[user].current?.scrollIntoView({ behavior: 'smooth' })
  }

  const renderTicket = (ticket: Ticket) => (
    <Card key={ticket.ticketId} className="mb-4">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{ticket.ticketId}</span>
          <div className="flex gap-2">
            <Badge className={`${priorityColors[ticket.priority as keyof typeof priorityColors]} text-white`}>
              {ticket.priority}
            </Badge>
            <Badge className={`${statusColors[ticket.status as keyof typeof statusColors]} text-white`}>
              {ticket.status}
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-2">{ticket.description}</p>
        <div className="grid grid-cols-2 gap-2 text-sm mb-2">
          <div><strong>Story Points:</strong> {ticket.storyPoints}</div>
          <div><strong>Estimated Time:</strong> {ticket.estimatedTime}</div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <span>View Daily Updates</span>
              <CalendarIcon className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-7xl  overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle className='text-black'>{ticket.ticketId} - Daily Updates</DialogTitle>
            </DialogHeader>
            <ScrollArea className=" w-full rounded-md border p-4">
              {ticket.dailyUpdates.map((update, index) => (
                <Card key={index} className="mb-4 p-4">
                  <CardTitle className="text-sm flex items-center mb-2">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {update.date}
                  </CardTitle>
                  <CardContent className="text-sm">{update.update}</CardContent>
                </Card>
              ))}
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )

  const renderTableView = () => (
    <Table>
      <TableHeader>
        <TableRow>
          {['ticketId', 'description', 'assignee', 'status', 'priority', 'storyPoints', 'estimatedTime'].map((key) => (
            <TableHead key={key} className="cursor-pointer" onClick={() => {
              setSortConfig({
                key: key as keyof Ticket,
                direction: sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
              })
            }}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
              {sortConfig?.key === key && (sortConfig.direction === 'asc' ? ' ▲' : ' ▼')}
            </TableHead>
          ))}
          <TableHead>Latest Update</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredTickets.map(ticket => (
          <TableRow key={ticket.ticketId}>
            <TableCell>{ticket.ticketId}</TableCell>
            <TableCell>{ticket.description}</TableCell>
            <TableCell>{ticket.assignee}</TableCell>
            <TableCell>
              <Badge className={`${statusColors[ticket.status as keyof typeof statusColors]} text-white`}>
                {ticket.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge className={`${priorityColors[ticket.priority as keyof typeof priorityColors]} text-white`}>
                {ticket.priority}
              </Badge>
            </TableCell>
            <TableCell>{ticket.storyPoints}</TableCell>
            <TableCell>{ticket.estimatedTime}</TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link">View Updates</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{ticket.ticketId} - Daily Updates</DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                    {ticket.dailyUpdates.map((update, index) => (
                      <Card key={index} className="mb-4 p-4">
                        <CardTitle className="text-sm flex items-center mb-2">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {update.date}
                        </CardTitle>
                        <CardContent className="text-sm">{update.update}</CardContent>
                      </Card>
                    ))}
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )

  const renderKanbanView = () => {
    const statuses = ['None', 'In Progress', 'In Review', 'Done']
    return (
      <div className="flex gap-4 overflow-x-auto pb-4">
        {statuses.map(status => (
          <div key={status} className="flex-1 min-w-[300px]">
            <h3 className="font-bold mb-2">{status}</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              {filteredTickets.filter(ticket => ticket.status === status).map(renderTicket)}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Daily Updates Dashboard</h1>
      <div className="flex flex-wrap gap-4 mb-6">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Statuses</SelectItem>
            <SelectItem value="In Progress">In Progress</SelectItem>
            <SelectItem value="Done">Done</SelectItem>
            <SelectItem value="In Review">In Review</SelectItem>
            <SelectItem value="None">None</SelectItem>
          </SelectContent>
        </Select>
        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Priorities</SelectItem>
            <SelectItem value="High">High</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Low">Low</SelectItem>
          </SelectContent>
        </Select>
        <Button variant={viewType === 'grid' ? 'default' : 'outline'} onClick={() => setViewType('grid')}>
          <GridIcon className="mr-2" />
          Grid View
        </Button>
        <Button variant={viewType === 'list' ? 'default' : 'outline'} onClick={() => setViewType('list')}>
          <ListIcon className="mr-2" />
          List View
        </Button>
        <Button variant={viewType === 'table' ? 'default' : 'outline'} onClick={() => setViewType('table')}>
          <TableIcon className="mr-2" />
          Table View
        </Button>
        <Button variant={viewType === 'kanban' ? 'default' : 'outline'} onClick={() => setViewType('kanban')}>
          Kanban View
        </Button>
        <div className="flex-grow">
          <Input
            type="text"
            placeholder="Search tickets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(userTickets).map(user => (
          <Badge
            key={user}
            className="cursor-pointer"
            onClick={() => scrollToUser(user)}
          >
            {user.split('@')[0]}
          </Badge>
        ))}
      </div>
      {viewType === 'table' ? (
        renderTableView()
      ) : viewType === 'kanban' ? (
        renderKanbanView()
      ) : (
        <div className="space-y-8">
          {Object.entries(userTickets).map(([user, tickets]) => (
            <div key={user} ref={userRefs[user]}>
              <h2 className="text-2xl font-semibold mb-4">{user}</h2>
              <div className={viewType === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}>
                {tickets.map(renderTicket)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}