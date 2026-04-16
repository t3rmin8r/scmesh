import { placeholderLinks, site } from "./site";
import type { LinkCard } from "../types/content";

export const homeHeroLinks: LinkCard[] = [
  {
    label: "Start With About",
    href: "/about/",
    description: "Understand the mission and operating model first."
  },
  {
    label: "See the Config",
    href: "/lora-config/",
    description: "Review the placeholder radio profile and deployment notes."
  }
];

export const homeCards: LinkCard[] = [
  {
    label: "About the Network",
    href: "/about/",
    description: "Mission, operating model, and participation expectations."
  },
  {
    label: "Get Involved",
    href: "/get-involved/",
    description: "Join the community, volunteer, or host infrastructure."
  },
  {
    label: "LoRa Configuration",
    href: "/lora-config/",
    description: "Publish the reviewed local device settings here."
  },
  {
    label: "Channel Plan",
    href: "/channels/",
    description: "Explain channel purposes, onboarding, and reserved traffic."
  },
  {
    label: "EAS System",
    href: "/eas-system/",
    description: "Document high-priority alerting workflows and coverage."
  },
  {
    label: "MQTT Server",
    href: "/mqtt-server/",
    description: "Describe optional connected transport settings safely."
  },
  {
    label: "Mesh Info",
    href: "/mesh-info/",
    description: "Link maps, dashboards, and service status resources."
  }
];

export const homeHighlights = [
  "Multi-page static site structure designed for GitHub Pages.",
  "Typed content files keep operational values out of templates.",
  "All domain-specific links and credentials remain explicit placeholders until replaced."
];

export const homeQuickLinks: LinkCard[] = [
  {
    label: "Community Invite Placeholder",
    href: placeholderLinks.communityInvite,
    description: "Replace with your public onboarding channel.",
    external: true
  },
  {
    label: "Status Placeholder",
    href: placeholderLinks.statusPage,
    description: "Replace with your operational status page.",
    external: true
  }
];

export const homeIntro = `The ${site.name} community provides a maintainable structure for publishing local mesh-network guidance. Our goal is to create the learning environment for new-comers and share ideas in hardware, deploying infrastructure, and sharing experiences. We are always looking for help or assistance.`;
