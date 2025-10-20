import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  githubUrl, 
  demoUrl,
  featured = false 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={featured ? "md:col-span-2" : ""}
    >
      <Card className="overflow-hidden group hover-elevate h-full flex flex-col">
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
        </div>
        
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-2xl font-semibold mb-3 tracking-tight" data-testid={`text-project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs font-mono rounded-sm"
                data-testid={`tag-${tag.toLowerCase()}`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3">
            {githubUrl && (
              <Button 
                size="sm" 
                variant="outline" 
                asChild
                data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            {demoUrl && (
              <Button 
                size="sm" 
                asChild
                data-testid={`button-demo-${title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
