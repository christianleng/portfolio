import { getPostBySlug } from "@/lib/loadSections";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function ExperienceEatsEazy() {
  const post = await getPostBySlug("eatseazy");
  if (!post) notFound();

  return (
    <div className="pe-8 ps-8 prose mx-auto" id="experience">
      <MDXRemote source={post.content} />
      <Link
        href={`/${post.url}`}
        className="text-greenShadow4 hover:text-greenShadow3"
      >
        Voir plus sur les missions réalisées
      </Link>
    </div>
  );
}
