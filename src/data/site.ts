import type { LinkCard, NavItem } from "../types/content";

export const site = {
  name: "SCMesh",
  shortName: "SCMesh",
  title: "SCMesh Community Network",
  description:
    "A maintainable multi-page static site for a local Meshtastic-style community network.",
  tagline: "Community-driven mesh communications, documented clearly and hosted simply.",
  repoName: "scmesh",
  footerText:
    "SCMesh is a community-maintained resource site. Replace placeholder values before publishing operational details."
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/get-involved/", label: "Get Involved" },
  { href: "/lora-config/", label: "LoRa Config" },
  { href: "/channels/", label: "Channels" },
  { href: "/eas-system/", label: "EAS System" },
  { href: "/mqtt-server/", label: "MQTT Server" },
  { href: "/mesh-info/", label: "Mesh Info" }
];

export const footerLinks: LinkCard[] = [
  {
    label: "Meshtastic Hardware",
    href: "https://meshtastic.org/docs/hardware/devices/",
    description: "Reference compatible devices before recommending local hardware.",
    external: true
  },
  {
    label: "Meshtastic Docs",
    href: "https://meshtastic.org/docs/",
    description: "General documentation for setup and troubleshooting.",
    external: true
  },
  {
    label: "GitHub Pages Guide",
    href: "https://docs.github.com/pages",
    description: "Deployment reference for the static hosting pipeline.",
    external: true
  }
];

export const placeholderLinks = {
  communityInvite: "https://example.com/community-invite",
  volunteerForm: "https://example.com/volunteer-signup",
  nodeMap: "https://example.com/mesh-map",
  statusPage: "https://example.com/network-status",
  dashboard: "https://example.com/mesh-dashboard",
  mqttHost: "mqtt.example.net"
};
