export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export type LinkCard = {
  label: string;
  href: string;
  description: string;
  external?: boolean;
};

export type ConfigItem = {
  label: string;
  value: string;
  detail?: string;
};

export type CalloutTone = "info" | "warning" | "success";

export type Callout = {
  title: string;
  body: string;
  tone?: CalloutTone;
};

export type MediaAsset = {
  src: string;
  alt: string;
  caption: string;
};

export type BulletGroup = {
  title?: string;
  items: string[];
};

export type SectionBlock = {
  title: string;
  paragraphs?: string[];
  bullets?: BulletGroup[];
  callout?: Callout;
  configItems?: ConfigItem[];
  links?: LinkCard[];
  media?: MediaAsset;
};

export type PageContent = {
  title: string;
  description: string;
  intro: string;
  heroEyebrow: string;
  heroBody: string;
  heroLinks?: LinkCard[];
  sections: SectionBlock[];
};

export type ChannelRow = {
  name: string;
  role: string;
  purpose: string;
};
