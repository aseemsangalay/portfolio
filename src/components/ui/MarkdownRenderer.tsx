"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ComponentPropsWithoutRef } from "react";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
          <h2
            {...props}
            className="text-xl md:text-2xl font-sans font-bold tracking-tight text-[#111] uppercase mt-16 mb-6 pt-8 border-t border-[#d8d4cf]"
          >
            {children}
          </h2>
        ),
        h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
          <h3
            {...props}
            className="text-lg md:text-xl font-sans font-bold tracking-tight text-[#111] uppercase mt-10 mb-4"
          >
            {children}
          </h3>
        ),
        p: ({ children, ...props }: ComponentPropsWithoutRef<"p">) => (
          <p
            {...props}
            className="text-[16px] md:text-[17px] font-sans text-[#333] leading-[1.8] mb-6"
          >
            {children}
          </p>
        ),
        strong: ({ children, ...props }: ComponentPropsWithoutRef<"strong">) => (
          <strong {...props} className="font-bold text-[#111]">
            {children}
          </strong>
        ),
        em: ({ children, ...props }: ComponentPropsWithoutRef<"em">) => (
          <em {...props} className="font-serif italic text-[#444]">
            {children}
          </em>
        ),
        ul: ({ children, ...props }: ComponentPropsWithoutRef<"ul">) => (
          <ul {...props} className="mb-6 space-y-2 pl-6 list-disc marker:text-[#bbb]">
            {children}
          </ul>
        ),
        ol: ({ children, ...props }: ComponentPropsWithoutRef<"ol">) => (
          <ol {...props} className="mb-6 space-y-2 pl-6 list-decimal marker:text-[#bbb]">
            {children}
          </ol>
        ),
        li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => (
          <li
            {...props}
            className="text-[16px] md:text-[17px] font-sans text-[#333] leading-[1.8]"
          >
            {children}
          </li>
        ),
        blockquote: ({ children, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
          <blockquote
            {...props}
            className="border-l-4 border-[#111] pl-6 my-8 text-[#555] font-serif italic text-lg leading-relaxed"
          >
            {children}
          </blockquote>
        ),
        hr: ({ ...props }: ComponentPropsWithoutRef<"hr">) => (
          <hr {...props} className="my-12 border-none border-t border-[#d8d4cf]" />
        ),
        code: ({ children, className, ...props }: ComponentPropsWithoutRef<"code">) => {
          const isBlock = className?.startsWith("language-");
          if (isBlock) {
            return (
              <code
                {...props}
                className={`${className ?? ""} block w-full text-[13px] font-mono text-[#1a1a1a] leading-relaxed`}
              >
                {children}
              </code>
            );
          }
          return (
            <code
              {...props}
              className="font-mono text-[13px] text-[#111] bg-[#111]/[0.06] px-1.5 py-0.5 rounded"
            >
              {children}
            </code>
          );
        },
        pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
          <pre
            {...props}
            className="bg-[#ebe8e0] border border-[#ccc9c2] rounded-lg px-6 py-5 my-8 overflow-x-auto text-[13px] font-mono leading-relaxed"
          >
            {children}
          </pre>
        ),
        a: ({ children, href, ...props }: ComponentPropsWithoutRef<"a">) => (
          <a
            {...props}
            href={href}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-[#111] underline underline-offset-2 decoration-[#bbb] hover:decoration-[#111] transition-colors"
          >
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
