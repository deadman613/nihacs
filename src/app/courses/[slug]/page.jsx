import { notFound } from "next/navigation";
import HeroSection from "../../../Homesections/HeroCourses";
import CourseModule from "../../../Homesections/Coursemodule"

const allCourses = [
  {
    id: 1,
    title: "Web Penetration Testing And Bug Bounty Hunting",
    slug: "web-penetration-testing-bug-bounty-hunting",
    description: "Hands-on labs covering pen-testing, recon, and exploitation.",
    duration: "6 Months",
    level: "Advanced",
    image: "/Courses/6.png",
    badge: "Bestseller",
    rating: 4.8,
    reviews: 2100,
    price: 55000,
    originalPrice: 60000,
    emi: "9,167",
    sectionLabel: "Advanced",
    sectionId: "advanced",
    topics: ["Reconnaissance & OSINT", "Vulnerability Scanning", "Exploitation Techniques", "Bug Bounty Platforms", "Report Writing"],
  },
  {
    id: 2,
    title: "Basic Ethical Hacking",
    slug: "basic-ethical-hacking",
    description: "Core security concepts, network defense, and incident response.",
    duration: "3 Months",
    level: "Beginner",
    image: "/Courses/03.png",
    badge: null,
    rating: 4.5,
    reviews: 870,
    price: 18000,
    originalPrice: 22000,
    emi: "6,000",
    sectionLabel: "Certification",
    sectionId: "certification",
    topics: ["Networking Basics", "Linux Essentials", "Password Attacks", "MITM Attacks", "Incident Response"],
  },
  {
    id: 3,
    title: "Bachelor in Cybersecurity",
    slug: "bachelor-in-cybersecurity",
    description: "OWASP top 10, secure coding and real-world exploit labs.",
    duration: "3 Years",
    level: "Undergraduate",
    image: "/Courses/3.png",
    badge: "Popular",
    rating: 4.7,
    reviews: 1540,
    price: 300000,
    originalPrice: 360000,
    emi: "8,334",
    sectionLabel: "Degree",
    sectionId: "degree",
    topics: ["OWASP Top 10", "Secure Coding", "Cryptography", "Network Security", "Digital Forensics"],
  },
  {
    id: 4,
    title: "Master in Cybersecurity And Ethical Hacking",
    slug: "master-in-cybersecurity-ethical-hacking",
    description: "Secure architectures, IAM, and cloud incident response.",
    duration: "2 Years",
    level: "Postgraduate",
    image: "/Courses/2.png",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 980,
    price: 240000,
    originalPrice: 280000,
    emi: "10,000",
    sectionLabel: "Degree",
    sectionId: "degree",
    topics: ["Zero Trust Architecture", "Cloud Security", "IAM & PAM", "Threat Intelligence", "Red Team Ops"],
  },
  {
    id: 5,
    title: "Diploma in Cybersecurity",
    slug: "diploma-in-cybersecurity",
    description: "Python and tooling for automation, analysis, and tooling.",
    duration: "12 Months",
    level: "Intermediate",
    image: "/Courses/12.png",
    badge: null,
    rating: 4.7,
    reviews: 3120,
    price: 110000,
    originalPrice: 120000,
    emi: "9,167",
    sectionLabel: "Diploma",
    sectionId: "diploma",
    topics: ["Threat Hunting", "SIEM & SOC", "Digital Forensics", "Incident Response", "Compliance & GRC"],
  },
];

export async function generateStaticParams() {
  return allCourses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = allCourses.find((c) => c.slug === slug);
  if (!course) return { title: "Course Not Found | NIHACS" };
  return {
    title: `${course.title} | NIHACS`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      url: `https://nihacs.com/courses/${course.slug}`,
    },
  };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;

  const course = allCourses.find((c) => c.slug === slug);
  if (!course) notFound();

  const related = allCourses
    .filter((c) => c.sectionId === course.sectionId && c.slug !== course.slug)
    .slice(0, 3);

  return (
    <>
      <CourseModule course={course}  related={related}/>
      <HeroSection course={course} />
      
    </>
  );
}