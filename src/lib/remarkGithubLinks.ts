import { visit } from "unist-util-visit";

type Options = {
  baseGithubUrl: string;
};

const isRelativeUrl = (url: string) => {
  if (url.startsWith("#") || url.startsWith("mailto:")) {
    return false;
  }

  if (/^[a-z][a-z0-9+.-]*:/i.test(url)) {
    return false;
  }

  if (url.startsWith("//")) {
    return false;
  }

  return true;
};

export default function remarkGithubLinks(options: Options) {
  const base = options.baseGithubUrl.endsWith("/")
    ? options.baseGithubUrl
    : `${options.baseGithubUrl}/`;

  return (tree: unknown) => {
    visit(tree, ["link", "image"], (node: { url?: string }) => {
      const url = node.url;
      if (!url || typeof url !== "string") {
        return;
      }

      if (!isRelativeUrl(url)) {
        return;
      }

      let relative = url;
      if (relative.startsWith("./")) {
        relative = relative.slice(2);
      }

      if (relative.startsWith("/")) {
        relative = relative.slice(1);
      }

      try {
        node.url = new URL(relative, base).toString();
      } catch {
        return;
      }
    });
  };
}