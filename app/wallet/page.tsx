"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import {
  Wallet,
  Plus,
  Send,
  Download,
  History,
  CreditCard,
  Banknote,
  ArrowUpRight,
  ArrowDownLeft,
  Eye,
  EyeOff,
  Copy,
  QrCode,
  Shield,
  TrendingUp,
} from "lucide-react"

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [showBalance, setShowBalance] = useState(true)
  const [sendAmount, setSendAmount] = useState("")
  const [recipientAddress, setRecipientAddress] = useState("")
  const { toast } = useToast()

  const walletData = {
    seduBalance: 2847,
    usdValue: 284.7,
    totalEarned: 5420,
    totalSpent: 2573,
    pendingRewards: 450,
    walletAddress: "0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4",
  }

  const transactions = [
    {
      id: 1,
      type: "received",
      amount: 100,
      description: "Referral Bonus - Sarah Johnson",
      date: "2024-01-15T10:30:00Z",
      status: "completed",
      hash: "0x1234...5678",
    },
    {
      id: 2,
      type: "sent",
      amount: 50,
      description: "Course Purchase - React Masterclass",
      date: "2024-01-14T15:45:00Z",
      status: "completed",
      hash: "0x2345...6789",
    },
    {
      id: 3,
      type: "received",
      amount: 250,
      description: "Quiz Competition Prize",
      date: "2024-01-12T09:15:00Z",
      status: "completed",
      hash: "0x3456...7890",
    },
    {
      id: 4,
      type: "sent",
      amount: 75,
      description: "NFT Purchase - JavaScript Master Badge",
      date: "2024-01-10T14:20:00Z",
      status: "completed",
      hash: "0x4567...8901",
    },
    {
      id: 5,
      type: "received",
      amount: 150,
      description: "Study Pod Reward",
      date: "2024-01-08T11:00:00Z",
      status: "completed",
      hash: "0x5678...9012",
    },
    {
      id: 6,
      type: "pending",
      amount: 200,
      description: "Scholarship Application Fee Refund",
      date: "2024-01-07T16:30:00Z",
      status: "pending",
      hash: "0x6789...0123",
    },
  ]

  const paymentMethods = [
    {
      id: 1,
      type: "card",
      name: "Visa ending in 4242",
      isDefault: true,
      icon: CreditCard,
    },
    {
      id: 2,
      type: "bank",
      name: "GTBank - 0123456789",
      isDefault: false,
      icon: Banknote,
    },
  ]

  const rewardSources = [
    { source: "Referrals", amount: 1200, percentage: 42 },
    { source: "Quiz Competitions", amount: 850, percentage: 30 },
    { source: "Course Completions", amount: 650, percentage: 23 },
    { source: "Study Pod Activities", amount: 147, percentage: 5 },
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Address copied to clipboard",
    })
  }

  const handleSendTokens = () => {
    if (!sendAmount || !recipientAddress) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Transaction Sent!",
      description: `${sendAmount} SEDU sent successfully`,
    })

    setSendAmount("")
    setRecipientAddress("")
  }

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "received":
        return <ArrowDownLeft className="w-4 h-4 text-green-400" />
      case "sent":
        return <ArrowUpRight className="w-4 h-4 text-red-400" />
      case "pending":
        return <History className="w-4 h-4 text-yellow-400" />
      default:
        return <History className="w-4 h-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-600"
      case "pending":
        return "bg-yellow-600"
      case "failed":
        return "bg-red-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Wallet</h1>
          <p className="text-purple-200">Manage your SEDU tokens and track your earnings</p>
        </div>

        {/* Balance Overview */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-8">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-white text-xl font-semibold">SEDU Balance</h2>
                  <p className="text-purple-200 text-sm">Your learning rewards</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowBalance(!showBalance)}
                className="text-white hover:bg-white/10"
              >
                {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center md:text-left">
                <p className="text-purple-200 text-sm mb-1">Current Balance</p>
                <p className="text-4xl font-bold text-white mb-1">
                  {showBalance ? walletData.seduBalance.toLocaleString() : "****"}
                </p>
                <p className="text-green-400 text-sm">
                  ≈ ${showBalance ? walletData.usdValue.toFixed(2) : "**.**"} USD
                </p>
              </div>

              <div className="text-center">
                <p className="text-purple-200 text-sm mb-1">Total Earned</p>
                <p className="text-2xl font-bold text-green-400 mb-1">
                  +{showBalance ? walletData.totalEarned.toLocaleString() : "****"}
                </p>
                <p className="text-purple-300 text-sm">All time</p>
              </div>

              <div className="text-center md:text-right">
                <p className="text-purple-200 text-sm mb-1">Pending Rewards</p>
                <p className="text-2xl font-bold text-yellow-400 mb-1">
                  {showBalance ? walletData.pendingRewards.toLocaleString() : "***"}
                </p>
                <p className="text-purple-300 text-sm">Processing</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Funds
              </Button>
              <Button variant="outline" className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Send className="w-4 h-4 mr-2" />
                Send SEDU
              </Button>
              <Button variant="outline" className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Download className="w-4 h-4 mr-2" />
                Withdraw
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white/10 backdrop-blur-lg border-white/20 grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="transactions" className="data-[state=active]:bg-purple-600">
              Transactions
            </TabsTrigger>
            <TabsTrigger value="send" className="data-[state=active]:bg-purple-600">
              Send
            </TabsTrigger>
            <TabsTrigger value="receive" className="data-[state=active]:bg-purple-600">
              Receive
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-purple-600">
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Earning Sources */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Earning Sources
                  </CardTitle>
                  <CardDescription className="text-purple-200">Breakdown of your SEDU earnings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {rewardSources.map((source, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-200 text-sm">{source.source}</span>
                        <span className="text-white font-bold">{source.amount} SEDU</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${source.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-purple-300 text-xs">{source.percentage}% of total earnings</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <History className="w-5 h-5" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription className="text-purple-200">Your latest transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {transactions.slice(0, 5).map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <div className="flex items-center gap-3">
                          {getTransactionIcon(transaction.type)}
                          <div>
                            <p className="text-white text-sm font-medium">{transaction.description}</p>
                            <p className="text-purple-300 text-xs">{new Date(transaction.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p
                            className={`font-bold text-sm ${
                              transaction.type === "received"
                                ? "text-green-400"
                                : transaction.type === "sent"
                                  ? "text-red-400"
                                  : "text-yellow-400"
                            }`}
                          >
                            {transaction.type === "received" ? "+" : transaction.type === "sent" ? "-" : ""}
                            {transaction.amount} SEDU
                          </p>
                          <Badge className={`${getStatusColor(transaction.status)} text-white text-xs`}>
                            {transaction.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Transaction History</CardTitle>
                <CardDescription className="text-purple-200">
                  Complete history of your SEDU transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className="flex items-center gap-4">
                        {getTransactionIcon(transaction.type)}
                        <div>
                          <p className="text-white font-medium">{transaction.description}</p>
                          <p className="text-purple-200 text-sm">{new Date(transaction.date).toLocaleString()}</p>
                          <p className="text-purple-300 text-xs">Hash: {transaction.hash}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-bold text-lg ${
                            transaction.type === "received"
                              ? "text-green-400"
                              : transaction.type === "sent"
                                ? "text-red-400"
                                : "text-yellow-400"
                          }`}
                        >
                          {transaction.type === "received" ? "+" : transaction.type === "sent" ? "-" : ""}
                          {transaction.amount} SEDU
                        </p>
                        <Badge className={`${getStatusColor(transaction.status)} text-white`}>
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="send" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Send SEDU Tokens</CardTitle>
                <CardDescription className="text-purple-200">Transfer SEDU tokens to another wallet</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-purple-200 text-sm font-medium">Recipient Address</label>
                  <Input
                    placeholder="0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4"
                    value={recipientAddress}
                    onChange={(e) => setRecipientAddress(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-purple-200 text-sm font-medium">Amount (SEDU)</label>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                  />
                  <p className="text-purple-300 text-xs">
                    Available balance: {walletData.seduBalance.toLocaleString()} SEDU
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Transaction Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-purple-200">Amount:</span>
                      <span className="text-white">{sendAmount || "0"} SEDU</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200">Network Fee:</span>
                      <span className="text-white">0.1 SEDU</span>
                    </div>
                    <div className="border-t border-white/20 pt-2 flex justify-between font-medium">
                      <span className="text-purple-200">Total:</span>
                      <span className="text-white">{(Number.parseFloat(sendAmount || "0") + 0.1).toFixed(1)} SEDU</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleSendTokens}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  disabled={!sendAmount || !recipientAddress}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send SEDU
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="receive" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Receive SEDU Tokens</CardTitle>
                <CardDescription className="text-purple-200">
                  Share your wallet address to receive SEDU tokens
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <QrCode className="w-32 h-32 text-purple-600" />
                  </div>
                  <p className="text-purple-200 text-sm">Scan QR code to send SEDU to this wallet</p>
                </div>

                <div className="space-y-2">
                  <label className="text-purple-200 text-sm font-medium">Your Wallet Address</label>
                  <div className="flex gap-2">
                    <Input
                      value={walletData.walletAddress}
                      readOnly
                      className="bg-white/10 border-white/20 text-white"
                    />
                    <Button
                      onClick={() => copyToClipboard(walletData.walletAddress)}
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div>
                      <h4 className="text-yellow-400 font-medium">Security Notice</h4>
                      <p className="text-yellow-200 text-sm mt-1">
                        Only share your wallet address with trusted sources. Never share your private keys or seed
                        phrase.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Payment Methods</CardTitle>
                <CardDescription className="text-purple-200">
                  Manage your payment methods for adding funds
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                        <method.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{method.name}</p>
                        {method.isDefault && <Badge className="bg-green-600 text-white text-xs">Default</Badge>}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Security Settings</CardTitle>
                <CardDescription className="text-purple-200">Manage your wallet security preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Two-Factor Authentication</p>
                    <p className="text-purple-200 text-sm">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Enable
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Transaction Notifications</p>
                    <p className="text-purple-200 text-sm">Get notified of all transactions</p>
                  </div>
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Configure
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Backup Wallet</p>
                    <p className="text-purple-200 text-sm">Secure your wallet with a backup</p>
                  </div>
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Backup
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
