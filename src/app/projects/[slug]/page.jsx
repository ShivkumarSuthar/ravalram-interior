import { getProjectBySlug, projects } from "../../../lib/project-data";
import { getPageMetadata, generateSchema } from "../../../lib/seo";
import ProjectDetailsClient from "./ProjectDetailsClient";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return getPageMetadata({
      title: "Project Not Found",
      description: "The requested project case study could not be located on Suthar Interior Studio.",
    });
  }

  return getPageMetadata({
    title: `${project.title} - ${project.category} Portfolio | Suthar Interior Studio`,
    description: project.description,
    path: `/projects/${project.slug}`,
    keywords: [project.category, "Luxury Portfolio", "Teak Carpentry case study", "Suthar interior construction"],
    ogImage: project.image,
  });
}

export default async function ProjectDetailsPage(props) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return <ProjectDetailsClient project={null} />;
  }

  // Create customized LocalBusiness/ProfessionalService schema detailing the project
  const serviceSchema = generateSchema("LocalBusiness", {
    city: project.location.split(",").pop().trim(),
    title: `Suthar Interior Studio - ${project.title} Case Study`,
    description: project.description,
    image: project.image,
  });

  const breadcrumbSchema = generateSchema("Breadcrumb", {
    items: [
      { name: "Home", path: "/" },
      { name: "Portfolio", path: "/gallery" },
      { name: project.title, path: `/projects/${project.slug}` },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProjectDetailsClient project={project} />
    </>
  );
}
