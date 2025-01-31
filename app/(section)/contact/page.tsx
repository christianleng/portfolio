import { getPostBySlug } from "@/lib/loadSections";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import React from "react";

const Contact = async () => {
  const post = await getPostBySlug("contact");
  if (!post) notFound();

  return (
    <>
      <div className="pe-8 ps-8 prose mx-auto w-full" id="contact">
        <div className="my-4 h-px bg-dark" />
        <MDXRemote source={post.content} />
      </div>
    </>
  );
};

export default Contact;
