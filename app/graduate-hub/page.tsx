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
  Users,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Rocket,
  Target,
  MapPin,
  Calendar,
  ExternalLink,
  Star,
  Building,
  Globe,
  DollarSign,
  Clock,
} from "lucide-react"

export default function GraduateHubPage() {
  const [activeTab, setActiveTab] = useState("programs")
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")

  const innovationPrograms = [
    {
      id: 1,
      title: "TechStars Lagos Accelerator",
      description: "3-month intensive program for early-stage tech startups with mentorship and funding opportunities.",
      category: "Accelerator",
      location: "Lagos, Nigeria",
      duration: "3 months",
      funding: "Up to $120,000",
      equity: "6%",
      deadline: "2024-03-15",
      cohortSize: 12,
      successRate: 85,
      status: "Open",
      requirements: ["MVP ready", "Tech startup", "Team of 2-4"],
      benefits: ["Mentorship", "Funding", "Office space", "Demo day"],
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 2,
      title: "Google for Startups Accelerator Africa",
      description: "Equity-free program supporting African startups using AI and machine learning technologies.",
      category: "Accelerator",
      location: "Remote/Hybrid",
      duration: "3 months",
      funding: "Equity-free",
      equity: "0%",
      deadline: "2024-04-01",
      cohortSize: 20,
      successRate: 92,
      status: "Open",
      requirements: ["AI/ML focus", "African startup", "Series A ready"],
      benefits: ["Google Cloud credits", "Mentorship", "Technical support", "Global network"],
      rating: 4.9,
      reviews: 203,
    },
    {
      id: 3,
      title: "Microsoft for Startups Founders Hub",
      description: "Comprehensive support program for early-stage startups with Azure credits and technical resources.",
      category: "Incubator",
      location: "Global",
      duration: "12 months",
      funding: "Azure credits up to $150,000",
      equity: "0%",
      deadline: "Rolling",
      cohortSize: 50,
      successRate: 78,
      status: "Open",
      requirements: ["Early-stage startup", "Tech-enabled business", "Scalable solution"],
      benefits: ["Azure credits", "Technical support", "Go-to-market support", "Partner network"],
      rating: 4.7,
      reviews: 89,
    },
  ]

  const jobOpportunities = [
    {
      id: 1,
      title: "Software Engineer - Full Stack",
      company: "Flutterwave",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₦3,000,000 - ₦5,000,000",
      skills: ["React", "Node.js", "Python", "AWS"],
      posted: "2024-01-10",
      applicants: 45,
      status: "Active",
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Andela",
      location: "Remote",
      type: "Full-time",
      experience: "1-3 years",
      salary: "$60,000 - $80,000",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      posted: "2024-01-12",
      applicants: 67,
      status: "Active",
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Paystack",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₦4,000,000 - ₦6,000,000",
      skills: ["Product Strategy", "Analytics", "User Research", "Agile"],
      posted: "2024-01-08",
      applicants: 89,
      status: "Active",
    },
  ]

  const mentorshipPrograms = [
    {
      id: 1,
      title: "Tech Leaders Mentorship Circle",
      description: "Connect with senior tech executives for career guidance and industry insights.",
      mentors: 25,
      mentees: 100,
      duration: "6 months",
      commitment: "2 hours/month",
      focus: ["Career Development", "Leadership", "Technical Skills"],
      status: "Open",
    },
    {
      id: 2,
      title: "Startup Founders Network",
      description: "Peer mentorship program connecting aspiring and experienced entrepreneurs.",
      mentors: 40,
      mentees: 150,
      duration: "12 months",
      commitment: "4 hours/month",
      focus: ["Entrepreneurship", "Business Strategy", "Fundraising"],
      status: "Open",
    },
  ]

  const networkingEvents = [
    {
      id: 1,
      title: "Lagos Tech Meetup",
      date: "2024-02-15",
      time: "18:00",
      location: "Co-creation Hub, Lagos",
      attendees: 150,
      type: "In-person",
      topics: ["AI", "Fintech", "Networking"],
    },
    {
      id: 2,
      title: "African Startup Summit",
      date: "2024-03-20",
      time: "09:00",
      location: "Virtual",
      attendees: 500,
      type: "Virtual",
      topics: ["Funding", "Scale-up", "Market Expansion"],
    },
  ]

  const hubStats = {
    totalPrograms: innovationPrograms.length,
    totalJobs: 234,
    totalMentors: 65,
    successfulPlacements: 89,
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-600"
      case "Closed":
        return "bg-red-600"
      case "Active":
        return "bg-blue-600"
      default:
        return "bg-gray-600"
    }
  }

  const getDaysLeft = (deadline: string) => {
    if (deadline === "Rolling") return "Rolling"
    const today = new Date()
    const deadlineDate = new Date(deadline)
    const diffTime = deadlineDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return `${diffDays} days left`
  }

  const filteredPrograms = innovationPrograms.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || program.category.toLowerCase() === categoryFilter.toLowerCase()
    const matchesLocation =
      locationFilter === "all" || program.location.toLowerCase().includes(locationFilter.toLowerCase())

    return matchesSearch && matchesCategory && matchesLocation
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Graduate Innovation Hub</h1>
          <p className="text-purple-200">
            Launch your career with accelerator programs, job opportunities, mentorship, and networking events designed
            for ambitious graduates.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Innovation Programs</p>
                  <p className="text-3xl font-bold text-white">{hubStats.totalPrograms}</p>
                  <p className="text-green-400 text-xs">Active accelerators</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Job Opportunities</p>
                  <p className="text-3xl font-bold text-white">{hubStats.totalJobs}</p>
                  <p className="text-purple-300 text-xs">Open positions</p>
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
                  <p className="text-purple-200 text-sm">Mentors Available</p>
                  <p className="text-3xl font-bold text-white">{hubStats.totalMentors}</p>
                  <p className="text-yellow-400 text-xs">Industry experts</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Success Rate</p>
                  <p className="text-3xl font-bold text-white">{hubStats.successfulPlacements}%</p>
                  <p className="text-purple-300 text-xs">Graduate placement</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white/10 backdrop-blur-lg border-white/20 grid w-full grid-cols-5">
            <TabsTrigger value="programs" className="data-[state=active]:bg-purple-600">
              Programs
            </TabsTrigger>
            <TabsTrigger value="jobs" className="data-[state=active]:bg-purple-600">
              Jobs
            </TabsTrigger>
            <TabsTrigger value="mentorship" className="data-[state=active]:bg-purple-600">
              Mentorship
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-purple-600">
              Events
            </TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-purple-600">
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="programs" className="space-y-6">
            {/* Filters */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search programs..."
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
                      <SelectItem value="accelerator">Accelerator</SelectItem>
                      <SelectItem value="incubator">Incubator</SelectItem>
                      <SelectItem value="fellowship">Fellowship</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="lagos">Lagos</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="global">Global</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredPrograms.map((program) => (
                <Card key={program.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white text-lg">{program.title}</CardTitle>
                        <CardDescription className="text-purple-200">{program.category}</CardDescription>
                      </div>
                      <Badge className={`${getStatusColor(program.status)} text-white`}>{program.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-200 text-sm">{program.description}</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-200 text-sm">{program.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-purple-200 text-sm">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-400" />
                        <span className="text-white font-bold">{program.funding}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-yellow-400" />
                        <span className="text-purple-200 text-sm">{program.cohortSize} startups</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-purple-200 text-sm mb-2">Success Rate</p>
                      <Progress value={program.successRate} className="h-2" />
                      <p className="text-purple-300 text-xs mt-1">
                        {program.successRate}% of graduates secured funding
                      </p>
                    </div>

                    <div>
                      <p className="text-purple-200 text-sm mb-2">Requirements:</p>
                      <div className="flex flex-wrap gap-1">
                        {program.requirements.map((req, index) => (
                          <Badge key={index} variant="outline" className="border-purple-400 text-purple-200 text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-purple-200 text-sm mb-2">Benefits:</p>
                      <div className="flex flex-wrap gap-1">
                        {program.benefits.map((benefit, index) => (
                          <Badge key={index} variant="outline" className="border-green-400 text-green-200 text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-white">{program.rating}</span>
                        <span className="text-purple-200 text-sm">({program.reviews} reviews)</span>
                      </div>
                      <p className="text-purple-300 text-sm">{getDaysLeft(program.deadline)}</p>
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

          <TabsContent value="jobs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {jobOpportunities.map((job) => (
                <Card key={job.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white text-lg">{job.title}</CardTitle>
                        <CardDescription className="text-purple-200">{job.company}</CardDescription>
                      </div>
                      <Badge className={`${getStatusColor(job.status)} text-white`}>{job.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-200 text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-blue-400" />
                        <span className="text-purple-200 text-sm">{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-green-400" />
                        <span className="text-purple-200 text-sm">{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-yellow-400" />
                        <span className="text-purple-200 text-sm">{job.applicants} applicants</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-green-400 font-bold text-lg">{job.salary}</p>
                    </div>

                    <div>
                      <p className="text-purple-200 text-sm mb-2">Required Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {job.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="border-purple-400 text-purple-200 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-purple-300 text-xs">Posted {new Date(job.posted).toLocaleDateString()}</p>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">Apply Now</Button>
                      <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mentorship" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mentorshipPrograms.map((program) => (
                <Card key={program.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{program.title}</CardTitle>
                    <CardDescription className="text-purple-200">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">{program.mentors}</p>
                        <p className="text-purple-200 text-sm">Mentors</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">{program.mentees}</p>
                        <p className="text-purple-200 text-sm">Mentees</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-purple-200 text-sm">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-green-400" />
                        <span className="text-purple-200 text-sm">{program.commitment}</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-purple-200 text-sm mb-2">Focus Areas:</p>
                      <div className="flex flex-wrap gap-1">
                        {program.focus.map((area, index) => (
                          <Badge key={index} variant="outline" className="border-blue-400 text-blue-200 text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Join Program</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {networkingEvents.map((event) => (
                <Card key={event.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-200 text-sm">{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-purple-200 text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-green-400" />
                        <span className="text-purple-200 text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-yellow-400" />
                        <span className="text-purple-200 text-sm">{event.attendees} attendees</span>
                      </div>
                    </div>

                    <div>
                      <Badge className={event.type === "Virtual" ? "bg-blue-600" : "bg-green-600"}>{event.type}</Badge>
                    </div>

                    <div>
                      <p className="text-purple-200 text-sm mb-2">Topics:</p>
                      <div className="flex flex-wrap gap-1">
                        {event.topics.map((topic, index) => (
                          <Badge key={index} variant="outline" className="border-purple-400 text-purple-200 text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Register Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                    Startup Toolkit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-200 text-sm mb-4">
                    Essential resources for launching your startup including business plan templates, legal documents,
                    and funding guides.
                  </p>
                  <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Access Toolkit
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Building className="w-5 h-5 text-blue-400" />
                    Industry Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-200 text-sm mb-4">
                    Latest market research and industry insights to help you understand trends and opportunities in your
                    sector.
                  </p>
                  <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                    View Reports
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Globe className="w-5 h-5 text-green-400" />
                    Global Network
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-200 text-sm mb-4">
                    Connect with alumni, mentors, and industry professionals from around the world through our exclusive
                    network.
                  </p>
                  <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Join Network
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
