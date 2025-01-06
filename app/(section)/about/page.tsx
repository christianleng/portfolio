import { getPostBySlug } from "@/lib/loadSections";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function AboutPage() {
  const post = await getPostBySlug("about");
  if (!post) notFound();

  return (
    <div className="pe-8 ps-8 prose mx-auto" id="about">
      <MDXRemote source={post.content} />
    </div>
  );
}
