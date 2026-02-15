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

const getRepoRootBase = (baseGithubUrl: string) => {
  try {
    const baseUrl = new URL(baseGithubUrl);
    const parts = baseUrl.pathname.split("/").filter(Boolean);

    const blobIndex = parts.indexOf("blob");
    const treeIndex = parts.indexOf("tree");
    const index = blobIndex !== -1 ? blobIndex : treeIndex;

    if (index !== -1 && parts.length > index + 1) {
      const rootPath = parts.slice(0, index + 2).join("/");
      baseUrl.pathname = `/${rootPath}/`;
      return baseUrl.toString();
    }
  } catch {
    return baseGithubUrl.endsWith("/") ? baseGithubUrl : `${baseGithubUrl}/`;
  }

  return baseGithubUrl.endsWith("/") ? baseGithubUrl : `${baseGithubUrl}/`;
};

export default function remarkGithubLinks(options: Options) {
  const base = options.baseGithubUrl.endsWith("/")
    ? options.baseGithubUrl
    : `${options.baseGithubUrl}/`;

  const repoRootBase = getRepoRootBase(base);

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

      const baseForLink = relative.startsWith("/") ? repoRootBase : base;

      if (relative.startsWith("/")) {
        relative = relative.slice(1);
      }

      try {
        node.url = new URL(relative, baseForLink).toString();
      } catch {
        return;
      }
    });
  };
}
