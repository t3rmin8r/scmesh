import type { PageContent } from "../../types/content";
import { placeholderLinks } from "../site";

const mqttServerPage: PageContent = {
  title: "MQTT Server",
  description: "Guidance for using MQTT as an optional bridge without creating unnecessary downlink traffic.",
  intro: [
    { type: "text", value: "Use these settings to connect to our MQTT Server and review the " },
    { type: "link", label: "node dashboard", href: placeholderLinks.dashboard },
    { type: "text", value: " before enabling additional transport features." }
  ],
  heroEyebrow: "Connected transport",
  heroBody:
    "Treat MQTT as a supplement to RF, not a replacement for it. Channel direction settings matter, especially on the primary channel.",
  sections: [
    {
      title: "Radio: SETTINGS",
      configItems: [{ label: "OK to MQTT", value: "ON" }],
      callout: {
        title: "MQTT is Optional",
        body: "Use these settings to connect to our MQTT Server:",
        tone: "info"
      },
      subsections: [
        {
          title: "Radio: CHANNELS",
          paragraphs: [
            "If a device needs something outside these defaults, check with the mesh operators before saving the changes. \n",
            "Click (+) Add Channel"
          ],
          configItems: [
            { label: "Name:", value: "SCMesh" },
            { label: "Key Size:", value: "Default" },
            { label: "Key:", value: "AQ==" },
            { label: "Channel Role:", value: "Seconday"},
            { label: "Position", value: "ON", detail: "Approximate location: 1.8 miles." },
            { label: "MQTT Uplink", value: "ON" },
            { label: "MQTT Downlink", value: "ON" }
          ],
        }
      ]
    },
    {
      title: "Rules of thumb",
      configItems: [
        { label: "Primary Channel Downlink", value: "Discouraged" },
        { label: "Primary Channel Uplink", value: "ON" },
        { label: "Secondary Channel Downlink", value: "ON" },
        { label: "Secondary Channel Uplink", value: "ON" }
      ],
      callout: {
        title: "Be careful with primary channel downlink",
        body: "Primary channel downlink can add unnecessary traffic and should generally be avoided unless operators have a specific reason to enable it.",
        tone: "warning"
      }
    },
    {
      title: "When to use MQTT",
      bullets: [
        {
          items: [
            "Use it for bridging isolated nodes, extending transport where internet-backed relays are intentional, or supporting designated infrastructure nodes.",
            "Keep uplink enabled where you want RF traffic forwarded to the MQTT side.",
            "Reserve downlink for secondary channels when you want traffic to flow back into RF without adding unnecessary load to the primary channel."
          ]
        }
      ]
    },
    {
      title: "Map report",
      bullets: [
        {
          items: [
            "Leave Map Report OFF by default.",
            "Turning it ON is encouraged when you want to identify gaps in the mesh.",
            "If enabled, consent to voluntary transmission, set Map Publish Interval to 1-3 hours, and set approximate location to 1.8 miles."
          ]
        }
      ]
    }
  ]
};

export default mqttServerPage;
