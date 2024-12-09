import { NavBar } from "./components/nav-bar";
import { SideNav } from "./components/side-nav"
import { SettingsNav } from "./components/settings-nav"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="flex">
        <SideNav className="hidden lg:block w-64 shrink-0 border-r h-[calc(100vh-4rem)]" />
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Settings</h1>
            <SettingsNav />
          </div>
        </main>
      </div>
    </div>
  )
}

