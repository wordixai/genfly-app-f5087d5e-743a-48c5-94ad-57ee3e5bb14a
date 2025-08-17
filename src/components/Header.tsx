import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              Floot
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Community
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Log in
            </Button>
            <Button className="hero-button">
              Start building
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;