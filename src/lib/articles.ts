import type { EntryFieldTypes } from "contentful";
import { contentfulClient } from "./contentful";

export interface Articles {
  contentTypeId: "articles",
  fields: {
    slug: EntryFieldTypes.Text,
    title: EntryFieldTypes.Text,
    dexcription: EntryFieldTypes.Text,
    date: EntryFieldTypes.Date,
    cover: EntryFieldTypes.AssetLink,
    linktype: EntryFieldTypes.Text,
    link: EntryFieldTypes.Text,
    content: EntryFieldTypes.Text,
  }
}

export async function getArticles() 
{
  return await contentfulClient.getEntries<Articles>({
    content_type: "articles",
  });
}

export async function getArticleBySlug(slug: string) 
{
  const entries = await contentfulClient.getEntries<Articles>({
    content_type: "articles",
  });
  return entries.items.find((entry) => entry.fields.slug === slug);
}