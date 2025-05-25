
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  slug: string;
}

const ProjectCard = ({ title, category, image, slug }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${slug}`} className="group block">
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-novella-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-block bg-novella-red text-white px-2 py-1 text-xs rounded mb-2">
              {category}
            </span>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
