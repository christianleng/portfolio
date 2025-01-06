import { getPostBySlug } from "@/lib/loadSections";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function SkillsPage() {
  const post = await getPostBySlug("skills");
  if (!post) notFound();

  return (
    <div className="pe-8 ps-8 prose mx-auto">
      <MDXRemote source={post.content} />
    </div>
  );
}
