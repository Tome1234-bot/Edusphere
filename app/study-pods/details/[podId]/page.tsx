"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  ArrowLeft,
  Users,
  Trophy,
  Clock,
  MessageSquare,
  Calendar,
  Award,
  Target,
  BookOpen,
  Video,
  Settings,
} from "lucide-react"

export default function StudyPodDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")

  const podData = {
    id: params.podId,
    name: "React Ninjas",
    description:
      "Advanced React development study group focusing on hooks, performance optimization, and modern patterns",
    members: 12,
    maxMembers: 15,
    challenge: "Component Challenge",
    progress: 75,
    difficulty: "Intermediate",
    status: "Active",
    created: "2024-01-10",
    category: "Web Development",
    tags: ["React", "JavaScript", "Frontend", "Hooks"],
  }

  const members = [
    { id: 1, name: "Alex Chen", avatar: "AC", role: "Admin", joinDate: "2024-01-10", contributions: 45 },
    { id: 2, name: "Sarah Kim", avatar: "SK", role: "Moderator", joinDate: "2024-01-11", contributions: 38 },
    { id: 3, name: "Mike Johnson", avatar: "MJ", role: "Member", joinDate: "2024-01-12", contributions: 32 },
    { id: 4, name: "Lisa Wang", avatar: "LW", role: "Member", joinDate: "2024-01-13", contributions: 28 },
    { id: 5, name: "David Rodriguez", avatar: "DR", role: "Member", joinDate: "2024-01-14", contributions: 25 },
    { id: 6, name: "Emma Wilson", avatar: "EW", role: "Member", joinDate: "2024-01-15", contributions: 22 },
  ]

  const activities = [
    {
      id: 1,
      type: "challenge",
      title: "Component Optimization Challenge Completed",
      user: "Alex Chen",
      timestamp: "2 hours ago",
      points: 50,
    },
    {
      id: 2,
      type: "discussion",
      title: "New discussion: Best practices for useEffect",
      user: "Sarah Kim",
      timestamp: "4 hours ago",
      points: 0,
    },
    {
      id: 3,
      type: "achievement",
      title: "Mike Johnson earned 'Helper' badge",
      user: "Mike Johnson",
      timestamp: "1 day ago",
      points: 25,
    },
    {
      id: 4,
      type: "session",
      title: "Live coding session: Custom Hooks",
      user: "Alex Chen",
      timestamp: "2 days ago",
      points: 0,
    },
  ]

  const challenges = [
    {
      id: 1,
      title: "Build a Custom Hook",
      description: "Create a reusable custom hook for data fetching",
      difficulty: "Intermediate",
      points: 100,
      deadline: "2024-02-15",
      completed: 8,
      total: 12,
      status: "Active",
    },
    {
      id: 2,
      title: "Performance Optimization",
      description: "Optimize a React component for better performance",
      difficulty: "Advanced",
      points: 150,
      deadline: "2024-02-20",
      completed: 3,
      total: 12,
      status: "Active",
    },
    {
      id: 3,
      title: "Component Testing",
      description: "Write comprehensive tests for React components",
      difficulty: "Intermediate",
      points: 75,
      deadline: "2024-02-10",
      completed: 12,
      total: 12,
      status: "Completed",
    },
  ]

  const upcomingSessions = [
    {
      id: 1,
      title: "Advanced React Patterns",
      date: "2024-02-15",
      time: "14:00",
      duration: "2 hours",
      host: "Alex Chen",
      attendees: 8,
    },
    {
      id: 2,
      title: "Code Review Session",
      date: "2024-02-17",
      time: "16:00",
      duration: "1.5 hours",
      host: "Sarah Kim",
      attendees: 6,
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "challenge":
        return <Target className="w-4 h-4 text-blue-400" />
      case "discussion":
        return <MessageSquare className="w-4 h-4 text-green-400" />
      case "achievement":
        return <Award className="w-4 h-4 text-yellow-400" />
      case "session":
        return <Video className="w-4 h-4 text-purple-400" />
      default:
        return <BookOpen className="w-4 h-4 text-gray-400" />
    }
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
      case "Completed":
        return "bg-blue-600"
      case "Pending":
        return "bg-yellow-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" onClick={() => router.back()} className="text-white hover:bg-white/10">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">{podData.name}</h1>
            <p className="text-purple-200">{podData.description}</p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => router.push(`/study-pods/chat/${podData.id}`)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Join Chat
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Pod Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Members</p>
                  <p className="text-3xl font-bold text-white">{podData.members}</p>
                  <p className="text-purple-300 text-xs">of {podData.maxMembers} max</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Progress</p>
                  <p className="text-3xl font-bold text-white">{podData.progress}%</p>
                  <p className="text-green-400 text-xs">Current challenge</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Active Since</p>
                  <p className="text-3xl font-bold text-white">25</p>
                  <p className="text-purple-300 text-xs">days</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Challenges</p>
                  <p className="text-3xl font-bold text-white">3</p>
                  <p className="text-yellow-400 text-xs">2 active</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white/10 backdrop-blur-lg border-white/20 grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="members" className="data-[state=active]:bg-purple-600">
              Members
            </TabsTrigger>
            <TabsTrigger value="challenges" className="data-[state=active]:bg-purple-600">
              Challenges
            </TabsTrigger>
            <TabsTrigger value="sessions" className="data-[state=active]:bg-purple-600">
              Sessions
            </TabsTrigger>
            <TabsTrigger value="activity" className="data-[state=active]:bg-purple-600">
              Activity
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Current Challenge</CardTitle>
                    <CardDescription className="text-purple-200">
                      Track your progress in the ongoing challenge
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold">{podData.challenge}</h3>
                      <Badge className={`${getDifficultyColor(podData.difficulty)} text-white`}>
                        {podData.difficulty}
                      </Badge>
                    </div>
                    <Progress value={podData.progress} className="h-3" />
                    <div className="flex justify-between text-sm">
                      <span className="text-purple-200">{podData.progress}% Complete</span>
                      <span className="text-purple-200">8 of 12 members completed</span>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Continue Challenge</Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activities.slice(0, 4).map((activity) => (
                        <div key={activity.id} className="flex items-start gap-3">
                          {getActivityIcon(activity.type)}
                          <div className="flex-1">
                            <p className="text-white text-sm font-medium">{activity.title}</p>
                            <p className="text-purple-200 text-xs">
                              by {activity.user} • {activity.timestamp}
                            </p>
                          </div>
                          {activity.points > 0 && (
                            <Badge className="bg-yellow-600 text-white text-xs">+{activity.points} pts</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Pod Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-purple-200 text-sm">Category</p>
                      <p className="text-white font-medium">{podData.category}</p>
                    </div>
                    <div>
                      <p className="text-purple-200 text-sm">Created</p>
                      <p className="text-white font-medium">{new Date(podData.created).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-purple-200 text-sm">Status</p>
                      <Badge className={`${getStatusColor(podData.status)} text-white`}>{podData.status}</Badge>
                    </div>
                    <div>
                      <p className="text-purple-200 text-sm mb-2">Tags</p>
                      <div className="flex flex-wrap gap-1">
                        {podData.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="border-purple-400 text-purple-200 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Next Session</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium">Advanced React Patterns</h4>
                      <p className="text-purple-200 text-sm">with Alex Chen</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-purple-200 text-sm">Feb 15, 2024 at 2:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-purple-200 text-sm">2 hours duration</span>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Video className="w-4 h-4 mr-2" />
                      Join Session
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="members" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member) => (
                <Card key={member.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-purple-600 text-white">{member.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-white font-semibold">{member.name}</h3>
                        <Badge
                          className={
                            member.role === "Admin"
                              ? "bg-red-600"
                              : member.role === "Moderator"
                                ? "bg-blue-600"
                                : "bg-gray-600"
                          }
                        >
                          {member.role}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-purple-200">Joined</span>
                        <span className="text-white">{new Date(member.joinDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-200">Contributions</span>
                        <span className="text-white">{member.contributions} points</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {challenges.map((challenge) => (
                <Card key={challenge.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white text-lg">{challenge.title}</CardTitle>
                        <CardDescription className="text-purple-200">{challenge.description}</CardDescription>
                      </div>
                      <Badge className={`${getStatusColor(challenge.status)} text-white`}>{challenge.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge className={`${getDifficultyColor(challenge.difficulty)} text-white`}>
                        {challenge.difficulty}
                      </Badge>
                      <span className="text-yellow-400 font-bold">{challenge.points} points</span>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-purple-200">Progress</span>
                        <span className="text-white">
                          {challenge.completed}/{challenge.total} completed
                        </span>
                      </div>
                      <Progress value={(challenge.completed / challenge.total) * 100} className="h-2" />
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-purple-200 text-sm">
                        Due: {new Date(challenge.deadline).toLocaleDateString()}
                      </span>
                    </div>

                    <Button
                      className={`w-full ${
                        challenge.status === "Completed"
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-purple-600 hover:bg-purple-700"
                      }`}
                      disabled={challenge.status === "Completed"}
                    >
                      {challenge.status === "Completed" ? "Completed" : "Start Challenge"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingSessions.map((session) => (
                <Card key={session.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{session.title}</CardTitle>
                    <CardDescription className="text-purple-200">Hosted by {session.host}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="text-purple-200 text-sm">{new Date(session.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-green-400" />
                        <span className="text-purple-200 text-sm">{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-200 text-sm">{session.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-yellow-400" />
                        <span className="text-purple-200 text-sm">{session.attendees} attending</span>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Video className="w-4 h-4 mr-2" />
                      Join Session
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Activity Feed</CardTitle>
                <CardDescription className="text-purple-200">
                  Recent activities and achievements in this study pod
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10"
                    >
                      {getActivityIcon(activity.type)}
                      <div className="flex-1">
                        <p className="text-white font-medium">{activity.title}</p>
                        <p className="text-purple-200 text-sm">
                          by {activity.user} • {activity.timestamp}
                        </p>
                      </div>
                      {activity.points > 0 && (
                        <Badge className="bg-yellow-600 text-white">+{activity.points} pts</Badge>
                      )}
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
