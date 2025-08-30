import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
}

const FeatureCard = ({ icon: Icon, title, description, gradient }: FeatureCardProps) => {
  return (
    <Card className="card-hover bg-card border-border/50 backdrop-blur-sm relative overflow-hidden group">
      <div 
        className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 ${
          gradient || 'bg-gradient-to-br from-primary/20 to-accent/20'
        }`}
      />
      <CardHeader className="relative z-10">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;