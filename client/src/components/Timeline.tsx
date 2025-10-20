import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

//todo: remove mock functionality
const experiences = [
  {
    title: "Masters in Robotics",
    organization: "University of Pennsylvania - GRASP Lab",
    period: "2024 - Present",
    description: "Conducting research in robot manipulation, motion planning, and computer vision. Working on advanced grasping systems with applications in warehouse automation.",
    icon: GraduationCap,
    type: "education"
  },
  {
    title: "First Engineering Hire",
    organization: "Suno.ai",
    period: "2023",
    description: "Built foundational ML infrastructure for AI music generation platform. Declined leadership position to complete masters degree, choosing to invest in long-term technical depth.",
    icon: Briefcase,
    type: "work"
  },
  {
    title: "Founder & Entrepreneur",
    organization: "Gap Year Ventures",
    period: "2022 - 2023",
    description: "Founded startup and launched podcast focusing on AI and technology. Developed business acumen and communication skills while building products from scratch.",
    icon: Briefcase,
    type: "work"
  },
  {
    title: "B.S. Computer Science & Economics",
    organization: "University of Pennsylvania - M&T Program",
    period: "2019 - 2023",
    description: "Graduated from prestigious Management & Technology dual-degree program. Combined technical CS foundation with business strategy and economic theory.",
    icon: GraduationCap,
    type: "education"
  },
  {
    title: "2x World Champion",
    organization: "VEX Robotics Competition",
    period: "2017 - 2019",
    description: "Led programming efforts as head programmer for world championship team. Designed autonomous routines and control systems that secured international recognition twice.",
    icon: Trophy,
    type: "achievement"
  }
];

export default function Timeline() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            From world championship robotics to cutting-edge AI research.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[29px] top-0 bottom-0 w-px bg-border" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 top-0 w-[60px] h-[60px] rounded-lg bg-card border border-card-border flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="text-xl font-semibold" data-testid={`text-experience-title-${index}`}>
                        {experience.title}
                      </h3>
                      <span className="text-sm font-mono text-muted-foreground" data-testid={`text-experience-period-${index}`}>
                        {experience.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium" data-testid={`text-experience-org-${index}`}>
                      {experience.organization}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
