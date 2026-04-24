import type { PageContent } from "../../types/content";

const loraConfigPage: PageContent = {
  title: "LoRa Configuration",
  description: "Baseline radio settings and operating guidance for onboarding compatible devices to the network.",
  intro: "Use conservative defaults and role-appropriate routing so new nodes help the mesh instead of creating avoidable congestion.",
  heroEyebrow: "Device setup",
  heroBody:
<<<<<<< HEAD
    "These values are a work in progress as I need to confirm these before deployment.",
=======
    "Choose the right device role first, then keep hop counts and reporting intervals conservative so the mesh stays stable as it grows.",
>>>>>>> d40ebc6 (pushing untracked changes: Chore: updating the lorConf and mqttServer setting areas)
  sections: [
    {
      title: "SC MESH LoRa Config",
      configItems: [
        { label: "Radio Settings", value: "LoRa" },
        { label: "OK to MQTT", value: "ON" },
        { label: "CHANNEL", value: "SCMesh" },
<<<<<<< HEAD
        { label: "Region", value: "United States" },
        { label: "Hop Limit", value: "3-7", detail: "Tune to your terrain and relay density." },
        { label: "TX Enabled", value: "True" },
        { label: "TX Power", value: "30", detail: "Confirm legal and hardware-safe operation for your devices." },
        { label: "Frequency Slot", value: "20" },
        { label: "Override Duty Cycle", value: "True" },
        { label: "Override Frequency", value: "Replace with local value" },
        { label: "Ignore MQTT", value: "False" },
        { label: "OK to MQTT", value: "True" }

/*Radio Settings/LoRa
OK to MQTT - ON
Radio Settings/Channels
Click to Add Channel
Name: SCMesh
Key Size: Default (8bit)
Key: AQ==
Channel Role: Secondary
Position: ON, 1.8 miles
MQTT: Uplink ON, Downlink ON
Module Settings/MQTT
Enabled: ON
MQTT Client Proxy: ON if using cellphone. (if node connected to wifi, leave this off)
Encryption Enabled: ON
JSON Enabled: OFF
Map Report
Enabled: ON
Consent to voluntary transmission ON
Set Map Publish Interval to 1-3 hours
Approximate location: 1.8 miles
Root Topic
Root topic: msh/US/SC
Server
Address: mqtt.scmesh.us
Username: scmesh
Password: Meshtastical (M is capitalized)
TLS: ON (This needs to be turned on to communicate with out server properly)
*/

=======
        { label: "Region", value: "United States" }
>>>>>>> d40ebc6 (pushing untracked changes: Chore: updating the lorConf and mqttServer setting areas)
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
