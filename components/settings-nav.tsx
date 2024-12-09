import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Settings, HelpCircle, Accessibility, Database, User } from 'lucide-react'

export function SettingsNav() {
  return (
    <div className="grid gap-1">
      <Link href="#">
        <Button variant="ghost" className="w-full justify-start gap-2 h-12">
          <User className="h-4 w-4" />
          Account
        </Button>
      </Link>
      <Link href="#">
        <Button variant="ghost" className="w-full justify-start gap-2 h-12">
          <Settings className="h-4 w-4" />
          Personalization
        </Button>
      </Link>
      <Link href="#">
        <Button variant="ghost" className="w-full justify-start gap-2 h-12">
          <Database className="h-4 w-4" />
          Storage
        </Button>
      </Link>
      <Link href="#">
        <Button variant="ghost" className="w-full justify-start gap-2 h-12">
          <HelpCircle className="h-4 w-4" />
          Help
        </Button>
      </Link>
      <Link href="#">
        <Button variant="ghost" className="w-full justify-start gap-2 h-12">
          <Accessibility className="h-4 w-4" />
          Accessibility
        </Button>
      </Link>
      <Link href="#">
        <Button variant="ghost" className="w-full justify-start gap-2 h-12">
          <Shield className="h-4 w-4" />
          Security
        </Button>
      </Link>
    </div>
  )
}

