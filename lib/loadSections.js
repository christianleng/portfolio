import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app/content");

export const getPosts = async () => {
  const files = await fs.readdir(postsDirectory);
  const fileNames = files.filter((f) => f.endsWith(".mdx"));

  const posts = [];
  for await (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = await fs.readFile(fullPath, "utf-8");
    const frontmatter = matter(fileContent);

    const { title, description, url } = frontmatter.data;
    if (typeof title !== "string") {
      console.error(
        `Erreur de parsing dans le fichier ${fileName}: "title" doit être une chaîne`
      );
      continue;
    }

    posts.push({
      title,
      description,
      url,
      slug: fileName.replace(".mdx", ""),
      content: frontmatter.content,
    });
  }

  return posts;
};

export const getPostBySlug = async (slug) => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  try {
    const fileContent = await fs.readFile(fullPath, "utf-8");
    const frontmatter = matter(fileContent);

    const { title, description, url } = frontmatter.data;
    if (typeof title !== "string") {
      console.error(`Erreur de parsing dans le fichier ${slug}`);
      return null;
    }

    return {
      title,
      description,
      url,
      slug,
      content: frontmatter.content,
    };
  } catch (error) {
    console.error(`Erreur lors du chargement du fichier ${slug}:`, error);
    return null;
  }
};

export const getPost = async (slug) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};
