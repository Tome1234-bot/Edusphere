"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, Trophy, Clock, Plus, Search, Filter, MessageSquare, Award } from "lucide-react"

export default function StudyPodsPage() {
  const [activeTab, setActiveTab] = useState("my-pods")
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [quizAnswers, setQuizAnswers] = useState({})

  const myStudyPods = [
    {
      id: 1,
      name: "React Ninjas",
      members: 12,
      challenge: "Component Challenge",
      progress: 75,
      difficulty: "Intermediate",
      status: "Active",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "AI Explorers",
      members: 8,
      challenge: "ML Fundamentals",
      progress: 45,
      difficulty: "Advanced",
      status: "Active",
      color: "bg-green-500",
    },
  ]

  const availableStudyPods = [
    {
      id: 3,
      name: "Next.js Warriors",
      members: 15,
      challenge: "Full-Stack Project",
      progress: 60,
      difficulty: "Advanced",
      status: "Open",
      color: "bg-purple-500",
    },
    {
      id: 4,
      name: "CSS Masters",
      members: 20,
      challenge: "Animation Challenge",
      progress: 30,
      difficulty: "Beginner",
      status: "Open",
      color: "bg-pink-500",
    },
  ]

  const leaderboard = [
    { rank: 1, name: "Alex Chen", points: 2847, avatar: "👨‍💻" },
    { rank: 2, name: "Sarah Kim", points: 2654, avatar: "👩‍💻" },
    { rank: 3, name: "Mike Johnson", points: 2431, avatar: "👨‍🎓" },
    { rank: 4, name: "You", points: 2247, avatar: "🎯", isCurrentUser: true },
    { rank: 5, name: "Lisa Wang", points: 2156, avatar: "👩‍🔬" },
  ]

  const podStats = [
    { label: "Active Pods", value: "2", icon: Users },
    { label: "Total Points", value: "2,247", icon: Trophy },
    { label: "Challenges Won", value: "8", icon: Award },
    { label: "Study Hours", value: "47", icon: Clock },
  ]

  const quizQuestions = [
    {
      id: 1,
      question: "What is the purpose of React's useEffect hook?",
      options: [
        "To manage component state",
        "To handle side effects in functional components",
        "To create custom hooks",
        "To optimize component rendering",
      ],
      correct: 1,
    },
    {
      id: 2,
      question: "Which method is used to update state in a React class component?",
      options: ["updateState()", "changeState()", "setState()", "modifyState()"],
      correct: 2,
    },
    {
      id: 3,
      question: "What does JSX stand for?",
      options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "JSON XML"],
      correct: 0,
    },
  ]

  const handleQuizAnswer = (questionId, answerIndex) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }))
  }

  const calculateQuizScore = () => {
    let correct = 0
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) {
        correct++
      }
    })
    return Math.round((correct / quizQuestions.length) * 100)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Study Pods</h1>
          <p className="text-purple-200">
            Join collaborative learning spaces, compete in challenges, and accelerate your learning with peers from
            around the world.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {podStats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-200 text-sm">{stat.label}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-white/10 backdrop-blur-lg rounded-lg p-1">
              <Button
                variant={activeTab === "my-pods" ? "default" : "ghost"}
                className={`flex-1 ${activeTab === "my-pods" ? "bg-purple-600 text-white" : "text-purple-200 hover:text-white"}`}
                onClick={() => setActiveTab("my-pods")}
              >
                My Study Pods
              </Button>
              <Button
                variant={activeTab === "available" ? "default" : "ghost"}
                className={`flex-1 ${activeTab === "available" ? "bg-purple-600 text-white" : "text-purple-200 hover:text-white"}`}
                onClick={() => setActiveTab("available")}
              >
                Available Study Pods
              </Button>
              <Button
                variant={activeTab === "quiz" ? "default" : "ghost"}
                className={`flex-1 ${activeTab === "quiz" ? "bg-purple-600 text-white" : "text-purple-200 hover:text-white"}`}
                onClick={() => setActiveTab("quiz")}
              >
                Group Quiz
              </Button>
            </div>

            {/* My Study Pods */}
            {activeTab === "my-pods" && (
              <div className="space-y-4">
                {myStudyPods.map((pod) => (
                  <Card key={pod.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 ${pod.color} rounded-lg flex items-center justify-center`}>
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{pod.name}</h3>
                            <p className="text-purple-200 text-sm">{pod.members} members</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-600 text-white">
                          {pod.status}
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-purple-200 text-sm">Current Challenge: {pod.challenge}</span>
                            <span className="text-white text-sm">{pod.progress}%</span>
                          </div>
                          <Progress value={pod.progress} className="h-2" />
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="border-purple-400 text-purple-200">
                            {pod.difficulty}
                          </Badge>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/5 border-white/20 text-white hover:bg-white/10"
                            >
                              <MessageSquare className="w-4 h-4 mr-1" />
                              Chat
                            </Button>
                            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Available Study Pods */}
            {activeTab === "available" && (
              <div className="space-y-4">
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search study pods..."
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
                    />
                  </div>
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>

                {availableStudyPods.map((pod) => (
                  <Card key={pod.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 ${pod.color} rounded-lg flex items-center justify-center`}>
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{pod.name}</h3>
                            <p className="text-purple-200 text-sm">{pod.members} members</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-blue-600 text-white">
                          {pod.status}
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-purple-200 text-sm">Challenge: {pod.challenge}</span>
                            <span className="text-white text-sm">{pod.progress}%</span>
                          </div>
                          <Progress value={pod.progress} className="h-2" />
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="border-purple-400 text-purple-200">
                            {pod.difficulty}
                          </Badge>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <Plus className="w-4 h-4 mr-1" />
                            Join Pod
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Group Quiz */}
            {activeTab === "quiz" && (
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">React Fundamentals Quiz</CardTitle>
                  <CardDescription className="text-purple-200">
                    Test your knowledge and compete with your pod members
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {quizQuestions.map((question, index) => (
                    <div key={question.id} className="space-y-4">
                      <h3 className="text-white font-medium">
                        {index + 1}. {question.question}
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {question.options.map((option, optionIndex) => (
                          <button
                            key={optionIndex}
                            onClick={() => handleQuizAnswer(question.id, optionIndex)}
                            className={`quiz-option p-3 text-left rounded-lg border transition-all ${
                              quizAnswers[question.id] === optionIndex
                                ? "bg-purple-600 border-purple-400 text-white"
                                : "bg-white/5 border-white/20 text-purple-200 hover:bg-white/10"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between items-center pt-4 border-t border-white/20">
                    <div className="text-purple-200">
                      Progress: {Object.keys(quizAnswers).length}/{quizQuestions.length} questions answered
                    </div>
                    <Button
                      className="bg-purple-600 hover:bg-purple-700"
                      disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                    >
                      Submit Quiz
                    </Button>
                  </div>

                  {Object.keys(quizAnswers).length === quizQuestions.length && (
                    <div className="bg-green-600/20 border border-green-600/40 rounded-lg p-4">
                      <p className="text-green-300 font-medium">Quiz Score: {calculateQuizScore()}%</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Create Your Own Pod */}
            <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-lg border-green-400/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold mb-2">Create Your Own Pod</h3>
                    <p className="text-green-200 text-sm">
                      Start a new study group and invite your friends to join your learning journey.
                    </p>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Pod
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pod Leaderboard */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">🏆 Pod Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((user) => (
                    <div
                      key={user.rank}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        user.isCurrentUser ? "bg-purple-600/30 border border-purple-400/50" : "bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-sm">#{user.rank}</span>
                        <span className="text-2xl">{user.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium text-sm ${user.isCurrentUser ? "text-purple-200" : "text-white"}`}>
                          {user.name}
                        </p>
                        <p className="text-purple-300 text-xs">{user.points.toLocaleString()} points</p>
                      </div>
                      {user.rank <= 3 && <Trophy className="w-4 h-4 text-yellow-400" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Your Pod Stats */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Your Pod Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Active Pods</span>
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Total Points</span>
                    <span className="text-white font-bold">2,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Challenges Won</span>
                    <span className="text-white font-bold">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Study Streak</span>
                    <span className="text-white font-bold">15 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Real World Projects */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">🚀 Real World Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-white/5">
                    <h4 className="text-white font-medium text-sm">E-commerce Platform</h4>
                    <p className="text-purple-200 text-xs">Build a full-stack shopping app</p>
                    <div className="flex justify-between items-center mt-2">
                      <Badge variant="outline" className="border-blue-400 text-blue-300 text-xs">
                        React + Node.js
                      </Badge>
                      <span className="text-green-400 text-xs">Active</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5">
                    <h4 className="text-white font-medium text-sm">AI Chatbot</h4>
                    <p className="text-purple-200 text-xs">Create an intelligent assistant</p>
                    <div className="flex justify-between items-center mt-2">
                      <Badge variant="outline" className="border-green-400 text-green-300 text-xs">
                        Python + ML
                      </Badge>
                      <span className="text-yellow-400 text-xs">Planning</span>
                    </div>
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
