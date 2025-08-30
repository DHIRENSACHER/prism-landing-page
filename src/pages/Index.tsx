import { Button } from "@/components/ui/button";
import { FileText, CalendarCheck2, ShieldCheck, ArrowRight, Zap, Brain, Target } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import DotGrid from "@/components/DotGrid";
import TargetCursor from "@/components/TargetCursor";
import { useRef } from "react";

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const handleScrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Interactive Background */}
      <DotGrid />
      
      {/* Custom Cursor */}
      <TargetCursor />
      
      {/* Hero Section */}
      <section className="relative z-10 px-6 py-32 md:py-40">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-primary/10 text-primary border border-primary/20 mb-8">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Medical Assistant
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Revolutionize Your{" "}
            <span className="hero-gradient">Healthcare</span>
            <br />
            Journey
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to summarize medical records, visualize patient timelines, and verify information for better healthcare outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl group"
              onClick={handleScrollToFeatures}
            >
              Start Exploring
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-secondary px-8 py-6 text-lg rounded-xl"
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <Target className="w-4 h-4 text-primary" />
              </div>
              <span className="text-muted-foreground">99.9% Accuracy</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <Brain className="w-4 h-4 text-primary" />
              </div>
              <span className="text-muted-foreground">AI-Enhanced</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="text-muted-foreground">Lightning Fast</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" ref={featuresRef} className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Powerful AI Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced tools designed to accelerate healthcare and unlock new insights from medical data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={FileText}
              title="Medical Summarizer"
              description="Automatically summarize complex medical records and documents for quick understanding and decision making."
              gradient="bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
            />
            <FeatureCard
              icon={CalendarCheck2}
              title="Patient Medical Timeline"
              description="Visualize and track a patient's medical history and events in an interactive timeline."
              gradient="bg-gradient-to-br from-green-500/20 to-emerald-500/20"
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Verification"
              description="AI-powered verification of medical information to ensure accuracy and reliability."
              gradient="bg-gradient-to-br from-purple-500/20 to-pink-500/20"
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">Prism</span>
            </div>
            
            <div className="flex space-x-8 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground">
            <p>&copy; 2024 Prism. Empowering the future of healthcare.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;