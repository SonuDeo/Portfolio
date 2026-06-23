import { site, skillCategories } from "@/lib/data";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    image: `${site.url}${site.photo}`,
    jobTitle: "Data Analyst & AI Automation Engineer",
    email: `mailto:${site.email}`,
    telephone: site.phone,
    address: { "@type": "PostalAddress", addressCountry: "India" },
    sameAs: [site.github, site.linkedin],
    knowsAbout: skillCategories.flatMap((c) => c.skills),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "I.K. Gujral Punjab Technical University",
    },
    description:
      "Data Analyst and AI Automation Engineer building data-driven systems and intelligent workflows.",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
