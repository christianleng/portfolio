import { getPost, getPosts } from "@/lib/loadSections";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ExperienceDjob(props: {
  params: { slug: string };
}) {
  const post = await getPost(props.params.slug);
  if (!post) notFound();

  return (
    <div className="pe-8 ps-8 prose mx-auto">
      <MDXRemote source={post.content} />
    </div>
  );
}
