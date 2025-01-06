import path from "path";
import fs from "fs/promises";
import z from "zod";
import matter from "gray-matter";

const postSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  url: z.string().optional(),
});

type Post = z.infer<typeof postSchema> & {
  slug: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "app/content");

export const getPosts = async () => {
  const files = await fs.readdir(postsDirectory);
  const fileNames = files.filter((f) => f.endsWith(".mdx"));

  const posts: Post[] = [];
  for await (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = await fs.readFile(fullPath, "utf-8");
    const frontmatter = matter(fileContent);

    const safeData = postSchema.safeParse(frontmatter.data);
    if (!safeData.success) {
      console.error(
        `Erreur de parsing dans le fichier ${fileName}`,
        safeData.error
      );
      continue;
    }

    posts.push({
      ...safeData.data,
      slug: fileName.replace(".mdx", ""),
      content: frontmatter.content,
    });
  }

  return posts;
};

export const getPostBySlug = async (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  try {
    const fileContent = await fs.readFile(fullPath, "utf-8");
    const frontmatter = matter(fileContent);

    const safeData = postSchema.safeParse(frontmatter.data);
    if (!safeData.success) {
      console.error(
        `Erreur de parsing dans le fichier ${slug}`,
        safeData.error
      );
      return null;
    }

    return {
      ...safeData.data,
      slug,
      content: frontmatter.content,
    };
  } catch (error) {
    console.error(`Erreur lors du chargement du fichier ${slug}:`, error);
    return null;
  }
};

export const getPost = async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};
