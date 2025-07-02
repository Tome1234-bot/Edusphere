"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Star,
  Clock,
  Users,
  Play,
  BookOpen,
  Code,
  Palette,
  Shield,
  Smartphone,
  Cloud,
  Brain,
  Video,
  Settings,
  Eye,
  Gamepad2,
  PenTool,
  Share2,
  Database,
} from "lucide-react"

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceFilter, setPriceFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { id: "all", name: "All Courses", icon: BookOpen },
    { id: "web-dev", name: "Web Development", icon: Code },
    { id: "data-analysis", name: "Data Analysis", icon: Brain },
    { id: "ui-ux", name: "UI/UX Design", icon: Palette },
    { id: "cybersecurity", name: "Cybersecurity", icon: Shield },
    { id: "mobile-dev", name: "Mobile Development", icon: Smartphone },
    { id: "cloud", name: "Cloud Computing", icon: Cloud },
    { id: "ai-ml", name: "AI & Machine Learning", icon: Brain },
    { id: "video-editing", name: "Video Editing", icon: Video },
    { id: "devops", name: "DevOps", icon: Settings },
    { id: "ar-vr", name: "AR/VR", icon: Eye },
    { id: "seo", name: "SEO/SEM", icon: Search },
    { id: "game-dev", name: "Game Development", icon: Gamepad2 },
    { id: "graphic-design", name: "Graphic Design", icon: PenTool },
    { id: "social-media", name: "Social Media", icon: Share2 },
    { id: "database", name: "Database Management", icon: Database },
  ]

  const courses = [
    {
      id: 1,
      title: "Complete Blockchain Development",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 12847,
      duration: "42 hours",
      price: 49.99,
      originalPrice: 199.99,
      category: "web-dev",
      level: "Intermediate",
      isPro: false,
      image: "/placeholder.svg?height=200&width=300",
      description: "Learn blockchain development from scratch with hands-on projects",
    },
    {
      id: 2,
      title: "Advanced Mathematics for Data Science",
      instructor: "Dr. Michael Chen",
      rating: 4.9,
      students: 8934,
      duration: "28 hours",
      price: 24.99,
      originalPrice: 149.99,
      category: "data-analysis",
      level: "Advanced",
      isPro: false,
      image: "/placeholder.svg?height=200&width=300",
      description: "Master the mathematical foundations of data science and machine learning",
    },
    {
      id: 3,
      title: "Python Programming Masterclass",
      instructor: "Alex Rodriguez",
      rating: 4.7,
      students: 25643,
      duration: "65 hours",
      price: 0,
      originalPrice: 0,
      category: "web-dev",
      level: "Beginner",
      isPro: false,
      image: "/placeholder.svg?height=200&width=300",
      description: "Complete Python course from basics to advanced concepts",
    },
    {
      id: 4,
      title: "Business Strategy Audit Course",
      instructor: "Emma Wilson",
      rating: 4.6,
      students: 5672,
      duration: "18 hours",
      price: 79.99,
      originalPrice: 299.99,
      category: "business",
      level: "Intermediate",
      isPro: true,
      image: "/placeholder.svg?height=200&width=300",
      description: "Learn to conduct comprehensive business strategy audits",
    },
    {
      id: 5,
      title: "React Native Mobile Development",
      instructor: "James Park",
      rating: 4.8,
      students: 15234,
      duration: "38 hours",
      price: 59.99,
      originalPrice: 249.99,
      category: "mobile-dev",
      level: "Intermediate",
      isPro: true,
      image: "/placeholder.svg?height=200&width=300",
      description: "Build cross-platform mobile apps with React Native",
    },
    {
      id: 6,
      title: "UI/UX Design Fundamentals",
      instructor: "Lisa Zhang",
      rating: 4.9,
      students: 18765,
      duration: "32 hours",
      price: 0,
      originalPrice: 0,
      category: "ui-ux",
      level: "Beginner",
      isPro: false,
      image: "/placeholder.svg?height=200&width=300",
      description: "Learn the principles of user interface and user experience design",
    },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "free" && course.price === 0) ||
      (priceFilter === "paid" && course.price > 0) ||
      (priceFilter === "pro" && course.isPro)
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesPrice && matchesSearch
  })

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Educational Marketplace</h1>
          <p className="text-purple-200">Discover premium courses, ebooks, and resources from verified creators</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Search */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-purple-200 text-sm font-medium mb-2 block">Price</label>
                  <Select value={priceFilter} onValueChange={setPriceFilter}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="pro">Pro Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                        selectedCategory === category.id
                          ? "bg-purple-600 text-white"
                          : "text-purple-200 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span className="text-sm">{category.name}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Categories */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">🔥 Popular Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200 text-sm">Web Development</span>
                    <Badge variant="secondary" className="bg-blue-600 text-white text-xs">
                      156 courses
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200 text-sm">Data Science</span>
                    <Badge variant="secondary" className="bg-green-600 text-white text-xs">
                      89 courses
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200 text-sm">UI/UX Design</span>
                    <Badge variant="secondary" className="bg-purple-600 text-white text-xs">
                      67 courses
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-purple-200">
                Showing {filteredCourses.length} courses
                {selectedCategory !== "all" && ` in ${categories.find((c) => c.id === selectedCategory)?.name}`}
              </p>
              <Select defaultValue="popular">
                <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card
                  key={course.id}
                  className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {course.isPro && <Badge className="absolute top-2 right-2 bg-yellow-600 text-white">PRO</Badge>}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg flex items-center justify-center">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-white font-semibold line-clamp-2 mb-1">{course.title}</h3>
                        <p className="text-purple-200 text-sm">by {course.instructor}</p>
                      </div>

                      <p className="text-purple-300 text-sm line-clamp-2">{course.description}</p>

                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-purple-200">
                          <Users className="w-4 h-4" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1 text-purple-200">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {course.price === 0 ? (
                            <span className="text-green-400 font-bold">Free</span>
                          ) : (
                            <>
                              <span className="text-white font-bold">${course.price}</span>
                              {course.originalPrice > course.price && (
                                <span className="text-purple-300 line-through text-sm">${course.originalPrice}</span>
                              )}
                            </>
                          )}
                        </div>
                        <Badge variant="outline" className="border-purple-400 text-purple-200 text-xs">
                          {course.level}
                        </Badge>
                      </div>

                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        {course.price === 0 ? "Enroll Free" : course.isPro ? "Upgrade to Pro" : "Buy Now"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">No courses found</h3>
                <p className="text-purple-200">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
