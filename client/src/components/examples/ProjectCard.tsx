import ProjectCard from '../ProjectCard';
import projectImage from '@assets/stock_images/professional_robotic_e0081887.jpg';

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ProjectCard
        title="Grasping Robot Arm"
        description="Developed advanced motion planning algorithms for precise object manipulation using computer vision and deep learning."
        image={projectImage}
        tags={["ROS", "Python", "Computer Vision"]}
        githubUrl="https://github.com"
        demoUrl="https://example.com"
      />
    </div>
  );
}
