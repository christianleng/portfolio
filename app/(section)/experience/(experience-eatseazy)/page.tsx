import { getPostBySlug } from "@/lib/loadSections";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function ExperienceEatsEazy() {
  const post = await getPostBySlug("experience-eatseazy");
  if (!post) notFound();

  return (
    <div className="pe-8 ps-8 prose mx-auto">
      <MDXRemote source={post.content} />
      <Link href={`/experiences/${post.slug}`}>
        Voir plus sur les missions réalisées
      </Link>
    </div>
  );
}
