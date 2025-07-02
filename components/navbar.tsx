"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Menu, Bell, User, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/contexts/auth-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "AI Tutor", href: "/ai-tutor" },
  { name: "Study Pods", href: "/study-pods" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Scholarships", href: "/scholarships" },
  { name: "Real-World Tasks", href: "/tasks" },
  { name: "NFTs", href: "/nfts" },
  { name: "Referrals", href: "/referrals" },
  { name: "Graduate Hub", href: "/graduate-hub" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  return (
    <nav className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl hidden sm:block">EduSphere</span>
          </Link>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  pathname === item.href
                    ? "bg-purple-700 text-white"
                    : "text-purple-100 hover:bg-purple-700 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search Bar - Hidden on small screens */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search courses, pods..."
                className="pl-10 pr-4 py-2 w-full bg-white/10 border-white/20 text-white placeholder-gray-300"
              />
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-2">
            {/* Search icon for mobile */}
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-purple-700">
              <Search className="w-5 h-5" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="text-white hover:bg-purple-700">
              <Bell className="w-5 h-5" />
            </Button>

            {/* User Menu - Desktop */}
            <div className="hidden sm:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:bg-purple-700 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span className="hidden lg:block">{user?.name?.split(" ")[0] || "User"}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/wallet">Wallet</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile menu button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden text-white hover:bg-purple-700">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-gradient-to-b from-purple-900 to-indigo-900 border-purple-700"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-purple-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-lg">E</span>
                      </div>
                      <span className="font-bold text-xl text-white">EduSphere</span>
                    </div>
                  </div>

                  {/* Mobile Search */}
                  <div className="py-4 border-b border-purple-700">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        type="text"
                        placeholder="Search courses, pods..."
                        className="pl-10 pr-4 py-2 w-full bg-white/10 border-white/20 text-white placeholder-gray-300"
                      />
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 py-4">
                    <div className="space-y-1">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                            pathname === item.href
                              ? "bg-purple-700 text-white"
                              : "text-purple-100 hover:bg-purple-700 hover:text-white"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile User Menu */}
                  <div className="border-t border-purple-700 pt-4">
                    <div className="flex items-center gap-3 px-4 py-2 mb-4">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{user?.name || "User"}</p>
                        <p className="text-purple-200 text-sm">{user?.email}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 rounded-md text-base font-medium text-purple-100 hover:bg-purple-700 hover:text-white"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Profile Settings
                      </Link>
                      <Link
                        href="/wallet"
                        className="block px-4 py-2 rounded-md text-base font-medium text-purple-100 hover:bg-purple-700 hover:text-white"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Wallet
                      </Link>
                      <button
                        onClick={() => {
                          logout()
                          setIsMenuOpen(false)
                        }}
                        className="block w-full text-left px-4 py-2 rounded-md text-base font-medium text-purple-100 hover:bg-purple-700 hover:text-white"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
