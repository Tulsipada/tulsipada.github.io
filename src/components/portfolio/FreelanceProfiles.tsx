import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Users, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Users":
      return Users;
    case "Rocket":
      return Rocket;
    default:
      return ExternalLink;
  }
};

interface FreelanceProfile {
  platform: string;
  handle: string;
  url: string;
  icon: string;
}

interface FreelanceProfilesProps {
  className?: string;
  freelanceProfiles?: FreelanceProfile[];
}

export default function FreelanceProfiles({ className, freelanceProfiles = [] }: FreelanceProfilesProps) {
  return (
    <section id="freelance-profiles" className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Freelance Platforms</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Connect with me on leading freelance platforms to discuss potential projects and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="relative group overflow-hidden border border-gray-700/50 bg-gray-800/50 hover:bg-gray-800/80 transition-all duration-300 hover:border-indigo-500/50">
              <CardHeader className="relative p-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <Users className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">Upwork</CardTitle>
                    <CardDescription className="text-gray-400">Professional freelancing platform</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-gray-300 mb-6">
                  Find me on Upwork for professional full-stack development services and consulting.
                </p>
                <a
                  href="https://www.upwork.com/freelancers/~01234714ef0e24c132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:translate-y-1"
                >
                  Visit Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="relative group overflow-hidden border border-gray-700/50 bg-gray-800/50 hover:bg-gray-800/80 transition-all duration-300 hover:border-green-500/50">
              <CardHeader className="relative p-6">
                <div className="flex items-center space-x-3">
                   <div className="p-2 bg-green-500/20 rounded-lg">
                     <Rocket className="w-6 h-6 text-green-400" />
                   </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">Fiverr</CardTitle>
                    <CardDescription className="text-gray-400">Creative services marketplace</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-gray-300 mb-6">
                  Explore my services on Fiverr for quick development tasks and specialized projects.
                </p>
                <a
                  href="https://www.fiverr.com/tulsipada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:translate-y-1"
                >
                  Visit Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
