import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Minimalist_robotic_arm_hero_image_4bca9ea3.png";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-sm font-mono text-primary">
                2x World Champion
              </span>
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-sm font-mono text-primary">
                First Hire @Suno.ai
              </span>
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-sm font-mono text-primary">
                Penn M&T + GRASP
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Anjalee Narenthiren
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Robotics Engineer & Entrepreneur building autonomous systems at the intersection of AI, motion planning, and real-world impact.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" onClick={scrollToProjects} data-testid="button-view-work">
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                data-testid="button-contact"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            <div className="flex gap-4">
              <Button 
                size="icon" 
                variant="ghost" 
                asChild 
                data-testid="link-github"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                asChild 
                data-testid="link-linkedin"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                asChild 
                data-testid="link-email"
              >
                <a href="mailto:hello@example.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={heroImage} 
                alt="Robotic systems visualization" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button 
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-scroll-indicator"
          >
            <span className="text-sm font-mono">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
