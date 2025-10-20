import { motion } from "framer-motion";
import { Code, Cpu, Lightbulb, Wrench } from "lucide-react";

//todo: remove mock functionality
const skillCategories = [
  {
    title: "Robotics & Control",
    icon: Cpu,
    skills: ["ROS/ROS2", "Motion Planning", "SLAM", "Computer Vision", "Sensor Fusion", "PID Control"]
  },
  {
    title: "AI & Machine Learning",
    icon: Lightbulb,
    skills: ["PyTorch", "Deep Learning", "Reinforcement Learning", "Object Detection", "Path Planning"]
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C++", "JavaScript/TypeScript", "MATLAB", "Rust"]
  },
  {
    title: "Hardware & Systems",
    icon: Wrench,
    skills: ["Embedded Systems", "LiDAR", "IMU/Camera Integration", "Arduino", "Raspberry Pi"]
  }
];

export default function Skills() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Multidisciplinary skill set spanning robotics, AI, and full-stack engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-md">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg" data-testid={`text-skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-background border border-border text-sm rounded-sm"
                      data-testid={`tag-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
