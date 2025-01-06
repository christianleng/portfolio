import { getPost } from "@/lib/loadSections";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function ExperienceDjob(props: {
  params: { slug: string };
}) {
  const post = await getPost(props.params.slug);
  if (!post) notFound();
  console.log("post;;=>", post);

  return (
    <div>
      <h1>{post.title}</h1>
      <h1>{post.description}</h1>
      <MDXRemote source={post.content} />
    </div>
  );
}
