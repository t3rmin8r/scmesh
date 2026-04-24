import type { PageContent } from "../../types/content";

const loraConfigPage: PageContent = {
  title: "LoRa Configuration",
  description: "Baseline radio settings and operating guidance for onboarding compatible devices to the network.",
  intro: "Use conservative defaults and role-appropriate routing so new nodes help the mesh instead of creating avoidable congestion.Choose the right device role first, then keep hop counts and reporting intervals conservative so the mesh stays stable as it grows.",
  heroEyebrow: "Device setup",
  heroBody:
    "Choose the right device role first, then keep hop counts and reporting intervals conservative so the mesh stays stable as it grows.",
  sections: [
    {
      title: "SC MESH LoRa Config",
      configItems: [
        { label: "Radio Settings", value: "LoRa" },
        { label: "OK to MQTT", value: "ON" },
        { label: "CHANNEL", value: "SCMesh" },
        { label: "Region", value: "United States" }
      ],
      callout: {
        title: "Start here, then apply the best practices below",
        body: "Use these baseline radio values together with the role, hop, and reporting recommendations below so new nodes join the mesh cleanly.",
        tone: "info"
      }
    },
    {
      title: "Best practices",
      bullets: [
        {
          title: "Device Role",
          items: [
            "For mobile nodes, inside-the-house nodes, or nodes used while flying, use Client_Mute.",
            "For stationary home roof nodes, use Client or Client_Base.",
            "Ask before using other roles, because improperly configured routes can break the mesh."
          ]
        },
        {
          title: "Hop count",
          items: [
            "Use 5-7 hops as a general default.",
            "In bigger meshes, 3-5 hops is recommended."
          ]
        },
        {
          title: "Reporting intervals",
          items: [
            "Set the broadcast info packet interval to a minimum of 6 hours.",
            "Set position and telemetry to no less than 6 hours to prevent congestion.",
            "For mobile nodes, enable Smart Position and set minimum distance to 100 meters."
          ]
        }
      ],
      callout: {
        title: "Ask before choosing other roles",
        body: "If you think a node needs a role other than Client_Mute, Client, or Client_Base, check with the mesh operators first. Improperly configured routes can break the mesh.",
        tone: "warning"
      }
    },
    {
      title: "MQTT bridge channel settings",
      configItems: [
        { label: "Radio / LoRa / OK to MQTT", value: "ON" },
        { label: "Radio / Channels", value: "Click Add Channel" },
        { label: "Name", value: "SCMesh" },
        { label: "Key Size", value: "Default" },
        { label: "Key", value: "AQ==" },
        { label: "Channel Role", value: "Secondary" },
        { label: "Position", value: "ON", detail: "Approximate location: 1.8 miles." },
        { label: "MQTT Uplink", value: "ON" },
        { label: "MQTT Downlink", value: "ON" }
      ],
      callout: {
        title: "Use downlink on the secondary channel only",
        body: "This secondary channel is where downlink belongs. Avoid treating that as guidance for the primary channel, where downlink is still discouraged.",
        tone: "warning"
      }
    },
    {
      title: "Range test",
      paragraphs: [
        "Range test is a misleading feature on a live mesh. It sends traffic on the primary channel using the sequence count configured on the node.",
        "While it sounds useful for one-way testing, in practice it creates spam and congestion on the primary channel."
      ],
      callout: {
        title: "Do not use range test casually",
        body: "Treat range test as disruptive traffic on production networks and avoid using it unless the operators have explicitly asked for it.",
        tone: "warning"
      }
    }
  ]
};

export default loraConfigPage;
