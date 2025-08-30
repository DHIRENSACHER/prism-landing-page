import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative z-10 w-full px-6 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">R</span>
          </div>
          <span className="text-xl font-bold text-foreground">ResearchAI</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;