import { placeholderLinks } from "../site";
import type { PageContent } from "../../types/content";

const meshInfoPage: PageContent = {
  title: "Mesh Info",
  description: "Publish maps, dashboards, and status resources that help members understand the current network.",
  intro: "This page collects optional supporting resources such as node maps, dashboards, and service status views.",
  heroEyebrow: "Operational visibility",
  heroBody:
    "Use external dashboards sparingly and describe what each one is meant to answer so members know where to look first.",
  heroLinks: [
    {
      label: "Mesh Map",
      href: placeholderLinks.nodeMap,
      description: "Replace with your live or read-only node map.",
      external: true
    },
    {
      label: "Status Page",
      href: placeholderLinks.statusPage,
      description: "Replace with your network or service status URL.",
      external: true
    },
    {
      label: "Dashboard",
      href: placeholderLinks.dashboard,
      description: "Replace with your metrics or topology dashboard.",
      external: true
    }
  ],
  sections: [
    {
      title: "What to publish here",
      bullets: [
        {
          items: [
            "A map or view that helps members understand general coverage or node distribution.",
            "A lightweight status view if you operate optional services such as MQTT or dashboards.",
            "A short disclaimer describing how often each resource is updated."
          ]
        }
      ]
    },
    {
      title: "Publishing guidance",
      callout: {
        title: "Avoid overstating accuracy",
        body: "Maps and dashboards are often delayed, partial, or filtered. Make it clear when a view is advisory rather than authoritative.",
        tone: "info"
      },
      paragraphs: [
        "If a dashboard is experimental or incomplete, label it explicitly so members understand it may be unavailable without notice."
      ]
    }
  ]
};

export default meshInfoPage;
