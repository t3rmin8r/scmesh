import type { PageContent } from "../../types/content";

const aboutPage: PageContent = {
  title: "About the Network",
  description: "Overview of the community network mission, operating model, and expected node behavior.",
  intro: "",
  heroEyebrow: "Mission",
  heroBody:
    "South Carolina Mesh is a group of enthusiasts, hobbyists, and prepared individuals building and maintaining a Meshtastic network. While centered in the Upstate, our network is for all of South Carolina. We welcome anyone to join our community, regardless of location, to collaborate on expanding coverage, share knowledge, and support each other.",
  sections: [
    {
      title: "What this network does",
      paragraphs: [
        "The network provides a shared communication layer for people using compatible long-range radios in the region.",
        "Each device can participate as an endpoint, relay, or fixed coverage node depending on its hardware, placement, and owner goals."
      ]
    },
    {
      title: "Why communities use meshtastic radios",
      paragraphs: [
        "Meshtastic radios can remain useful when cellular connectivity is unreliable, overloaded, or unavailable.",
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
            "Document local conventions clearly so new participants can join without a guess."
          ]
        }
      ]
    }
  ]
};

export default aboutPage;
