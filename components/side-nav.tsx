'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Activity, Bell, FileSignature, History, Home, LogOut, Settings, User, Mail, Database } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface SideNavProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function SideNav({ className }: SideNavProps) {
  const pathname = usePathname()

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/settings', icon: Settings, label: 'Settings' },
    { href: '/information-requests', icon: User, label: 'Information requests' },
    { href: '/notarization', icon: Mail, label: 'Notarization' },
    { href: '/notifications', icon: Bell, label: 'Notifications' },
    { href: '/data-and-storage', icon: Database, label: 'Data and Storage' },
    { href: '/digital-signature', icon: FileSignature, label: 'Digital Signature' },
    { href: '/activity-log', icon: Activity, label: 'Activity Log' },
  ]

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Jane Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h2 className="text-lg font-semibold">Jane Doe</h2>
          </div>
        </div>
        <div className="px-3">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button 
                  variant={pathname === item.href ? "secondary" : "ghost"} 
                  className={cn(
                    "w-full justify-start gap-2",
                    pathname === item.href && "bg-green-500 text-white hover:bg-green-600"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="px-3">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <LogOut className="h-4 w-4" />
          Log Out
        </Button>
      </div>
    </div>
  )
}

