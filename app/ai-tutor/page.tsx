"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Mic, MicOff, Send, Volume2, VolumeX, Settings, MessageSquare, Brain } from "lucide-react"

export default function AITutorPage() {
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [question, setQuestion] = useState("")
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content:
        "Hello! I'm your AI tutor. Ask me anything about your studies, and I'll provide personalized explanations based on your learning style.",
      timestamp: new Date(),
    },
  ])

  const tutorPerformance = [
    { metric: "Questions Answered", value: "1,247", change: "+12%" },
    { metric: "Response Time", value: "2.3s", change: "-8%" },
    { metric: "Learning Rate", value: "94%", change: "+5%" },
  ]

  const popularTopics = [
    { topic: "JavaScript Basics", count: 45, color: "bg-yellow-500" },
    { topic: "React Components", count: 38, color: "bg-blue-500" },
    { topic: "Data Structures", count: 32, color: "bg-green-500" },
    { topic: "API Integration", count: 28, color: "bg-purple-500" },
    { topic: "Database Design", count: 24, color: "bg-red-500" },
    { topic: "Algorithm Optimization", count: 19, color: "bg-indigo-500" },
  ]

  const recentQuestions = [
    {
      question: "Explain the difference between var and const in JavaScript",
      answer: "var has function scope while const has block scope...",
      timestamp: "2 hours ago",
    },
    {
      question: "What is the virtual DOM in React?",
      answer: "The virtual DOM is a JavaScript representation...",
      timestamp: "5 hours ago",
    },
    {
      question: "How do I center a div in CSS?",
      answer: "There are several ways to center a div...",
      timestamp: "1 day ago",
    },
  ]

  const promptTemplates = [
    "Explain this concept in simple terms",
    "Give me a practical example",
    "What are the common mistakes?",
    "How does this relate to my course?",
    "Create a study plan for this topic",
    "Quiz me on this subject",
  ]

  const handleSendMessage = () => {
    if (!question.trim()) return

    const newMessage = {
      type: "user",
      content: question,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: "ai",
        content: `Great question! Let me explain that concept in detail. ${question} is an important topic in your studies...`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)

    setQuestion("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Voice Tutor</h1>
          <p className="text-purple-200">
            Ask questions naturally with your voice and get instant, personalized explanations from our AI tutor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 h-[600px] flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    AI Tutor Chat
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      onClick={() => setIsSpeaking(!isSpeaking)}
                    >
                      {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === "user"
                            ? "bg-purple-600 text-white"
                            : "bg-white/10 text-white border border-white/20"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Voice Input Area */}
                <div className="text-center mb-4">
                  <Button
                    size="lg"
                    className={`w-20 h-20 rounded-full ${
                      isListening ? "bg-red-500 hover:bg-red-600 animate-pulse" : "bg-green-500 hover:bg-green-600"
                    }`}
                    onClick={() => setIsListening(!isListening)}
                  >
                    {isListening ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                  </Button>
                  <p className="text-purple-200 text-sm mt-2">{isListening ? "Listening..." : "Ready to help!"}</p>
                </div>

                {/* Text Input */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your question or use voice..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                  />
                  <Button onClick={handleSendMessage} className="bg-purple-600 hover:bg-purple-700">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>

                {/* Prompt Templates */}
                <div className="mt-4">
                  <p className="text-purple-200 text-sm mb-2">Quick prompts:</p>
                  <div className="flex flex-wrap gap-2">
                    {promptTemplates.slice(0, 3).map((template, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="bg-white/5 border-white/20 text-purple-200 hover:bg-white/10 text-xs"
                        onClick={() => setQuestion(template)}
                      >
                        {template}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tutor Performance */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">📊 Tutor Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tutorPerformance.map((metric, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="text-purple-200 text-sm">{metric.metric}</p>
                        <p className="text-white font-bold">{metric.value}</p>
                      </div>
                      <Badge
                        variant={metric.change.startsWith("+") ? "default" : "secondary"}
                        className={metric.change.startsWith("+") ? "bg-green-600" : "bg-red-600"}
                      >
                        {metric.change}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Topics */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">🔥 Popular Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {popularTopics.map((topic, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${topic.color}`}></div>
                      <div className="flex-1">
                        <p className="text-white text-sm">{topic.topic}</p>
                        <p className="text-purple-200 text-xs">{topic.count} questions</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Voice Settings */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">🎙️ Voice Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-purple-200 text-sm">Voice Speed</label>
                    <Progress value={75} className="h-2 mt-1" />
                  </div>
                  <div>
                    <label className="text-purple-200 text-sm">Voice Tone</label>
                    <Progress value={60} className="h-2 mt-1" />
                  </div>
                  <div>
                    <label className="text-purple-200 text-sm">Explain Detail</label>
                    <Progress value={85} className="h-2 mt-1" />
                  </div>
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
                    <span className="text-purple-200">Total Sessions</span>
                    <span className="text-white font-bold">156</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Questions */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 mt-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Recent Questions
            </CardTitle>
            <CardDescription className="text-purple-200">Review your recent learning interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentQuestions.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-medium">{item.question}</h4>
                    <span className="text-purple-300 text-xs">{item.timestamp}</span>
                  </div>
                  <p className="text-purple-200 text-sm mb-3">{item.answer}</p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/5 border-white/20 text-purple-200 hover:bg-white/10"
                    >
                      Reply
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/5 border-white/20 text-purple-200 hover:bg-white/10"
                    >
                      Follow-up
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
