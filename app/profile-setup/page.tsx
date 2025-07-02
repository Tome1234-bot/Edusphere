"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/hooks/use-toast"

const nigerianUniversities = [
  "University of Lagos (UNILAG)",
  "University of Ibadan (UI)",
  "Obafemi Awolowo University (OAU)",
  "University of Nigeria, Nsukka (UNN)",
  "Ahmadu Bello University (ABU)",
  "University of Benin (UNIBEN)",
  "Federal University of Technology, Akure (FUTA)",
  "University of Ilorin (UNILORIN)",
  "Federal University of Technology, Owerri (FUTO)",
  "University of Port Harcourt (UNIPORT)",
  "Bayero University Kano (BUK)",
  "University of Calabar (UNICAL)",
  "Federal University of Agriculture, Abeokuta (FUNAAB)",
  "University of Maiduguri (UNIMAID)",
  "University of Jos (UNIJOS)",
  "Federal University, Oye-Ekiti (FUOYE)",
  "Federal University, Lokoja (FULOKOJA)",
  "Federal University, Dutse (FUD)",
  "Federal University, Kashere (FUKASHERE)",
  "Federal University, Lafia (FULAFIA)",
]

const studyLevels = ["100 Level", "200 Level", "300 Level", "400 Level", "500 Level", "Graduate", "Postgraduate"]

export default function ProfileSetupPage() {
  const [university, setUniversity] = useState("")
  const [course, setCourse] = useState("")
  const [level, setLevel] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { user, updateProfile } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      updateProfile({
        university,
        course,
        level,
        isProfileComplete: true,
      })

      toast({
        title: "Profile completed!",
        description: "Welcome to your personalized learning experience.",
      })

      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-white/10 backdrop-blur-lg border-white/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white">Complete Your Profile</CardTitle>
          <CardDescription className="text-purple-200">Help us personalize your learning experience</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-purple-200">University</label>
              <Select value={university} onValueChange={setUniversity} required>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select your university" />
                </SelectTrigger>
                <SelectContent>
                  {nigerianUniversities.map((uni) => (
                    <SelectItem key={uni} value={uni}>
                      {uni}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-purple-200">Course of Study</label>
              <Input
                type="text"
                placeholder="e.g., Computer Science, Medicine, Engineering"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-purple-200">Current Level</label>
              <Select value={level} onValueChange={setLevel} required>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select your current level" />
                </SelectTrigger>
                <SelectContent>
                  {studyLevels.map((lvl) => (
                    <SelectItem key={lvl} value={lvl}>
                      {lvl}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white" disabled={isLoading}>
              {isLoading ? "Saving..." : "Complete Setup"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
