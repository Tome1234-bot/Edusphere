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
  Clock,
  Users,
  Award,
  Star,
  Code,
  Palette,
  Shield,
  Smartphone,
  Cloud,
  Brain,
  Video,
  Settings,
  Eye,
  Gamepad2,
  PenTool,
  Share2,
  Database,
  Target,
  CheckCircle,
  PlayCircle,
} from "lucide-react"

export default function TasksPage() {
  const [activeTab, setActiveTab] = useState("available")
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [difficultyFilter, setDifficultyFilter] = useState("all")

  const taskCategories = [
    { id: "web-dev", name: "Web Development", icon: Code, color: "bg-blue-500" },
    { id: "data-analysis", name: "Data Analysis", icon: Brain, color: "bg-green-500" },
    { id: "ui-ux", name: "UI/UX Design", icon: Palette, color: "bg-purple-500" },
    { id: "cybersecurity", name: "Cybersecurity", icon: Shield, color: "bg-red-500" },
    { id: "mobile-dev", name: "Mobile Development", icon: Smartphone, color: "bg-indigo-500" },
    { id: "cloud", name: "Cloud Computing", icon: Cloud, color: "bg-cyan-500" },
    { id: "ai-ml", name: "AI & Machine Learning", icon: Brain, color: "bg-emerald-500" },
    { id: "video-editing", name: "Video Editing", icon: Video, color: "bg-pink-500" },
    { id: "devops", name: "DevOps", icon: Settings, color: "bg-orange-500" },
    { id: "ar-vr", name: "AR/VR", icon: Eye, color: "bg-violet-500" },
    { id: "game-dev", name: "Game Development", icon: Gamepad2, color: "bg-yellow-500" },
    { id: "graphic-design", name: "Graphic Design", icon: PenTool, color: "bg-rose-500" },
    { id: "social-media", name: "Social Media", icon: Share2, color: "bg-blue-400" },
    { id: "database", name: "Database Management", icon: Database, color: "bg-gray-500" },
  ]

  const availableTasks = [
    {
      id: 1,
      title: "Build a React Dashboard for Local NGO",
      description: "Create a comprehensive dashboard for a local NGO to track their sustainability programs.",
      category: "web-dev",
      difficulty: "Intermediate",
      reward: 150,
      duration: "2-3 weeks",
      participants: 12,
      maxParticipants: 20,
      skills: ["React", "Node.js", "MongoDB", "Chart.js"],
      organization: "Green Earth Initiative",
      deadline: "2024-03-15",
      status: "Active",
      rating: 4.8,
      reviews: 24,
    },
    {
      id: 2,
      title: "AI Chatbot for Customer Support",
      description:
        "Develop an intelligent chatbot using natural language processing to handle customer inquiries and support tickets.",
      category: "ai-ml",
      difficulty: "Advanced",
      reward: 300,
      duration: "4-5 weeks",
      participants: 8,
      maxParticipants: 15,
      skills: ["Python", "TensorFlow", "NLP", "Flask"],
      organization: "TechSupport Solutions",
      deadline: "2024-04-01",
      status: "Active",
      rating: 4.9,
      reviews: 18,
    },
    {
      id: 3,
      title: "Mobile App UI/UX Redesign",
      description: "Redesign the user interface and experience for a fitness tracking mobile application.",
      category: "ui-ux",
      difficulty: "Beginner",
      reward: 200,
      duration: "3-4 weeks",
      participants: 15,
      maxParticipants: 25,
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      organization: "FitLife App",
      deadline: "2024-03-20",
      status: "Active",
      rating: 4.7,
      reviews: 31,
    },
    {
      id: 4,
      title: "Cybersecurity Audit Tool",
      description:
        "Create a comprehensive security audit tool for small businesses to assess their digital vulnerabilities.",
      category: "cybersecurity",
      difficulty: "Advanced",
      reward: 250,
      duration: "3-4 weeks",
      participants: 6,
      maxParticipants: 12,
      skills: ["Python", "Network Security", "Penetration Testing", "Risk Assessment"],
      organization: "SecureNet Consulting",
      deadline: "2024-03-25",
      status: "Active",
      rating: 4.6,
      reviews: 15,
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "Build an interactive data visualization dashboard for analyzing educational statistics and trends.",
      category: "data-analysis",
      difficulty: "Intermediate",
      reward: 175,
      duration: "2-3 weeks",
      participants: 10,
      maxParticipants: 18,
      skills: ["Python", "D3.js", "Tableau", "SQL"],
      organization: "Education Analytics Corp",
      deadline: "2024-03-30",
      status: "Active",
      rating: 4.8,
      reviews: 22,
    },
  ]

  const myTasks = [
    {
      id: 6,
      title: "E-commerce Website Development",
      description: "Building a full-stack e-commerce platform with payment integration.",
      category: "web-dev",
      difficulty: "Advanced",
      reward: 200,
      progress: 75,
      status: "In Progress",
      deadline: "2024-02-28",
      organization: "ShopLocal Nigeria",
    },
    {
      id: 7,
      title: "Brand Identity Design",
      description: "Creating a complete brand identity package for a startup.",
      category: "graphic-design",
      difficulty: "Intermediate",
      reward: 125,
      progress: 45,
      status: "In Progress",
      deadline: "2024-03-05",
      organization: "StartupHub",
    },
  ]

  const completedTasks = [
    {
      id: 8,
      title: "School Management System",
      description: "Developed a comprehensive school management system with student tracking.",
      category: "web-dev",
      difficulty: "Advanced",
      reward: 300,
      completedDate: "2024-01-15",
      rating: 5,
      feedback: "Excellent work! The system exceeded our expectations.",
      organization: "Bright Future Academy",
    },
    {
      id: 9,
      title: "Social Media Campaign Design",
      description: "Created engaging social media graphics and campaign materials.",
      category: "graphic-design",
      difficulty: "Beginner",
      reward: 75,
      completedDate: "2024-01-10",
      rating: 4,
      feedback: "Great creativity and attention to detail.",
      organization: "Digital Marketing Pro",
    },
  ]

  const taskStats = {
    totalCompleted: completedTasks.length,
    totalEarned: completedTasks.reduce((sum, task) => sum + task.reward, 0),
    averageRating: completedTasks.reduce((sum, task) => sum + task.rating, 0) / completedTasks.length,
    activeProjects: myTasks.length,
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-600"
      case "Intermediate":
        return "bg-yellow-600"
      case "Advanced":
        return "bg-red-600"
      default:
        return "bg-gray-600"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-600"
      case "In Progress":
        return "bg-blue-600"
      case "Completed":
        return "bg-purple-600"
      case "Closed":
        return "bg-gray-600"
      default:
        return "bg-gray-600"
    }
  }

  const getCategoryIcon = (categoryId: string) => {
    const category = taskCategories.find((cat) => cat.id === categoryId)
    return category ? category.icon : Code
  }

  const getCategoryColor = (categoryId: string) => {
    const category = taskCategories.find((cat) => cat.id === categoryId)
    return category ? category.color : "bg-gray-500"
  }

  const filteredTasks = availableTasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || task.category === categoryFilter
    const matchesDifficulty =
      difficultyFilter === "all" || task.difficulty.toLowerCase() === difficultyFilter.toLowerCase()

    return matchesSearch && matchesCategory && matchesDifficulty
  })

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
          <h1 className="text-3xl font-bold text-white mb-2">Real-World Tasks</h1>
          <p className="text-purple-200">
            Apply your skills in real projects and HODLs. Build your portfolio, earn rewards, and gain valuable
            experience.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Available Tasks</p>
                  <p className="text-3xl font-bold text-white">156</p>
                  <p className="text-green-400 text-xs">+12 this week</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Completed</p>
                  <p className="text-3xl font-bold text-white">{taskStats.totalCompleted}</p>
                  <p className="text-purple-300 text-xs">Projects finished</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Total Earned</p>
                  <p className="text-3xl font-bold text-white">{taskStats.totalEarned}</p>
                  <p className="text-yellow-400 text-xs">SEDU Points</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Avg Rating</p>
                  <p className="text-3xl font-bold text-white">{taskStats.averageRating.toFixed(1)}</p>
                  <p className="text-purple-300 text-xs">⭐ Client feedback</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white/10 backdrop-blur-lg border-white/20 grid w-full grid-cols-4">
            <TabsTrigger value="available" className="data-[state=active]:bg-purple-600">
              Available Tasks
            </TabsTrigger>
            <TabsTrigger value="my-tasks" className="data-[state=active]:bg-purple-600">
              My Tasks
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-purple-600">
              Completed
            </TabsTrigger>
            <TabsTrigger value="categories" className="data-[state=active]:bg-purple-600">
              Categories
            </TabsTrigger>
          </TabsList>

          <TabsContent value="available" className="space-y-6">
            {/* Filters */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search tasks..."
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
                      {taskCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                    <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Tasks Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredTasks.map((task) => {
                const CategoryIcon = getCategoryIcon(task.category)
                return (
                  <Card key={task.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 ${getCategoryColor(task.category)} rounded-lg flex items-center justify-center`}
                          >
                            <CategoryIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-white text-lg">{task.title}</CardTitle>
                            <CardDescription className="text-purple-200">{task.organization}</CardDescription>
                          </div>
                        </div>
                        <Badge className={`${getStatusColor(task.status)} text-white`}>{task.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-purple-200 text-sm">{task.description}</p>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-400" />
                          <span className="text-white font-bold">{task.reward} SEDU</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-400" />
                          <span className="text-purple-200 text-sm">{task.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-green-400" />
                          <span className="text-purple-200 text-sm">
                            {task.participants}/{task.maxParticipants}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-purple-200 text-sm">
                            {task.rating} ({task.reviews})
                          </span>
                        </div>
                      </div>

                      <div>
                        <p className="text-purple-200 text-sm mb-2">Deadline: {getDaysLeft(task.deadline)} days left</p>
                        <Progress value={(task.participants / task.maxParticipants) * 100} className="h-2" />
                      </div>

                      <div>
                        <p className="text-purple-200 text-sm mb-2">Required Skills:</p>
                        <div className="flex flex-wrap gap-1">
                          {task.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="border-purple-400 text-purple-200 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Badge className={`${getDifficultyColor(task.difficulty)} text-white`}>{task.difficulty}</Badge>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1 bg-purple-600 hover:bg-purple-700">Apply Now</Button>
                        <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="my-tasks" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {myTasks.map((task) => {
                const CategoryIcon = getCategoryIcon(task.category)
                return (
                  <Card key={task.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 ${getCategoryColor(task.category)} rounded-lg flex items-center justify-center`}
                          >
                            <CategoryIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-white text-lg">{task.title}</CardTitle>
                            <CardDescription className="text-purple-200">{task.organization}</CardDescription>
                          </div>
                        </div>
                        <Badge className={`${getStatusColor(task.status)} text-white`}>{task.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-purple-200 text-sm">{task.description}</p>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-purple-200 text-sm">Progress</span>
                          <span className="text-white text-sm">{task.progress}%</span>
                        </div>
                        <Progress value={task.progress} className="h-3" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-400" />
                          <span className="text-white font-bold">{task.reward} SEDU</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-red-400" />
                          <span className="text-purple-200 text-sm">{getDaysLeft(task.deadline)} days left</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Continue Work
                        </Button>
                        <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {completedTasks.map((task) => {
                const CategoryIcon = getCategoryIcon(task.category)
                return (
                  <Card key={task.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 ${getCategoryColor(task.category)} rounded-lg flex items-center justify-center`}
                          >
                            <CategoryIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-white text-lg">{task.title}</CardTitle>
                            <CardDescription className="text-purple-200">{task.organization}</CardDescription>
                          </div>
                        </div>
                        <Badge className="bg-green-600 text-white">Completed</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-purple-200 text-sm">{task.description}</p>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-400" />
                          <span className="text-white font-bold">{task.reward} SEDU</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-white">{task.rating}/5 Rating</span>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-purple-200 text-sm mb-1">Client Feedback:</p>
                        <p className="text-white text-sm italic">"{task.feedback}"</p>
                      </div>

                      <p className="text-purple-300 text-xs">
                        Completed on {new Date(task.completedDate).toLocaleDateString()}
                      </p>

                      <Button
                        variant="outline"
                        className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        View Certificate
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {taskCategories.map((category) => (
                <Card
                  key={category.id}
                  className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                    <p className="text-purple-200 text-sm mb-4">{Math.floor(Math.random() * 20) + 5} available tasks</p>
                    <Button
                      variant="outline"
                      className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      Explore Tasks
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
