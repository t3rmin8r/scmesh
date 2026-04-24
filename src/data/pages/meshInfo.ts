import { placeholderLinks } from "../site";
import type { PageContent } from "../../types/content";

const meshInfoPage: PageContent = {
  title: "Mesh Info",
  description: "Publish maps, dashboards, and status resources that help members understand the current network.",
  intro: "",
  heroEyebrow: "Operational visibility",
  heroBody:
    "Meshview is an external site that shows maps, node activity, and real-time data from the South Carolina Meshtastic mesh network.",
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
      title: "What these links show",
      bullets: [
        {
          title: "Mesh Map",
          items: [
            "Use this view to see the general geographic distribution of reporting nodes across the mesh.",
            "It is useful for understanding relay placement, broad coverage patterns, and where gaps may exist."
          ]
        },
        {
          title: "Status Page",
          items: [
            "Use this view for a quick look at the health and activity of the mesh data service.",
            "It helps answer whether the supporting services appear to be updating normally."
          ]
        },
        {
          title: "Dashboard",
          items: [
            "Use this view for node-by-node visibility into the mesh.",
            "It is helpful for checking active devices, recent activity, and other high-level network details."
          ]
        }
      ],
      callout: {
        title: "Treat Meshview as advisory",
        body: "Positions, node details, and activity views may be delayed, incomplete, or intentionally approximate. Use them to understand the network, not as a guarantee of current RF conditions.",
        tone: "info"
      }
    },
    /*{
      title: "Here be a template section",
      bullets: [
        {
          items: [
            "He who works with his hands is a laborer",
            "He who works with his hands & his head is a Craftsman",
            "He who works with his hands, his head & his heart is an ARTIST"
          ]
        }
      ]
    },*/
  ]
};

export default meshInfoPage;
