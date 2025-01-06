import { getPosts } from "@/lib/loadSections";
import About from "./(section)/about/page";
import Homepage from "./(section)/home/page";
import ExperienceDjob from "./(section)/experience/(experience-djob)/page";
import ExperienceEatsEazy from "./(section)/experience/(experience-eatseazy)/page";
import SkillsPage from "./(section)/skills/page";
import ProjectPage from "./(section)/project/page";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-16">
      <Homepage />
      <About />
      <ExperienceDjob />
      <ExperienceEatsEazy />
      <SkillsPage />
    </div>
  );
}
