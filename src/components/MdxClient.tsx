"use client";

import React from "react";

interface MdxClientProps {
  slug: string;
}

type MDXComponentType = React.ComponentType<Record<string, unknown>>;

const Noop: MDXComponentType = () => null;

export default function MdxClient({ slug }: MdxClientProps) {
  const [Comp, setComp] = React.useState<MDXComponentType | null>(null);

  React.useEffect(() => {
    let mounted = true;
    async function load() {
      let mod: { default: MDXComponentType };
      switch (slug) {
        case "what-2-years-in-tech-taught-me-about-scaling":
          mod = (await import("@/content/blog/what-2-years-in-tech-taught-me-about-scaling.mdx")) as unknown as {
            default: MDXComponentType;
          };
          break;
        default:
          mod = { default: Noop };
      }
      if (mounted) setComp(() => mod.default);
    }
    load();
    return () => {
      mounted = false;
    };
  }, [slug]);

  if (!Comp) return null;
  return <Comp />;
}
