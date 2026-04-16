import type { PageContent } from "../../types/content";

const loraConfigPage: PageContent = {
  title: "LoRa Configuration",
  description: "Baseline radio settings and notes for onboarding compatible devices to the network.",
  intro: "Use this page to publish the minimum radio settings required for interoperability on your local mesh.",
  heroEyebrow: "Device setup",
  heroBody:
    "These values are placeholders that reflect a typical long-range mesh profile. Replace every deployment-specific setting with validated local values before publishing.",
  sections: [
    {
      title: "Recommended baseline settings",
      configItems: [
        { label: "Radio Settings", value: "LoRa" },
        { label: "OK to MQTT", value: "ON" },
        { label: "Radio Settings", value: "0.0" },
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

      ],
      callout: {
        title: "Verify the final frequency plan",
        body: "Frequency values are intentionally left generic here. Publish only the channel plan that has been reviewed for your area, hardware mix, and operating constraints.",
        tone: "warning"
      }
    },
    {
      title: "Onboarding checklist",
      bullets: [
        {
          items: [
            "Update firmware to a supported version before troubleshooting interoperability.",
            "Apply the local radio profile and confirm the device can hear at least one nearby node.",
            "Document any deviations from the baseline so maintainers can support them consistently."
          ]
        }
      ]
    }
  ]
};

export default loraConfigPage;
