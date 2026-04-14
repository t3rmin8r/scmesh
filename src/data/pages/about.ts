import type { PageContent } from "../../types/content";

const aboutPage: PageContent = {
  title: "About the Network",
  description: "Overview of the community network mission, operating model, and expected node behavior.",
  intro: "Learn what the network is for, how it operates, and what participants should expect when joining.",
  heroEyebrow: "Mission",
  heroBody:
    "SCMesh is a community-run radio mesh intended to make local communication more resilient, approachable, and well-documented. Nodes relay messages cooperatively, extending coverage without depending on centralized infrastructure.",
  sections: [
    {
      title: "What this network does",
      paragraphs: [
        "The network provides a shared communication layer for people using compatible long-range radios in the region.",
        "Each device can participate as an endpoint, relay, or fixed coverage node depending on its hardware, placement, and owner goals."
      ]
    },
    {
      title: "Why communities use mesh radio",
      paragraphs: [
        "Mesh radio can remain useful when cellular connectivity is unreliable, overloaded, or unavailable.",
        "It also gives local groups a practical way to experiment with coverage, routing, and emergency communication workflows."
      ],
      callout: {
        title: "Operational note",
        body: "This site is intentionally written as a reusable community template. Replace local geography, coverage notes, and procedures with your own operational details before launch.",
        tone: "info"
      }
    },
    {
      title: "Participation expectations",
      bullets: [
        {
          items: [
            "Use device names and contact details that help local operators identify who owns critical infrastructure.",
            "Place fixed nodes where they can contribute meaningful coverage without unsafe power or mounting practices.",
            "Document local conventions clearly so new participants can join without guessing."
          ]
        }
      ]
    }
  ]
};

export default aboutPage;
