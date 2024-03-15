import BaseMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

/**
 * Drop-in replacement for the Markdown component in react-markdown, but with
 * plugins configured
 */
export function Markdown(options: Parameters<typeof BaseMarkdown>[0]) {
  const rehypePlugins = [
    ...(options.rehypePlugins ? options.rehypePlugins : []),
    rehypeRaw,
  ];
  return <BaseMarkdown {...options} rehypePlugins={rehypePlugins} />;
}
