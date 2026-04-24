import type { PageContent } from "../../types/content";

const mqttServerPage: PageContent = {
  title: "MQTT Server",
  description: "Guidance for using MQTT as an optional bridge without creating unnecessary downlink traffic.",
  intro: "MQTT is optional. Keep the bridge settings conservative so connected transport helps coverage without flooding the RF side of the mesh.",
  heroEyebrow: "Connected transport",
  heroBody:
    "Treat MQTT as a supplement to RF, not a replacement for it. Channel direction settings matter, especially on the primary channel.",
  sections: [
    {
      title: "Server settings",
      configItems: [
        { label: "Enabled", value: "ON" },
        {
          label: "MQTT Client Proxy",
          value: "ON if using cellphone",
          detail: "If the node is connected to Wi-Fi, leave this off."
        },
        { label: "Encryption Enabled", value: "ON" },
        { label: "JSON Enabled", value: "OFF" },
        { label: "Root Topic", value: "msh/US/SC" },
        { label: "Server Address", value: "mqtt.scmesh.us" },
        { label: "Username", value: "scmesh" },
        { label: "Password", value: "Meshtastical" },
        { label: "TLS Enabled", value: "OFF" }
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
