import type { ChannelRow, PageContent } from "../../types/content";

export const channelRows: ChannelRow[] = [
  {
    name: "LongFast",
    role: "Primary",
    purpose: "Default discovery and broad-area messaging profile."
  },
  {
    name: "Local Mesh",
    role: "Secondary",
    purpose: "Community coordination and routine network traffic."
  },
  {
    name: "Alert Channel",
    role: "Secondary",
    purpose: "Reserved for alerting or incident-specific coordination."
  }
];

const channelsPage: PageContent = {
  title: "Channel Plan",
  description: "Publish the channel lineup, intended roles, and onboarding instructions for the network.",
  intro: "This page gives members a clear list of channels and what each one is intended to do.",
  heroEyebrow: "Shared channel conventions",
  heroBody:
    "Treat the channel plan as an operational contract. Members should be able to tell which channels are public, which are local, and which are reserved for special workflows.",
  sections: [
    {
      title: "How to join the channel lineup",
      bullets: [
        {
          items: [
            "Import the reviewed channel bundle into the mobile or desktop client.",
            "Replace existing channels only after confirming you are applying the correct regional profile.",
            "Verify names, keys, and intended usage with the local documentation before sharing screenshots publicly."
          ]
        }
      ],
      media: {
        src: "/images/channel-bundle-placeholder.svg",
        alt: "Placeholder card representing a channel QR or bundle graphic",
        caption: "Replace this placeholder with your reviewed channel QR code or import bundle image."
      }
    }
  ]
};

export default channelsPage;
