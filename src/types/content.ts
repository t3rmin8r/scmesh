export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export type InlineTextNode = {
  type: "text";
  value: string;
};

export type InlineLinkNode = {
  type: "link";
  label: string;
  href: string;
  external?: boolean;
};

export type InlineContent = string | Array<InlineTextNode | InlineLinkNode>;

export type LinkCard = {
  label: string;
  href: string;
  description: string;
  external?: boolean;
};

export type ConfigItem = {
  label: string;
  value: InlineContent;
  detail?: InlineContent;
};

export type CalloutTone = "info" | "warning" | "success";

export type Callout = {
  title: string;
  body: InlineContent;
  tone?: CalloutTone;
};

export type MediaAsset = {
  src: string;
  alt: string;
  caption: InlineContent;
};

export type BulletGroup = {
  title?: string;
  items: InlineContent[];
};

export type SubsectionBlock = {
  title: string;
  paragraphs?: InlineContent[];
  bullets?: BulletGroup[];
  callout?: Callout;
  configItems?: ConfigItem[];
};

export type SectionBlock = {
  title: string;
  paragraphs?: InlineContent[];
  bullets?: BulletGroup[];
  callout?: Callout;
  configItems?: ConfigItem[];
  links?: LinkCard[];
  media?: MediaAsset;
  subsections?: SubsectionBlock[];
};

export type PageContent = {
  title: string;
  description: string;
  intro: InlineContent;
  heroEyebrow: string;
  heroBody: InlineContent;
  heroLinks?: LinkCard[];
  sections: SectionBlock[];
};

export type ChannelRow = {
  name: string;
  role: string;
  purpose: string;
};
