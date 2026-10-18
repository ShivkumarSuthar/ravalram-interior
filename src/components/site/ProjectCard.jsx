import Link from "next/link";

// Portfolio card: image with tag pills, title and location/year underneath
export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative h-88 overflow-hidden rounded-3xl lg:h-135">
        <img src={project.image} alt={`${project.title}, ${project.location}`} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div aria-hidden className="absolute inset-0 bg-black/10" />
        <ul className="absolute left-7.5 top-7.5 flex flex-wrap gap-2.5">
          {[project.filterKey, project.location.split(",").pop().trim()].map((tag) => (
            <li key={tag} className="rounded-full border border-white px-3.75 py-1.25 font-heading text-eyebrow uppercase text-white">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <h3 className="mt-5.5 font-heading text-card-lg leading-none text-surface-dark transition-colors duration-300 group-hover:text-primary">
        {project.title}
      </h3>
      <p className="mt-2.5 text-base leading-7 text-text-muted">{project.location}</p>
      <p className="text-base leading-7 text-text-muted">{project.year}</p>
    </Link>
  );
}
