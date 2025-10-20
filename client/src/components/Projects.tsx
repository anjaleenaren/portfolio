import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import graspImage from "@assets/stock_images/professional_robotic_e0081887.jpg";
import vexImage from "@assets/stock_images/vex_robotics_competi_848b0aec.jpg";
import startupImage from "@assets/stock_images/startup_entrepreneur_e794245a.jpg";

//todo: remove mock functionality
const projects = [
  {
    title: "GRASP Lab: Advanced Grasping Systems",
    description: "Developed cutting-edge motion planning and grasping algorithms for robotic manipulation. Implemented computer vision pipelines for object detection and 6-DOF pose estimation, enabling precise autonomous grasping in cluttered environments.",
    image: graspImage,
    tags: ["ROS", "Python", "Computer Vision", "Motion Planning", "PyTorch"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    featured: true
  },
  {
    title: "VEX Robotics - World Championship",
    description: "Led programming efforts for a 2x World Champion VEX robotics team. Designed autonomous routines, sensor fusion algorithms, and real-time control systems that secured international recognition.",
    image: vexImage,
    tags: ["C++", "Embedded Systems", "PID Control", "Sensor Fusion"],
    githubUrl: "https://github.com"
  },
  {
    title: "AI Music Generation Platform",
    description: "First engineering hire at Suno.ai, contributing to foundational systems for AI-powered music generation. Built scalable infrastructure and ML pipelines serving millions of users.",
    image: startupImage,
    tags: ["Machine Learning", "Python", "AWS", "FastAPI"],
    demoUrl: "https://suno.ai"
  },
  {
    title: "Autonomous Navigation System",
    description: "Implemented SLAM-based navigation for mobile robots with dynamic obstacle avoidance. Integrated LiDAR and camera sensors for robust localization in complex environments.",
    image: graspImage,
    tags: ["ROS2", "SLAM", "C++", "LiDAR"],
    githubUrl: "https://github.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Building autonomous systems that push the boundaries of robotics, AI, and human-robot interaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
