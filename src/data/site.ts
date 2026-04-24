import type { LinkCard, NavItem } from "../types/content";

export const site = {
  name: "South Carolina Mesh",
  shortName: "SC Mesh",
  title: "South Carolina Mesh Community Network",
  description:
    "A community-powered, off-grid communication network for South Carolina.",
  tagline: "Community-driven mesh communications.",
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
    description: "General documentation for setup and troubleshooting from the source.",
    external: true
  },
];

export const placeholderLinks = {
  communityInvite: "https://discord.gg/ZVtQeThnPU",
  volunteerForm: "https://example.com/volunteer-signup",
  nodeMap: "https://meshview.scmesh.us/map",
  statusPage: "https://meshview.scmesh.us/stats",
  dashboard: "https://meshview.scmesh.us/nodelist",
  NodeList: "https://meshview.scmesh.us/nodelist",
  mqttHost: "mqtt.example.net"
};
