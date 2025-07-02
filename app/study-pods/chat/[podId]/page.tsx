"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, ArrowLeft, Users, Settings, Phone, Video, MoreVertical, Paperclip, Smile } from "lucide-react"

export default function StudyPodChatPage() {
  const params = useParams()
  const router = useRouter()
  const [message, setMessage] = useState("")

  const podData = {
    id: params.podId,
    name: "React Ninjas",
    members: 12,
    description: "Advanced React development study group",
    status: "Active",
  }

  const members = [
    { id: 1, name: "Alex Chen", avatar: "AC", status: "online", role: "Admin" },
    { id: 2, name: "Sarah Kim", avatar: "SK", status: "online", role: "Member" },
    { id: 3, name: "Mike Johnson", avatar: "MJ", status: "away", role: "Member" },
    { id: 4, name: "Lisa Wang", avatar: "LW", status: "offline", role: "Member" },
    { id: 5, name: "You", avatar: "YU", status: "online", role: "Member" },
  ]

  const messages = [
    {
      id: 1,
      sender: "Alex Chen",
      avatar: "AC",
      content: "Hey everyone! Ready for today's React hooks session?",
      timestamp: "10:30 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "Sarah Kim",
      avatar: "SK",
      content: "Yes! I've been practicing useEffect all week",
      timestamp: "10:32 AM",
      isOwn: false,
    },
    {
      id: 3,
      sender: "You",
      avatar: "YU",
      content: "Same here! I have some questions about useCallback vs useMemo",
      timestamp: "10:35 AM",
      isOwn: true,
    },
    {
      id: 4,
      sender: "Mike Johnson",
      avatar: "MJ",
      content: "Great topic! I can share some examples from my recent project",
      timestamp: "10:37 AM",
      isOwn: false,
    },
    {
      id: 5,
      sender: "Alex Chen",
      avatar: "AC",
      content: "Perfect! Let's start with the basics and then dive into optimization patterns",
      timestamp: "10:40 AM",
      isOwn: false,
    },
  ]

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Add message logic here
    console.log("Sending message:", message)
    setMessage("")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "away":
        return "bg-yellow-500"
      case "offline":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => router.back()} className="text-white hover:bg-white/10">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white">{podData.name}</h1>
            <p className="text-purple-200 text-sm">{podData.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Phone className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Video className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 h-[600px] flex flex-col">
              <CardHeader className="border-b border-white/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Study Pod Chat
                  </CardTitle>
                  <Badge className="bg-green-600 text-white">{podData.status}</Badge>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex gap-3 ${msg.isOwn ? "flex-row-reverse" : "flex-row"}`}>
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-purple-600 text-white text-xs">{msg.avatar}</AvatarFallback>
                      </Avatar>
                      <div className={`max-w-[70%] ${msg.isOwn ? "text-right" : "text-left"}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-purple-200 text-sm font-medium">{msg.sender}</span>
                          <span className="text-purple-300 text-xs">{msg.timestamp}</span>
                        </div>
                        <div
                          className={`p-3 rounded-lg ${
                            msg.isOwn ? "bg-purple-600 text-white" : "bg-white/10 text-white border border-white/20"
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="border-t border-white/20 p-4">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <Paperclip className="w-5 h-5" />
                    </Button>
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-300"
                    />
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <Smile className="w-5 h-5" />
                    </Button>
                    <Button onClick={handleSendMessage} className="bg-purple-600 hover:bg-purple-700">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Members Sidebar */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">Members ({members.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {members.map((member) => (
                    <div key={member.id} className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-purple-600 text-white">{member.avatar}</AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(member.status)}`}
                        ></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm">{member.name}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-purple-300 text-xs capitalize">{member.status}</span>
                          {member.role === "Admin" && <Badge className="bg-yellow-600 text-white text-xs">Admin</Badge>}
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="w-8 h-8 text-white hover:bg-white/10">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">Pod Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-purple-200 text-sm">Current Challenge</p>
                  <p className="text-white font-medium">Component Challenge</p>
                </div>
                <div>
                  <p className="text-purple-200 text-sm">Progress</p>
                  <p className="text-white font-medium">75% Complete</p>
                </div>
                <div>
                  <p className="text-purple-200 text-sm">Next Session</p>
                  <p className="text-white font-medium">Today, 2:00 PM</p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Join Video Call</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
