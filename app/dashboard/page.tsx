"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Trophy, TrendingUp, Award, Zap, Brain } from "lucide-react"

export default function DashboardPage() {
  const { user } = useAuth()
  const [currentStreak, setCurrentStreak] = useState(15)
  const [totalPoints, setTotalPoints] = useState(2847)

  const learningProgress = [
    { course: "Full-Stack Web Development", progress: 75, color: "bg-blue-500" },
    { course: "AI & Machine Learning Fundamentals", progress: 45, color: "bg-green-500" },
    { course: "UI/UX Design Principles", progress: 60, color: "bg-purple-500" },
  ]

  const recentAchievements = [
    { title: "JavaScript Master", description: "Completed 50 JS challenges", icon: "🏆" },
    { title: "Study Streak", description: "15 days in a row", icon: "🔥" },
    { title: "Quiz Champion", description: "Top scorer this week", icon: "⭐" },
  ]

  const quickActions = [
    { title: "Continue Learning", description: "Resume your last course", icon: BookOpen, href: "/marketplace" },
    { title: "Join Study Pod", description: "Connect with peers", icon: Users, href: "/study-pods" },
    { title: "Take Quiz", description: "Test your knowledge", icon: Brain, href: "/study-pods" },
    { title: "Find Scholarships", description: "Discover opportunities", icon: Award, href: "/scholarships" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {user?.name?.split(" ")[0] || "Student"}! 👋
          </h1>
          <p className="text-purple-200">
            Ready to continue your learning journey? You're on a {currentStreak}-day streak!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Learning Streak</p>
                  <p className="text-3xl font-bold text-white">{currentStreak}</p>
                  <p className="text-purple-300 text-xs">Days</p>
                </div>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Total Points</p>
                  <p className="text-3xl font-bold text-white">{totalPoints.toLocaleString()}</p>
                  <p className="text-purple-300 text-xs">SEDU</p>
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
                  <p className="text-purple-200 text-sm">Courses</p>
                  <p className="text-3xl font-bold text-white">12</p>
                  <p className="text-purple-300 text-xs">Enrolled</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Rank</p>
                  <p className="text-3xl font-bold text-white">#247</p>
                  <p className="text-purple-300 text-xs">This Week</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Continue Learning */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Continue Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {learningProgress.map((course, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="text-white font-medium">{course.course}</h4>
                      <span className="text-purple-200 text-sm">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10"
                    >
                      Continue Learning
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-4 bg-white/5 border-white/20 text-white hover:bg-white/10 flex flex-col items-start gap-2"
                    >
                      <action.icon className="w-5 h-5 text-purple-400" />
                      <div className="text-left">
                        <div className="font-medium">{action.title}</div>
                        <div className="text-xs text-purple-200">{action.description}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Career Blueprint */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">🎯 AI Career Blueprint</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Career Goal</span>
                    <Badge variant="secondary" className="bg-purple-600 text-white">
                      Full-Stack Dev
                    </Badge>
                  </div>
                  <Progress value={68} className="h-2" />
                  <p className="text-sm text-purple-200">68% Complete</p>
                  <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                    View Blueprint
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <p className="text-white font-medium text-sm">{achievement.title}</p>
                        <p className="text-purple-200 text-xs">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Your Usage */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Your Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Questions Today</span>
                    <span className="text-white font-bold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">This Week</span>
                    <span className="text-white font-bold">89</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Study Time</span>
                    <span className="text-white font-bold">4.2h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
