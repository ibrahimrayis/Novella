
import { ProjectDataType, ProjectSlug } from "@/data/projectsData";

interface ProjectSpecificationsProps {
  project: ProjectDataType[ProjectSlug];
}

const ProjectSpecifications = ({ project }: ProjectSpecificationsProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-novella-navy">Technical Specifications</h2>
      <div className="mb-8">
        <dl className="divide-y divide-gray-200">
          {Object.entries(project.specifications).map(([key, value], index) => (
            <div key={index} className="py-4 flex flex-col sm:flex-row">
              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">{key}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
};

export default ProjectSpecifications;
