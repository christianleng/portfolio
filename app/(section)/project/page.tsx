import { getPostBySlug } from "@/lib/loadSections";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function ProjectPage() {
  const post = await getPostBySlug("project");
  if (!post) notFound();

  return (
    <div className="pe-8 ps-8 prose mx-auto" id="project">
      <MDXRemote source={post.content} />
    </div>
  );
}
