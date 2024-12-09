'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"

interface Section {
  title: string
  content?: React.ReactNode
  items?: string[]
}

interface ProfileSectionProps {
  title: string
  sections: Section[]
}

export function ProfileSection({ title, sections }: ProfileSectionProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const [isUpdating, setIsUpdating] = useState(false)

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }))
  }

  const handleUpdate = async () => {
    setIsUpdating(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success("Profile updated successfully")
    } catch (error) {
      toast.error("Failed to update profile")
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="mb-6 flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/placeholder.svg" alt="Profile" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-semibold text-blue-600">{title}</h2>
      </div>
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.title} className="rounded-lg border bg-background">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex w-full items-center justify-between p-4 text-left text-lg font-medium text-blue-600 hover:bg-muted/50"
            >
              {section.title}
              {expandedSections[section.title] ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
            {expandedSections[section.title] && (
              <div className="px-4 py-3 text-muted-foreground">
                {section.items ? (
                  <ul className="list-inside space-y-2">
                    {section.items.map((item, index) => (
                      <li key={index} className="text-blue-600">• {item}</li>
                    ))}
                  </ul>
                ) : (
                  section.content || "No information available"
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        <Button 
          className="bg-green-700 hover:bg-green-800"
          onClick={handleUpdate}
          disabled={isUpdating}
        >
          {isUpdating ? "Updating..." : "Update"}
        </Button>
        <Button variant="outline">Share</Button>
      </div>
    </div>
  )
}

