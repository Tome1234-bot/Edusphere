"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/hooks/use-toast"
import { User, Camera, Edit, Save, X } from "lucide-react"

export default function ProfilePage() {
  const { user, updateProfile } = useAuth()
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")

  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "+234 801 234 5678",
    location: "Lagos, Nigeria",
    dateOfBirth: "1998-05-15",
    university: user?.university || "",
    course: user?.course || "",
    level: user?.level || "",
    bio: "Passionate computer science student interested in AI and machine learning. Always eager to learn new technologies and work on innovative projects.",
    skills: ["JavaScript", "React", "Python", "Machine Learning", "Data Analysis"],
    interests: ["Artificial Intelligence", "Web Development", "Data Science", "Blockchain"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
  })

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    courseUpdates: true,
    scholarshipAlerts: true,
    studyPodMessages: true,
    weeklyDigest: false,
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    showEmail: false,
    showPhone: false,
    showProgress: true,
    allowMessages: true,
  })

  const achievements = [
    { title: "First Course Completed", date: "2024-01-15", icon: "🎓" },
    { title: "Study Streak - 30 Days", date: "2024-01-20", icon: "🔥" },
    { title: "Top 10% in Quiz", date: "2024-01-25", icon: "🏆" },
    { title: "Community Helper", date: "2024-02-01", icon: "🤝" },
  ]

  const learningStats = {
    coursesCompleted: 12,
    totalStudyHours: 156,
    certificatesEarned: 8,
    currentStreak: 15,
    totalPoints: 2847,
    rank: 247,
  }

  const handleSave = () => {
    updateProfile(profileData)
    setIsEditing(false)
    toast({
      title: "Profile updated!",
      description: "Your profile has been successfully updated.",
    })
  }

  const handleCancel = () => {
    setProfileData({
      ...profileData,
      name: user?.name || "",
      email: user?.email || "",
    })
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
          <p className="text-purple-200">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Summary Card */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <Button
                    size="icon"
                    className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 w-8 h-8 bg-purple-600 hover:bg-purple-700"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <h3 className="text-white font-semibold text-lg">{profileData.name}</h3>
                <p className="text-purple-200 text-sm">{profileData.course}</p>
                <p className="text-purple-300 text-xs">{profileData.university}</p>

                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200 text-sm">Profile Completion</span>
                    <span className="text-white text-sm">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-white font-bold text-lg">{learningStats.coursesCompleted}</p>
                    <p className="text-purple-200 text-xs">Courses</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-lg">{learningStats.certificatesEarned}</p>
                    <p className="text-purple-200 text-xs">Certificates</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 mt-6">
              <CardHeader>
                <CardTitle className="text-white text-lg">Learning Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200 text-sm">Study Hours</span>
                  <span className="text-white font-bold">{learningStats.totalStudyHours}h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200 text-sm">Current Streak</span>
                  <span className="text-white font-bold">{learningStats.currentStreak} days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200 text-sm">Total Points</span>
                  <span className="text-white font-bold">{learningStats.totalPoints.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200 text-sm">Global Rank</span>
                  <span className="text-white font-bold">#{learningStats.rank}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="bg-white/10 backdrop-blur-lg border-white/20 grid w-full grid-cols-4">
                <TabsTrigger value="profile" className="data-[state=active]:bg-purple-600">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="achievements" className="data-[state=active]:bg-purple-600">
                  Achievements
                </TabsTrigger>
                <TabsTrigger value="notifications" className="data-[state=active]:bg-purple-600">
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="privacy" className="data-[state=active]:bg-purple-600">
                  Privacy
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-white">Personal Information</CardTitle>
                        <CardDescription className="text-purple-200">
                          Update your personal details and academic information
                        </CardDescription>
                      </div>
                      {!isEditing ? (
                        <Button
                          onClick={() => setIsEditing(true)}
                          variant="outline"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                      ) : (
                        <div className="flex gap-2">
                          <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                            <Save className="w-4 h-4 mr-2" />
                            Save
                          </Button>
                          <Button
                            onClick={handleCancel}
                            variant="outline"
                            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                          >
                            <X className="w-4 h-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-purple-200">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                          disabled={!isEditing}
                          className="bg-white/10 border-white/20 text-white disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-purple-200">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                          disabled={!isEditing}
                          className="bg-white/10 border-white/20 text-white disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-purple-200">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                          disabled={!isEditing}
                          className="bg-white/10 border-white/20 text-white disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-purple-200">
                          Location
                        </Label>
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                          disabled={!isEditing}
                          className="bg-white/10 border-white/20 text-white disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="university" className="text-purple-200">
                          University
                        </Label>
                        <Input
                          id="university"
                          value={profileData.university}
                          onChange={(e) => setProfileData({ ...profileData, university: e.target.value })}
                          disabled={!isEditing}
                          className="bg-white/10 border-white/20 text-white disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="course" className="text-purple-200">
                          Course of Study
                        </Label>
                        <Input
                          id="course"
                          value={profileData.course}
                          onChange={(e) => setProfileData({ ...profileData, course: e.target.value })}
                          disabled={!isEditing}
                          className="bg-white/10 border-white/20 text-white disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-purple-200">
                        Bio
                      </Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                        disabled={!isEditing}
                        className="bg-white/10 border-white/20 text-white disabled:opacity-50"
                        rows={4}
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label className="text-purple-200">Skills</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {profileData.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="border-purple-400 text-purple-200">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label className="text-purple-200">Interests</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {profileData.interests.map((interest, index) => (
                            <Badge key={index} variant="outline" className="border-blue-400 text-blue-200">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Achievements & Badges</CardTitle>
                    <CardDescription className="text-purple-200">
                      Your learning milestones and accomplishments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
                        >
                          <span className="text-3xl">{achievement.icon}</span>
                          <div>
                            <h4 className="text-white font-medium">{achievement.title}</h4>
                            <p className="text-purple-200 text-sm">{new Date(achievement.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Notification Preferences</CardTitle>
                    <CardDescription className="text-purple-200">
                      Choose what notifications you want to receive
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {Object.entries(notifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <Label className="text-white capitalize">
                            {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                          </Label>
                          <p className="text-purple-200 text-sm">
                            {key === "emailNotifications" && "Receive notifications via email"}
                            {key === "pushNotifications" && "Receive push notifications in browser"}
                            {key === "courseUpdates" && "Get notified about course updates"}
                            {key === "scholarshipAlerts" && "Alerts for new scholarship opportunities"}
                            {key === "studyPodMessages" && "Messages from your study pods"}
                            {key === "weeklyDigest" && "Weekly summary of your progress"}
                          </p>
                        </div>
                        <Switch
                          checked={value}
                          onCheckedChange={(checked) => setNotifications({ ...notifications, [key]: checked })}
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="privacy" className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Privacy Settings</CardTitle>
                    <CardDescription className="text-purple-200">
                      Control who can see your information and activity
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-white">Profile Visibility</Label>
                      <Select
                        value={privacy.profileVisibility}
                        onValueChange={(value) => setPrivacy({ ...privacy, profileVisibility: value })}
                      >
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="friends">Friends Only</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {Object.entries(privacy)
                      .filter(([key]) => key !== "profileVisibility")
                      .map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <div>
                            <Label className="text-white capitalize">
                              {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                            </Label>
                            <p className="text-purple-200 text-sm">
                              {key === "showEmail" && "Display your email address on your profile"}
                              {key === "showPhone" && "Display your phone number on your profile"}
                              {key === "showProgress" && "Show your learning progress to others"}
                              {key === "allowMessages" && "Allow other users to send you messages"}
                            </p>
                          </div>
                          <Switch
                            checked={value}
                            onCheckedChange={(checked) => setPrivacy({ ...privacy, [key]: checked })}
                          />
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
