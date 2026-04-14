import type { PageContent } from "../../types/content";

const easSystemPage: PageContent = {
  title: "EAS System",
  description: "Explain how emergency or high-priority alert channels are structured and when they should be used.",
  intro: "Use this page to describe any alerting workflow that is distinct from routine mesh traffic.",
  heroEyebrow: "Alerting workflow",
  heroBody:
    "Alert channels should be documented conservatively. Publish only the information required for operators to configure and use the system correctly.",
  sections: [
    {
      title: "What the alert system is for",
      paragraphs: [
        "An alert channel can be used to distribute high-priority notices, coordination updates, or exercises that should remain distinct from routine chatter.",
        "If the network supports multiple alert groups, document each one with a clear geographic or operational purpose."
      ]
    },
    {
      title: "Configuration guidance",
      bullets: [
        {
          items: [
            "State whether uplink or downlink paths are required for your alert workflow.",
            "Publish any PSK or channel import values only if they are intended to be public.",
            "Explain how operators should confirm they are receiving alerts during testing."
          ]
        }
      ]
    },
    {
      title: "Coverage reference",
      media: {
        src: "/images/coverage-map-placeholder.svg",
        alt: "Placeholder coverage map illustration",
        caption: "Replace this placeholder with an actual coverage map or remove the block if no map is available."
      },
      callout: {
        title: "Keep maps current",
        body: "Coverage visuals become misleading quickly when new sites are added or offline. Update them alongside topology changes.",
        tone: "info"
      }
    }
  ]
};

export default easSystemPage;
