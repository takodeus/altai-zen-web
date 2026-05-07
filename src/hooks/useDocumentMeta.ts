import { useEffect } from "react";

type MetaTag = {
  name?: string;
  property?: string;
  content: string;
};

type DocumentMeta = {
  title: string;
  meta?: MetaTag[];
};

function setMetaTag(tag: MetaTag) {
  const selector = tag.name
    ? `meta[name="${tag.name}"]`
    : `meta[property="${tag.property}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    if (tag.name) element.setAttribute("name", tag.name);
    if (tag.property) element.setAttribute("property", tag.property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", tag.content);
}

export function useDocumentMeta({ title, meta = [] }: DocumentMeta) {
  useEffect(() => {
    document.title = title;
    meta.forEach(setMetaTag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, JSON.stringify(meta)]);
}
