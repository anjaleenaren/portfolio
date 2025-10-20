import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Let's Build the Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to opportunities in autonomous systems, robotics, and AI. Let's discuss how we can push the boundaries together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-md mt-1">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:anjalee@example.com" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="link-contact-email"
                    >
                      anjalee@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-md mt-1">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="link-contact-linkedin"
                    >
                      /in/anjalee-narenthiren
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-md mt-1">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">GitHub</h3>
                    <a 
                      href="https://github.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="link-contact-github"
                    >
                      @anjalee
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-md mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Philadelphia, PA
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-6">
                <div className="p-6 bg-muted/50 rounded-lg border border-border">
                  <h3 className="font-semibold mb-2">Current Status</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Actively seeking opportunities in autonomous robotics, focusing on manipulation, navigation, and AI-driven systems.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      Available for roles
                    </span>
                  </div>
                </div>

                <Button size="lg" className="w-full" data-testid="button-download-resume">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Interested in Tesla Optimus, Autopilot, or similar cutting-edge robotics positions
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
