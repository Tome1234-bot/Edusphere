"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Calendar,
  DollarSign,
  Users,
  ExternalLink,
  Clock,
  MapPin,
  GraduationCap,
  Briefcase,
  Trophy,
  Target,
  BookOpen,
} from "lucide-react"

export default function ScholarshipsPage() {
  const [activeTab, setActiveTab] = useState("scholarships")
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [amountFilter, setAmountFilter] = useState("all")

  const scholarships = [
    {
      id: 1,
      title: "Tech Innovation Scholarship 2024",
      organization: "Tech Youth Foundation",
      amount: 5000,
      currency: "USD",
      deadline: "2024-03-15",
      category: "Technology",
      level: "Undergraduate",
      applicants: 1247,
      maxApplicants: 2000,
      description: "Supporting young innovators in tech education and project development.",
      requirements: ["GPA 3.5+", "Tech project portfolio", "Essay submission"],
      status: "Active",
      location: "Global",
      type: "Merit-based",
    },
    {
      id: 2,
      title: "Women in STEM Excellence Award",
      organization: "STEM Equality Initiative",
      amount: 3500,
      currency: "USD",
      deadline: "2024-04-20",
      category: "STEM",
      level: "Graduate",
      applicants: 892,
      maxApplicants: 1500,
      description:
        "Empowering women to advance in technology, engineering, and mathematics through educational support.",
      requirements: ["Female applicant", "STEM field of study", "Leadership experience"],
      status: "Active",
      location: "Nigeria",
      type: "Diversity",
    },
    {
      id: 3,
      title: "Future Leaders Scholarship",
      organization: "Leadership Development Corp",
      amount: 2500,
      currency: "USD",
      deadline: "2024-02-28",
      category: "Leadership",
      level: "Undergraduate",
      applicants: 1856,
      maxApplicants: 2000,
      description: "Developing the next generation of leaders through comprehensive educational support.",
      requirements: ["Leadership roles", "Community service", "Academic excellence"],
      status: "Closing Soon",
      location: "Africa",
      type: "Leadership",
    },
  ]

  const internships = [
    {
      id: 1,
      title: "Software Engineering Internship",
      company: "TechCorp Nigeria",
      duration: "3 months",
      stipend: 150000,
      currency: "NGN",
      deadline: "2024-03-01",
      location: "Lagos, Nigeria",
      type: "Remote/Hybrid",
      description: "Join our engineering team to build scalable web applications.",
      requirements: ["React/Node.js experience", "Portfolio projects", "Final year student"],
      status: "Active",
    },
    {
      id: 2,
      title: "Data Science Research Intern",
      company: "Analytics Hub",
      duration: "6 months",
      stipend: 200000,
      currency: "NGN",
      deadline: "2024-03-10",
      location: "Abuja, Nigeria",
      type: "On-site",
      description: "Work on machine learning projects and data analysis for real-world problems.",
      requirements: ["Python/R proficiency", "Statistics background", "Research experience"],
      status: "Active",
    },
  ]

  const competitions = [
    {
      id: 1,
      title: "African Innovation Challenge",
      organizer: "Innovation Africa",
      prize: 10000,
      currency: "USD",
      deadline: "2024-04-15",
      category: "Innovation",
      description: "Showcase innovative solutions to African challenges.",
      requirements: ["Team of 2-4", "Prototype required", "African residence"],
      status: "Active",
    },
    {
      id: 2,
      title: "Coding Championship 2024",
      organizer: "CodeMasters",
      prize: 5000,
      currency: "USD",
      deadline: "2024-03-30",
      category: "Programming",
      description: "Competitive programming contest for university students.",
      requirements: ["University student", "Programming skills", "Individual participation"],
      status: "Active",
    },
  ]

  const grants = [
    {
      id: 1,
      title: "Research Grant for AI Projects",
      organization: "AI Research Foundation",
      amount: 15000,
      currency: "USD",
      deadline: "2024-05-01",
      category: "Research",
      description: "Funding for artificial intelligence research projects.",
      requirements: ["Research proposal", "Faculty supervisor", "Graduate student"],
      status: "Active",
    },
  ]

  const myApplications = [
    {
      id: 1,
      title: "Tech Innovation Scholarship 2024",
      appliedDate: "2024-01-15",
      status: "Under Review",
      deadline: "2024-03-15",
      amount: 5000,
    },
    {
      id: 2,
      title: "Women in STEM Excellence Award",
      appliedDate: "2024-01-10",
      status: "Submitted",
      deadline: "2024-04-20",
      amount: 3500,
    },
  ]

  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch =
      scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scholarship.organization.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      categoryFilter === "all" || scholarship.category.toLowerCase() === categoryFilter.toLowerCase()
    const matchesAmount =
      amountFilter === "all" ||
      (amountFilter === "under-3000" && scholarship.amount < 3000) ||
      (amountFilter === "3000-5000" && scholarship.amount >= 3000 && scholarship.amount <= 5000) ||
      (amountFilter === "over-5000" && scholarship.amount > 5000)

    return matchesSearch && matchesCategory && matchesAmount
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-600"
      case "Closing Soon":
        return "bg-yellow-600"
      case "Closed":
        return "bg-red-600"
      case "Under Review":
        return "bg-blue-600"
      case "Submitted":
        return "bg-purple-600"
      default:
        return "bg-gray-600"
    }
  }

  const getDaysLeft = (deadline: string) => {
    const today = new Date()
    const deadlineDate = new Date(deadline)
    const diffTime = deadlineDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Smart Scholarship Matcher</h1>
          <p className="text-purple-200">
            AI-powered scholarship matching based on your skills, interests, and academic performance. Find funding
            opportunities that match your profile.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Total Scholarships</p>
                  <p className="text-3xl font-bold text-white">847,000</p>
                  <p className="text-green-400 text-xs">Available globally</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Total Internships</p>
                  <p className="text-3xl font-bold text-white">23</p>
                  <p className="text-purple-300 text-xs">Active positions</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Competitions</p>
                  <p className="text-3xl font-bold text-white">12</p>
                  <p className="text-yellow-400 text-xs">Open for entry</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Research Grants</p>
                  <p className="text-3xl font-bold text-white">8</p>
                  <p className="text-purple-300 text-xs">Available now</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white/10 backdrop-blur-lg border-white/20 grid w-full grid-cols-5">
            <TabsTrigger value="scholarships" className="data-[state=active]:bg-purple-600">
              Scholarships
            </TabsTrigger>
            <TabsTrigger value="internships" className="data-[state=active]:bg-purple-600">
              Internships
            </TabsTrigger>
            <TabsTrigger value="competitions" className="data-[state=active]:bg-purple-600">
              Competitions
            </TabsTrigger>
            <TabsTrigger value="grants" className="data-[state=active]:bg-purple-600">
              Grants
            </TabsTrigger>
            <TabsTrigger value="applications" className="data-[state=active]:bg-purple-600">
              My Applications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scholarships" className="space-y-6">
            {/* Filters */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search scholarships..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
                    />
                  </div>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="stem">STEM</SelectItem>
                      <SelectItem value="leadership">Leadership</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={amountFilter} onValueChange={setAmountFilter}>
                    <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Amount" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Amounts</SelectItem>
                      <SelectItem value="under-3000">Under $3,000</SelectItem>
                      <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                      <SelectItem value="over-5000">Over $5,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Scholarships Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredScholarships.map((scholarship) => (
                <Card key={scholarship.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg mb-2">{scholarship.title}</CardTitle>
                        <CardDescription className="text-purple-200">{scholarship.organization}</CardDescription>
                      </div>
                      <Badge className={`${getStatusColor(scholarship.status)} text-white`}>{scholarship.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-200 text-sm">{scholarship.description}</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-400" />
                        <span className="text-white font-bold">${scholarship.amount.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="text-purple-200 text-sm">{getDaysLeft(scholarship.deadline)} days left</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-200 text-sm">{scholarship.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-yellow-400" />
                        <span className="text-purple-200 text-sm">{scholarship.applicants} applicants</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-purple-200 text-sm mb-2">Application Progress</p>
                      <Progress value={(scholarship.applicants / scholarship.maxApplicants) * 100} className="h-2" />
                      <p className="text-purple-300 text-xs mt-1">
                        {scholarship.applicants} / {scholarship.maxApplicants} applications
                      </p>
                    </div>

                    <div>
                      <p className="text-purple-200 text-sm mb-2">Requirements:</p>
                      <div className="flex flex-wrap gap-1">
                        {scholarship.requirements.map((req, index) => (
                          <Badge key={index} variant="outline" className="border-purple-400 text-purple-200 text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-purple-600 hover:bg-purple-700">Apply Now</Button>
                      <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="internships" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {internships.map((internship) => (
                <Card key={internship.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white text-lg">{internship.title}</CardTitle>
                        <CardDescription className="text-purple-200">{internship.company}</CardDescription>
                      </div>
                      <Badge className={`${getStatusColor(internship.status)} text-white`}>{internship.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-200 text-sm">{internship.description}</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-400" />
                        <span className="text-white font-bold">₦{internship.stipend.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-purple-200 text-sm">{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-200 text-sm">{internship.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-yellow-400" />
                        <span className="text-purple-200 text-sm">{internship.type}</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-purple-200 text-sm mb-2">Requirements:</p>
                      <div className="flex flex-wrap gap-1">
                        {internship.requirements.map((req, index) => (
                          <Badge key={index} variant="outline" className="border-purple-400 text-purple-200 text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">Apply for Internship</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="competitions" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {competitions.map((competition) => (
                <Card key={competition.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white text-lg">{competition.title}</CardTitle>
                        <CardDescription className="text-purple-200">{competition.organizer}</CardDescription>
                      </div>
                      <Badge className={`${getStatusColor(competition.status)} text-white`}>{competition.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-200 text-sm">{competition.description}</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-yellow-400" />
                        <span className="text-white font-bold">${competition.prize.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="text-purple-200 text-sm">{getDaysLeft(competition.deadline)} days left</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-purple-200 text-sm mb-2">Requirements:</p>
                      <div className="flex flex-wrap gap-1">
                        {competition.requirements.map((req, index) => (
                          <Badge key={index} variant="outline" className="border-purple-400 text-purple-200 text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Enter Competition</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="grants" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {grants.map((grant) => (
                <Card key={grant.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white text-lg">{grant.title}</CardTitle>
                        <CardDescription className="text-purple-200">{grant.organization}</CardDescription>
                      </div>
                      <Badge className={`${getStatusColor(grant.status)} text-white`}>{grant.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-200 text-sm">{grant.description}</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-400" />
                        <span className="text-white font-bold">${grant.amount.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="text-purple-200 text-sm">{getDaysLeft(grant.deadline)} days left</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-purple-200 text-sm mb-2">Requirements:</p>
                      <div className="flex flex-wrap gap-1">
                        {grant.requirements.map((req, index) => (
                          <Badge key={index} variant="outline" className="border-purple-400 text-purple-200 text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Apply for Grant</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">My Applications</CardTitle>
                <CardDescription className="text-purple-200">
                  Track your scholarship and funding applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myApplications.map((application) => (
                    <div
                      key={application.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div>
                        <h4 className="text-white font-medium">{application.title}</h4>
                        <p className="text-purple-200 text-sm">
                          Applied on {new Date(application.appliedDate).toLocaleDateString()}
                        </p>
                        <p className="text-purple-300 text-xs">
                          Deadline: {new Date(application.deadline).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge className={`${getStatusColor(application.status)} text-white mb-2`}>
                          {application.status}
                        </Badge>
                        <p className="text-green-400 font-bold">${application.amount.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
