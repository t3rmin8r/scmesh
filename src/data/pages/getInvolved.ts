import { placeholderLinks } from "../site";
import type { PageContent } from "../../types/content";

const getInvolvedPage: PageContent = {
  title: "Get Involved",
  description: "Ways to join, contribute, and help maintain local coverage and documentation.",
  intro: "There are multiple ways to participate, whether you are bringing a handheld, hosting discussions, hosting/supplying infrastructure, or helping maintain community docs.",
  heroEyebrow: "Join the community",
  heroBody:
    "New participants usually start by joining the discussion channels, checking local configuration guidance, and deciding whether they want a mobile, home, or high-site node.",
  heroLinks: [
    {
      label: "Join the Discord",
      href: placeholderLinks.communityInvite,
      description: "Discord is were meetings primarily happen due to state wide efforts",
      external: true
    },
    {
      label: "Volunteer Signup",
      href: placeholderLinks.volunteerForm,
      description: "Replace with your contributor intake form.",
      external: true
    }
  ],
  sections: [
    {
      title: "Common contributor roles",
      bullets: [
        {
          title: "Operators",
          items: [
            "Join with handheld or vehicle nodes and help validate coverage from different parts of the area.",
            "Share field reports when you find dead spots, routing issues, or device quirks."
          ]
        },
        {
          title: "Infrastructure hosts",
          items: [
            "Provide stable power, placement, and maintenance access for fixed or elevated nodes.",
            "Coordinate planned outages so the rest of the community understands coverage changes."
          ]
        },
        {
          title: "Maintainers",
          items: [
            "Keep channel guidance, configuration values, and onboarding docs current.",
            "Review placeholder values before publishing operational endpoints."
          ]
        }
      ]
    },
    {
      title: "Before adding a permanent node",
      paragraphs: [
        "Confirm the site has adequate power, weather protection, and line-of-sight to useful portions of the area.",
        "Decide whether the node should act primarily as local coverage, long-haul relay, or a gateway to optional connected services."
      ],
      callout: {
        title: "Publish only reviewed settings",
        body: "Do not expose passwords, final MQTT credentials, or privileged management endpoints until the operations team has approved them for public release.",
        tone: "warning"
      }
    }
  ]
};

export default getInvolvedPage;
