import { placeholderLinks } from "../site";
import type { PageContent } from "../../types/content";

const mqttServerPage: PageContent = {
  title: "MQTT Server",
  description: "Document the optional MQTT bridge settings for clients or routers that need connected transport.",
  intro: "If your network uses MQTT as an optional bridge, keep the public instructions concise and clearly separate placeholders from active production values.",
  heroEyebrow: "Connected transport",
  heroBody:
    "MQTT support is optional. Operators should understand when it improves coverage, what security expectations apply, and which values are examples versus production settings.",
  sections: [
    {
      title: "Placeholder public settings",
      configItems: [
        { label: "Host", value: placeholderLinks.mqttHost },
        { label: "Port", value: "1883" },
        { label: "Encryption (not TLS)", value: "Yes" },
        { label: "Username", value: "replace-me" },
        { label: "Password", value: "replace-me-securely" },
        { label: "Root Topic", value: "msh/REGION/NETWORK" }
      ],
      callout: {
        title: "Do not publish secrets by default",
        body: "If the bridge requires credentials, treat the public site as a distribution point for approved public values only. Anything sensitive should be distributed through the community’s private onboarding process.",
        tone: "warning"
      }
    },
    {
      title: "When to use MQTT",
      bullets: [
        {
          items: [
            "Use it for bridging isolated nodes, lab testing, or designated routers when that aligns with your community policy.",
            "Avoid presenting MQTT as mandatory if local RF participation is the primary goal."
          ]
        }
      ]
    }
  ]
};

export default mqttServerPage;
