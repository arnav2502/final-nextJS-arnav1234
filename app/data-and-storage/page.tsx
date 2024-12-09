'use client'

import { ProfileSection } from "@/components/profile-section"
import { Toaster } from "sonner"

export default function DataAndStorage() {
  const insuranceProfile = {
    title: "Insurance Profile",
    sections: [
      {
        title: "Personal Information",
        items: [
          "Full Name",
          "Date of Birth",
          "Contact Information (Phone Number, Email Address, Physical Address)",
          "Emergency Contacts"
        ]
      },
      {
        title: "Identification Documents",
        items: [
          "Government ID",
          "Insurance Card",
          "Social Security Number"
        ]
      },
      {
        title: "Insurance Policy Types",
        items: [
          "Health Insurance",
          "Life Insurance",
          "Disability Insurance"
        ]
      },
      {
        title: "Beneficiary Information",
        items: [
          "Primary Beneficiaries",
          "Secondary Beneficiaries",
          "Contingent Beneficiaries"
        ]
      },
      {
        title: "Claim History",
        items: [
          "Past Claims",
          "Current Claims",
          "Claim Status"
        ]
      }
    ]
  }

  const healthcareProfile = {
    title: "Healthcare Profile",
    sections: [
      {
        title: "Personal Information",
        items: [
          "Full Name",
          "Date of Birth",
          "Contact Information",
          "Emergency Contacts"
        ]
      },
      {
        title: "Medical History",
        items: [
          "Past Conditions",
          "Surgeries",
          "Family History"
        ]
      },
      {
        title: "Current Medications",
        items: [
          "Prescription Medications",
          "Over-the-counter Medications",
          "Supplements"
        ]
      },
      {
        title: "Immunization Records",
        items: [
          "Childhood Vaccinations",
          "Adult Vaccinations",
          "Booster Shots"
        ]
      },
      {
        title: "Diagnostic Reports",
        items: [
          "Lab Results",
          "Imaging Reports",
          "Specialist Consultations"
        ]
      },
      {
        title: "Lifestyle Information",
        items: [
          "Exercise Habits",
          "Diet Restrictions",
          "Sleep Patterns"
        ]
      },
      {
        title: "Doctor Visits",
        items: [
          "Primary Care Visits",
          "Specialist Visits",
          "Upcoming Appointments"
        ]
      }
    ]
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <ProfileSection {...insuranceProfile} />
        <ProfileSection {...healthcareProfile} />
      </div>
      <Toaster />
    </div>
  )
}

