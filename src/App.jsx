
import { Button } from "@/components/ui/button"
import { Moon, Star, Zap, Globe } from "lucide-react"


function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Moon className="w-6 h-6 text-indigo-400" />
            <span className="text-xl font-bold tracking-tight">Sleepy Planet</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Community</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-white/5">
              Log in
            </Button>
            <Button className="bg-white text-black hover:bg-zinc-200">
              Get Started
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="container mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-4">
              <span className="bg-indigo-500 w-2 h-2 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium text-indigo-300 uppercase tracking-wider">Portal v1.0 Live</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
              Dream Deeper.<br />
              Explore the <span className="text-indigo-400">Sleepy Planet</span>.
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              All you have to do is remember what to imagine.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button size="lg" className="h-12 px-8 text-base bg-indigo-600 hover:bg-indigo-500 text-white border-0 shadow-lg shadow-indigo-900/20">
                Start Exploring
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-zinc-800 text-zinc-300 hover:bg-white/5 hover:text-white">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
            {[
              {
                icon: <Moon className="w-6 h-6 text-indigo-400" />,
                title: "Lucid Dreaming",
                description: "Tools and techniques to help you master the art of lucid dreaming."
              },
              {
                icon: <Globe className="w-6 h-6 text-purple-400" />,
                title: "Global Community",
                description: "Connect with fellow dreamers from around the world in real-time."
              },
              {
                icon: <Zap className="w-6 h-6 text-pink-400" />,
                title: "Instant Sync",
                description: "Your dream journal syncs across all devices instantly and securely."
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:bg-white/[0.07]">
                <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-indigo-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-zinc-100">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </main>

        <footer className="container mx-auto px-6 py-12 border-t border-white/10 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
            <p>© 2025 Sleepy Planet. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
