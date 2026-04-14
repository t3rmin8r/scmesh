import type { LinkCard, NavItem } from "../types/content";

export const site = {
  name: "South Carolina Mesh",
  shortName: "SCMesh",
  title: "South Carolina Mesh Community Network",
  description:
    "A community-powered, off-grid communication network for South Carolina.",
  tagline: "Community-driven mesh communications, documented clearly and hosted simply.",
  repoName: "scmesh",
  footerText:
    ""
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
