import { getPostBySlug } from "@/lib/loadSections";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function ProjectPage() {
  const post = await getPostBySlug("project");
  if (!post) notFound();

  return (
    <div className="py-16 pe-8 ps-8 ">
      <div className="prose mx-auto">
        <MDXRemote source={post.content} />
      </div>
    </div>
  );
}
