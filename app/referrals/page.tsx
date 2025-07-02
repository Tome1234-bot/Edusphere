"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import {
  Share2,
  Copy,
  Users,
  Gift,
  TrendingUp,
  Award,
  Calendar,
  ExternalLink,
  Mail,
  MessageSquare,
  Twitter,
  Facebook,
  Linkedin,
  PhoneIcon as WhatsApp,
  Instagram,
  Crown,
  Star,
  Zap,
} from "lucide-react"

export default function ReferralsPage() {
  const [referralCode, setReferralCode] = useState("EDUSPHERE_USER123")
  const [customMessage, setCustomMessage] = useState("")
  const { toast } = useToast()

  const referralStats = {
    totalReferrals: 47,
    activeReferrals: 32,
    totalEarnings: 2840,
    pendingRewards: 450,
    conversionRate: 68,
    thisMonthReferrals: 12,
  }

  const rewardTiers = [
    {
      tier: "Bronze",
      minReferrals: 0,
      maxReferrals: 9,
      rewardPerReferral: 50,
      bonusReward: 0,
      color: "bg-amber-600",
      icon: "🥉",
      current: false,
    },
    {
      tier: "Silver",
      minReferrals: 10,
      maxReferrals: 24,
      rewardPerReferral: 75,
      bonusReward: 500,
      color: "bg-gray-400",
      icon: "🥈",
      current: false,
    },
    {
      tier: "Gold",
      minReferrals: 25,
      maxReferrals: 49,
      rewardPerReferral: 100,
      bonusReward: 1000,
      color: "bg-yellow-500",
      icon: "🥇",
      current: true,
    },
    {
      tier: "Platinum",
      minReferrals: 50,
      maxReferrals: 99,
      rewardPerReferral: 150,
      bonusReward: 2500,
      color: "bg-purple-500",
      icon: "💎",
      current: false,
    },
    {
      tier: "Diamond",
      minReferrals: 100,
      maxReferrals: Number.POSITIVE_INFINITY,
      rewardPerReferral: 200,
      bonusReward: 5000,
      color: "bg-blue-500",
      icon: "👑",
      current: false,
    },
  ]

  const recentReferrals = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      joinDate: "2024-01-15",
      status: "Active",
      coursesCompleted: 3,
      rewardEarned: 100,
      avatar: "👩‍💻",
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      joinDate: "2024-01-12",
      status: "Active",
      coursesCompleted: 1,
      rewardEarned: 100,
      avatar: "👨‍💻",
    },
    {
      id: 3,
      name: "Lisa Wang",
      email: "lisa.w@email.com",
      joinDate: "2024-01-10",
      status: "Pending",
      coursesCompleted: 0,
      rewardEarned: 0,
      avatar: "👩‍🎓",
    },
    {
      id: 4,
      name: "David Rodriguez",
      email: "david.r@email.com",
      joinDate: "2024-01-08",
      status: "Active",
      coursesCompleted: 5,
      rewardEarned: 100,
      avatar: "👨‍🎓",
    },
    {
      id: 5,
      name: "Emma Wilson",
      email: "emma.w@email.com",
      joinDate: "2024-01-05",
      status: "Active",
      coursesCompleted: 2,
      rewardEarned: 100,
      avatar: "👩‍🔬",
    },
  ]

  const rewardHistory = [
    {
      id: 1,
      type: "Referral Bonus",
      amount: 100,
      date: "2024-01-15",
      referralName: "Sarah Johnson",
      status: "Completed",
    },
    {
      id: 2,
      type: "Tier Bonus",
      amount: 1000,
      date: "2024-01-14",
      referralName: "Gold Tier Achievement",
      status: "Completed",
    },
    {
      id: 3,
      type: "Referral Bonus",
      amount: 100,
      date: "2024-01-12",
      referralName: "Mike Chen",
      status: "Completed",
    },
    {
      id: 4,
      type: "Referral Bonus",
      amount: 100,
      date: "2024-01-08",
      referralName: "David Rodriguez",
      status: "Completed",
    },
    {
      id: 5,
      type: "Special Bonus",
      amount: 250,
      date: "2024-01-01",
      referralName: "New Year Promotion",
      status: "Completed",
    },
  ]

  const socialPlatforms = [
    { name: "WhatsApp", icon: WhatsApp, color: "bg-green-500", shareText: "Join me on EduSphere!" },
    { name: "Twitter", icon: Twitter, color: "bg-blue-400", shareText: "Learning made easy with EduSphere" },
    { name: "Facebook", icon: Facebook, color: "bg-blue-600", shareText: "Check out this amazing learning platform" },
    { name: "LinkedIn", icon: Linkedin, color: "bg-blue-700", shareText: "Advance your career with EduSphere" },
    { name: "Instagram", icon: Instagram, color: "bg-pink-500", shareText: "Transform your learning journey" },
    { name: "Email", icon: Mail, color: "bg-gray-600", shareText: "I found this great learning platform" },
  ]

  const currentTier = rewardTiers.find((tier) => tier.current) || rewardTiers[0]
  const nextTier = rewardTiers.find((tier) => tier.minReferrals > referralStats.totalReferrals)
  const progressToNextTier = nextTier
    ? ((referralStats.totalReferrals - currentTier.minReferrals) / (nextTier.minReferrals - currentTier.minReferrals)) *
      100
    : 100

  const copyReferralLink = () => {
    const referralLink = `https://edusphere.com/join?ref=${referralCode}`
    navigator.clipboard.writeText(referralLink)
    toast({
      title: "Link copied!",
      description: "Your referral link has been copied to clipboard.",
    })
  }

  const shareToSocial = (platform: string, text: string) => {
    const referralLink = `https://edusphere.com/join?ref=${referralCode}`
    const message = `${text} ${referralLink}`

    let shareUrl = ""

    switch (platform) {
      case "WhatsApp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
        break
      case "Twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`
        break
      case "Facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`
        break
      case "LinkedIn":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}`
        break
      case "Email":
        shareUrl = `mailto:?subject=Join me on EduSphere&body=${encodeURIComponent(message)}`
        break
      default:
        return
    }

    window.open(shareUrl, "_blank")

    toast({
      title: "Shared successfully!",
      description: `Your referral link has been shared to ${platform}.`,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Referral Program</h1>
          <p className="text-purple-200">
            Earn rewards by inviting friends to join EduSphere. The more you refer, the more you earn!
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Total Referrals</p>
                  <p className="text-3xl font-bold text-white">{referralStats.totalReferrals}</p>
                  <p className="text-green-400 text-xs">+{referralStats.thisMonthReferrals} this month</p>
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
                  <p className="text-purple-200 text-sm">Total Earnings</p>
                  <p className="text-3xl font-bold text-white">{referralStats.totalEarnings}</p>
                  <p className="text-purple-300 text-xs">SEDU Points</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Gift className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Conversion Rate</p>
                  <p className="text-3xl font-bold text-white">{referralStats.conversionRate}%</p>
                  <p className="text-green-400 text-xs">Above average</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Pending Rewards</p>
                  <p className="text-3xl font-bold text-white">{referralStats.pendingRewards}</p>
                  <p className="text-yellow-400 text-xs">Processing</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Tier & Progress */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  Your Referral Tier: {currentTier.tier}
                </CardTitle>
                <CardDescription className="text-purple-200">
                  {nextTier
                    ? `${nextTier.minReferrals - referralStats.totalReferrals} more referrals to reach ${nextTier.tier} tier`
                    : "You've reached the highest tier! Keep referring to earn more rewards."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nextTier && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-purple-200 text-sm">Progress to {nextTier.tier}</span>
                        <span className="text-white text-sm">{Math.round(progressToNextTier)}%</span>
                      </div>
                      <Progress value={progressToNextTier} className="h-3" />
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-purple-200 text-sm">Current Reward per Referral</p>
                      <p className="text-2xl font-bold text-white">{currentTier.rewardPerReferral} SEDU</p>
                    </div>
                    {nextTier && (
                      <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-purple-200 text-sm">Next Tier Reward</p>
                        <p className="text-2xl font-bold text-green-400">{nextTier.rewardPerReferral} SEDU</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Referral Tiers */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Referral Tiers & Rewards</CardTitle>
                <CardDescription className="text-purple-200">
                  Higher tiers unlock better rewards and exclusive benefits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rewardTiers.map((tier, index) => (
                    <div
                      key={tier.tier}
                      className={`p-4 rounded-lg border transition-all ${
                        tier.current
                          ? "bg-purple-600/20 border-purple-400/50"
                          : referralStats.totalReferrals >= tier.minReferrals
                            ? "bg-green-600/10 border-green-400/30"
                            : "bg-white/5 border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{tier.icon}</span>
                          <div>
                            <h3 className="text-white font-semibold">{tier.tier} Tier</h3>
                            <p className="text-purple-200 text-sm">
                              {tier.minReferrals} -{" "}
                              {tier.maxReferrals === Number.POSITIVE_INFINITY ? "∞" : tier.maxReferrals} referrals
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-bold">{tier.rewardPerReferral} SEDU</p>
                          <p className="text-purple-200 text-sm">per referral</p>
                          {tier.bonusReward > 0 && <p className="text-green-400 text-xs">+{tier.bonusReward} bonus</p>}
                        </div>
                      </div>
                      {tier.current && <Badge className="mt-2 bg-purple-600 text-white">Current Tier</Badge>}
                      {referralStats.totalReferrals >= tier.minReferrals && !tier.current && (
                        <Badge className="mt-2 bg-green-600 text-white">Achieved</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Share Your Referral Link */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share Your Referral Link
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Share your unique referral link and start earning rewards
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Referral Link */}
                <div className="space-y-2">
                  <label className="text-purple-200 text-sm font-medium">Your Referral Link</label>
                  <div className="flex gap-2">
                    <Input
                      value={`https://edusphere.com/join?ref=${referralCode}`}
                      readOnly
                      className="bg-white/10 border-white/20 text-white"
                    />
                    <Button
                      onClick={copyReferralLink}
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Custom Message */}
                <div className="space-y-2">
                  <label className="text-purple-200 text-sm font-medium">Custom Message (Optional)</label>
                  <Input
                    placeholder="Add a personal message to your referral..."
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                  />
                </div>

                {/* Social Media Sharing */}
                <div className="space-y-3">
                  <label className="text-purple-200 text-sm font-medium">Share on Social Media</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {socialPlatforms.map((platform) => (
                      <Button
                        key={platform.name}
                        onClick={() => shareToSocial(platform.name, platform.shareText)}
                        variant="outline"
                        className={`${platform.color} border-0 text-white hover:opacity-80 flex items-center gap-2`}
                      >
                        <platform.icon className="w-4 h-4" />
                        {platform.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Quick Share Templates */}
                <div className="space-y-3">
                  <label className="text-purple-200 text-sm font-medium">Quick Share Templates</label>
                  <div className="space-y-2">
                    {[
                      "🎓 Join me on EduSphere - the best platform for online learning!",
                      "🚀 Transform your career with EduSphere's expert-led courses!",
                      "💡 Discover thousands of courses on EduSphere - use my referral link!",
                    ].map((template, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-full text-left justify-start bg-white/5 border-white/20 text-purple-200 hover:bg-white/10"
                        onClick={() => setCustomMessage(template)}
                      >
                        {template}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Referral Management */}
            <Tabs defaultValue="referrals" className="space-y-4">
              <TabsList className="bg-white/10 backdrop-blur-lg border-white/20">
                <TabsTrigger value="referrals" className="data-[state=active]:bg-purple-600">
                  My Referrals
                </TabsTrigger>
                <TabsTrigger value="rewards" className="data-[state=active]:bg-purple-600">
                  Reward History
                </TabsTrigger>
              </TabsList>

              <TabsContent value="referrals">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Referrals</CardTitle>
                    <CardDescription className="text-purple-200">
                      Track your referred users and their progress
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentReferrals.map((referral) => (
                        <div
                          key={referral.id}
                          className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{referral.avatar}</span>
                            <div>
                              <h4 className="text-white font-medium">{referral.name}</h4>
                              <p className="text-purple-200 text-sm">{referral.email}</p>
                              <p className="text-purple-300 text-xs">
                                Joined {new Date(referral.joinDate).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant={referral.status === "Active" ? "default" : "secondary"}
                              className={referral.status === "Active" ? "bg-green-600" : "bg-yellow-600"}
                            >
                              {referral.status}
                            </Badge>
                            <p className="text-purple-200 text-sm mt-1">
                              {referral.coursesCompleted} courses completed
                            </p>
                            <p className="text-green-400 text-sm font-medium">+{referral.rewardEarned} SEDU earned</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="rewards">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Reward History</CardTitle>
                    <CardDescription className="text-purple-200">
                      View all your earned rewards and bonuses
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {rewardHistory.map((reward) => (
                        <div
                          key={reward.id}
                          className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                              <Gift className="w-5 h-5 text-green-400" />
                            </div>
                            <div>
                              <h4 className="text-white font-medium">{reward.type}</h4>
                              <p className="text-purple-200 text-sm">{reward.referralName}</p>
                              <p className="text-purple-300 text-xs">{new Date(reward.date).toLocaleDateString()}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-green-400 font-bold text-lg">+{reward.amount} SEDU</p>
                            <Badge className="bg-green-600 text-white text-xs">{reward.status}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Referral Tips */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">💡 Referral Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium text-sm">Share Authentically</h4>
                      <p className="text-purple-200 text-xs">
                        Share your genuine experience with EduSphere to build trust
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium text-sm">Target the Right Audience</h4>
                      <p className="text-purple-200 text-xs">
                        Share with people interested in learning and skill development
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium text-sm">Use Multiple Channels</h4>
                      <p className="text-purple-200 text-xs">Share across social media, email, and personal networks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-green-400 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium text-sm">Follow Up</h4>
                      <p className="text-purple-200 text-xs">Check in with your referrals to help them get started</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Promotions */}
            <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg border-purple-400/30">
              <CardHeader>
                <CardTitle className="text-white text-lg">🎉 Special Promotion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-xl">Double Rewards Weekend!</h3>
                    <p className="text-purple-200 text-sm">
                      Earn 2x SEDU points for every successful referral this weekend
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <p className="text-white font-bold text-lg">200 SEDU</p>
                    <p className="text-purple-200 text-xs">per referral (normally 100)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-purple-300 text-xs">Promotion ends in 2 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">🏆 Top Referrers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { rank: 1, name: "Alex Chen", referrals: 156, avatar: "👨‍💻" },
                    { rank: 2, name: "Sarah Kim", referrals: 134, avatar: "👩‍💻" },
                    { rank: 3, name: "Mike Johnson", referrals: 98, avatar: "👨‍🎓" },
                    { rank: 4, name: "You", referrals: 47, avatar: "🎯", isCurrentUser: true },
                    { rank: 5, name: "Lisa Wang", referrals: 43, avatar: "👩‍🔬" },
                  ].map((user) => (
                    <div
                      key={user.rank}
                      className={`flex items-center gap-3 p-2 rounded-lg ${
                        user.isCurrentUser ? "bg-purple-600/30 border border-purple-400/50" : "bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-sm">#{user.rank}</span>
                        <span className="text-xl">{user.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium text-sm ${user.isCurrentUser ? "text-purple-200" : "text-white"}`}>
                          {user.name}
                        </p>
                        <p className="text-purple-300 text-xs">{user.referrals} referrals</p>
                      </div>
                      {user.rank <= 3 && <Crown className="w-4 h-4 text-yellow-400" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Referral Dashboard
                  </Button>
                  <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Reminder
                  </Button>
                  <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Templates
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
