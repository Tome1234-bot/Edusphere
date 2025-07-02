"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, Eye, Heart, Share2, Download, Zap, Crown, Gem, Trophy, ImageIcon } from "lucide-react"

export default function NFTsPage() {
  const [activeTab, setActiveTab] = useState("my-nfts")
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [rarityFilter, setRarityFilter] = useState("all")

  const myNFTs = [
    {
      id: 1,
      name: "JavaScript Master Badge",
      description: "Earned by completing advanced JavaScript challenges",
      image: "/placeholder.svg?height=300&width=300",
      rarity: "Epic",
      category: "Achievement",
      dateEarned: "2024-01-15",
      value: 250,
      likes: 42,
      views: 156,
      isLiked: true,
      attributes: [
        { trait: "Skill", value: "JavaScript" },
        { trait: "Level", value: "Advanced" },
        { trait: "Completion", value: "100%" },
      ],
    },
    {
      id: 2,
      name: "Study Streak Champion",
      description: "30-day consecutive learning streak achievement",
      image: "/placeholder.svg?height=300&width=300",
      rarity: "Legendary",
      category: "Milestone",
      dateEarned: "2024-01-20",
      value: 500,
      likes: 89,
      views: 234,
      isLiked: false,
      attributes: [
        { trait: "Streak", value: "30 Days" },
        { trait: "Consistency", value: "Perfect" },
        { trait: "Dedication", value: "High" },
      ],
    },
    {
      id: 3,
      name: "AI Pioneer Certificate",
      description: "First to complete AI fundamentals course",
      image: "/placeholder.svg?height=300&width=300",
      rarity: "Rare",
      category: "Certificate",
      dateEarned: "2024-01-25",
      value: 150,
      likes: 67,
      views: 189,
      isLiked: true,
      attributes: [
        { trait: "Subject", value: "Artificial Intelligence" },
        { trait: "Rank", value: "Pioneer" },
        { trait: "Score", value: "98%" },
      ],
    },
    {
      id: 4,
      name: "Community Helper",
      description: "Helped 50+ students in study pods",
      image: "/placeholder.svg?height=300&width=300",
      rarity: "Epic",
      category: "Community",
      dateEarned: "2024-02-01",
      value: 200,
      likes: 123,
      views: 345,
      isLiked: false,
      attributes: [
        { trait: "Helped", value: "50+ Students" },
        { trait: "Rating", value: "5 Stars" },
        { trait: "Impact", value: "High" },
      ],
    },
    {
      id: 5,
      name: "Quiz Master",
      description: "Perfect scores on 10 consecutive quizzes",
      image: "/placeholder.svg?height=300&width=300",
      rarity: "Rare",
      category: "Achievement",
      dateEarned: "2024-02-05",
      value: 175,
      likes: 34,
      views: 98,
      isLiked: true,
      attributes: [
        { trait: "Quizzes", value: "10 Perfect" },
        { trait: "Accuracy", value: "100%" },
        { trait: "Subject", value: "Mixed" },
        { trait: "Accuracy", value: "100%" },
        { trait: "Subject", value: "Mixed" },
      ],
    },
    {
      id: 6,
      name: "Data Science Explorer",
      description: "Completed comprehensive data science pathway",
      image: "/placeholder.svg?height=300&width=300",
      rarity: "Epic",
      category: "Certificate",
      dateEarned: "2024-02-10",
      value: 300,
      likes: 78,
      views: 167,
      isLiked: false,
      attributes: [
        { trait: "Field", value: "Data Science" },
        { trait: "Projects", value: "5 Completed" },
        { trait: "Tools", value: "Python, R, SQL" },
      ],
    },
  ]

  const marketplaceNFTs = [
    {
      id: 7,
      name: "Blockchain Developer Badge",
      description: "Exclusive badge for blockchain mastery",
      image: "/placeholder.svg?height=300&width=300",
      rarity: "Legendary",
      category: "Achievement",
      price: 750,
      seller: "EduSphere Official",
      likes: 234,
      views: 567,
      isLiked: false,
      attributes: [
        { trait: "Technology", value: "Blockchain" },
        { trait: "Complexity", value: "Expert" },
        { trait: "Edition", value: "Limited" },
      ],
    },
    {
      id: 8,
      name: "Cybersecurity Specialist",
      description: "Elite cybersecurity achievement NFT",
      image: "/placeholder.svg?height=300&width=300",
      rarity: "Epic",
      category: "Certificate",
      price: 400,
      seller: "CyberAcademy",
      likes: 156,
      views: 389,
      isLiked: true,
      attributes: [
        { trait: "Security", value: "Advanced" },
        { trait: "Certification", value: "Official" },
        { trait: "Validity", value: "Lifetime" },
      ],
    },
  ]

  const nftStats = {
    totalNFTs: myNFTs.length,
    totalValue: myNFTs.reduce((sum, nft) => sum + nft.value, 0),
    rareNFTs: myNFTs.filter((nft) => nft.rarity === "Rare" || nft.rarity === "Epic" || nft.rarity === "Legendary")
      .length,
    totalLikes: myNFTs.reduce((sum, nft) => sum + nft.likes, 0),
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-500"
      case "Rare":
        return "bg-blue-500"
      case "Epic":
        return "bg-purple-500"
      case "Legendary":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return <Star className="w-4 h-4" />
      case "Rare":
        return <Gem className="w-4 h-4" />
      case "Epic":
        return <Crown className="w-4 h-4" />
      case "Legendary":
        return <Trophy className="w-4 h-4" />
      default:
        return <Star className="w-4 h-4" />
    }
  }

  const filteredMyNFTs = myNFTs.filter((nft) => {
    const matchesSearch =
      nft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nft.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || nft.category.toLowerCase() === categoryFilter.toLowerCase()
    const matchesRarity = rarityFilter === "all" || nft.rarity.toLowerCase() === rarityFilter.toLowerCase()

    return matchesSearch && matchesCategory && matchesRarity
  })

  const filteredMarketplaceNFTs = marketplaceNFTs.filter((nft) => {
    const matchesSearch =
      nft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nft.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || nft.category.toLowerCase() === categoryFilter.toLowerCase()
    const matchesRarity = rarityFilter === "all" || nft.rarity.toLowerCase() === rarityFilter.toLowerCase()

    return matchesSearch && matchesCategory && matchesRarity
  })

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">NFT Collection</h1>
          <p className="text-purple-200">Showcase your learning achievements and discover exclusive educational NFTs</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Total NFTs</p>
                  <p className="text-3xl font-bold text-white">{nftStats.totalNFTs}</p>
                  <p className="text-purple-300 text-xs">In your collection</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Collection Value</p>
                  <p className="text-3xl font-bold text-white">{nftStats.totalValue}</p>
                  <p className="text-green-400 text-xs">SEDU Points</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Rare NFTs</p>
                  <p className="text-3xl font-bold text-white">{nftStats.rareNFTs}</p>
                  <p className="text-purple-300 text-xs">Epic & Legendary</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Crown className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Total Likes</p>
                  <p className="text-3xl font-bold text-white">{nftStats.totalLikes}</p>
                  <p className="text-red-400 text-xs">Community love</p>
                </div>
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white/10 backdrop-blur-lg border-white/20 grid w-full grid-cols-2">
            <TabsTrigger value="my-nfts" className="data-[state=active]:bg-purple-600">
              My Collection
            </TabsTrigger>
            <TabsTrigger value="marketplace" className="data-[state=active]:bg-purple-600">
              Marketplace
            </TabsTrigger>
          </TabsList>

          {/* Filters */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search NFTs..."
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
                    <SelectItem value="achievement">Achievement</SelectItem>
                    <SelectItem value="certificate">Certificate</SelectItem>
                    <SelectItem value="milestone">Milestone</SelectItem>
                    <SelectItem value="community">Community</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={rarityFilter} onValueChange={setRarityFilter}>
                  <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Rarity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Rarities</SelectItem>
                    <SelectItem value="common">Common</SelectItem>
                    <SelectItem value="rare">Rare</SelectItem>
                    <SelectItem value="epic">Epic</SelectItem>
                    <SelectItem value="legendary">Legendary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <TabsContent value="my-nfts" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMyNFTs.map((nft) => (
                <Card key={nft.id} className="nft-card bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden">
                  <div className="relative">
                    <img src={nft.image || "/placeholder.svg"} alt={nft.name} className="w-full h-64 object-cover" />
                    <div className="absolute top-2 left-2">
                      <Badge className={`${getRarityColor(nft.rarity)} text-white flex items-center gap-1`}>
                        {getRarityIcon(nft.rarity)}
                        {nft.rarity}
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="border-purple-400 text-purple-200 bg-black/50">
                        {nft.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 right-2 flex gap-2">
                      <Button size="icon" variant="ghost" className="w-8 h-8 bg-black/50 hover:bg-black/70 text-white">
                        <Heart className={`w-4 h-4 ${nft.isLiked ? "fill-red-500 text-red-500" : ""}`} />
                      </Button>
                      <Button size="icon" variant="ghost" className="w-8 h-8 bg-black/50 hover:bg-black/70 text-white">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg">{nft.name}</h3>
                        <p className="text-purple-200 text-sm">{nft.description}</p>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4 text-red-400" />
                            <span className="text-purple-200">{nft.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4 text-blue-400" />
                            <span className="text-purple-200">{nft.views}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-green-400 font-bold">{nft.value} SEDU</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-purple-200 text-xs">Attributes:</p>
                        <div className="grid grid-cols-1 gap-1">
                          {nft.attributes.slice(0, 2).map((attr, index) => (
                            <div key={index} className="flex justify-between items-center text-xs">
                              <span className="text-purple-300">{attr.trait}</span>
                              <span className="text-white">{attr.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          View Details
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredMyNFTs.length === 0 && (
              <div className="text-center py-12">
                <ImageIcon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">No NFTs found</h3>
                <p className="text-purple-200">Try adjusting your filters or earn more achievements</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="marketplace" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMarketplaceNFTs.map((nft) => (
                <Card key={nft.id} className="nft-card bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden">
                  <div className="relative">
                    <img src={nft.image || "/placeholder.svg"} alt={nft.name} className="w-full h-64 object-cover" />
                    <div className="absolute top-2 left-2">
                      <Badge className={`${getRarityColor(nft.rarity)} text-white flex items-center gap-1`}>
                        {getRarityIcon(nft.rarity)}
                        {nft.rarity}
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="border-purple-400 text-purple-200 bg-black/50">
                        {nft.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 right-2 flex gap-2">
                      <Button size="icon" variant="ghost" className="w-8 h-8 bg-black/50 hover:bg-black/70 text-white">
                        <Heart className={`w-4 h-4 ${nft.isLiked ? "fill-red-500 text-red-500" : ""}`} />
                      </Button>
                      <Button size="icon" variant="ghost" className="w-8 h-8 bg-black/50 hover:bg-black/70 text-white">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg">{nft.name}</h3>
                        <p className="text-purple-200 text-sm">{nft.description}</p>
                        <p className="text-purple-300 text-xs">by {nft.seller}</p>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4 text-red-400" />
                            <span className="text-purple-200">{nft.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4 text-blue-400" />
                            <span className="text-purple-200">{nft.views}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-green-400 font-bold">{nft.price} SEDU</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-purple-200 text-xs">Attributes:</p>
                        <div className="grid grid-cols-1 gap-1">
                          {nft.attributes.slice(0, 2).map((attr, index) => (
                            <div key={index} className="flex justify-between items-center text-xs">
                              <span className="text-purple-300">{attr.trait}</span>
                              <span className="text-white">{attr.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1 bg-purple-600 hover:bg-purple-700">Buy Now</Button>
                        <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                          Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredMarketplaceNFTs.length === 0 && (
              <div className="text-center py-12">
                <ImageIcon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">No NFTs found</h3>
                <p className="text-purple-200">Try adjusting your filters or check back later</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
