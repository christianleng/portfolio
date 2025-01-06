import { getPostBySlug } from "@/lib/loadSections";
import { notFound } from "next/navigation";

export default async function Homepage() {
  const post = await getPostBySlug("home");
  if (!post) notFound();

  return (
    <div className="mt-24 flex flex-col items-center text-center relative">
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[60%] h-[50%] bg-gradient-to-br from-greenShadow4 via-greenShadow3 to-greenShadow4 blur-3xl opacity-50"></div>
      </div>

      <p className="text-7xl relative text-black z-10">{post.title}</p>
      <div className="relative mt-4 flex flex-col items-center">
        <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">
          {post.description}
        </p>
        <div className="relative flex items-center">
          <div className="w-72 h-[1px] bg-dark rounded-lg"></div>
          <div className="absolute h-10 w-[1px] bg-dark left-5 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
