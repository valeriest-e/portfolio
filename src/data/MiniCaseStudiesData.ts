import website from "@/assets/digital works/elektro.png";
import catalogue from "@/assets/digital works/artist.png";
import workbook from "@/assets/digital works/coach.png";

import elektroStories1 from "@/assets/other/elektro-story1.png";
import elektroStories2 from "@/assets/other/elektro-story2.png";
import elektroStories3 from "@/assets/other/elektro-story3.png";
import elektroStories4 from "@/assets/other/elektro-story4.png";
import elektroSite from "@/assets/other/elektro-site.png";
import elektroInsta from "@/assets/other/elektro-insta.png";

import estherCat1 from "@/assets/other/esther-cat1.png";
import estherCat2 from "@/assets/other/esther-cat2.png";
import estherCat3 from "@/assets/other/esther-cat3.png";
import estherCat4 from "@/assets/other/esther-cat4.png";
import estherGuide1 from "@/assets/other/esther-guide1.png";
import estherGuide2 from "@/assets/other/esther-guide2.png";
import estherGuide3 from "@/assets/other/esther-guide3.png";

import dreambig1 from "@/assets/other/dreambig-1.png";
import dreambig2 from "@/assets/other/dreambig-2.png";
import dreambig3 from "@/assets/other/dreambig-3.png";
import dreambig4 from "@/assets/other/dreambig-4.png";
import dreambigInsta from "@/assets/other/dreambig-insta.png";

export const MiniCaseStudiesData = [
  {
    title: "Elektroepilation Service",
    role: "Social Media Marketing Assistant & Designer",
    client: "Berlin, Germany, 2023-2024",
    overview: "Created visually engaging social media content and designed a user-friendly landing page for the electroepilation service.",
    preview: website,
    techStack: ["Squarespace", "Web Design", "Social Media Design", "Graphic Design", "Content Creation", "Branding"],
    blocks: [
      {
        label: "Social Media Stories",
        description: [
          "Designed eye-catching images for social media posts and stories.",
          "Developed an aesthetically pleasing Instagram feed.",
          "Created video content for Reels to increase engagement."
        ],
        images: [elektroStories1, elektroStories2, elektroStories3, elektroStories4],
        scrollHorizontal: true
      },
      {
        label: "Website",
        description: [
          "Designed & developed a user-friendly landing page on Squarespace showcasing services."
        ],
        images: [elektroSite, elektroInsta],
        scrollHorizontal: true
      }
    ],
    links: [
      { label: "View Instagram feed", url: "https://www.instagram.com/elektroepil_berlin/" },
      { label: "View Website", url: "https://www.elektroepil-berlin.de" }
    ]
  },
  {
    title: "Artist: Esther Franchuk",
    role: "Social Media Marketing Assistant & Designer",
    client: "Remote, 2020-2022",
    overview: "Maintained and enhanced digital presence of the artist, including catalogs, guides, and email campaigns.",
    preview: catalogue,
    techStack: ["Graphic Design", "Print Design", "Catalogue Design", "Email Marketing", "Canva"],
    blocks: [
      {
        label: "Catalogs",
        description: [
          "Designed and created printed and digital catalogs of Esther’s paintings.",
          "Provided galleries with a comprehensive overview of her work."
        ],
        images: [estherCat1, estherCat2, estherCat3, estherCat4],
        scrollHorizontal: true
      },
      {
        label: "Artist Guide",
        description: [
          "Created a guide for aspiring artists with tips on succeeding as an artist."
        ],
        images: [estherGuide1, estherGuide2, estherGuide3],
        scrollHorizontal: true
      }
    ]
  },
  {
    title: "DREAMBIG by Alena Borjesson",
    role: "Graphic Designer & Video Editor",
    client: "Remote, 2021-2022",
    overview: "Designed printed materials and video content with a minimalistic Scandinavian style.",
    preview: workbook,
    techStack: ["Graphic Design", "Video Editing", "Print Design", "Content Creation"],
    blocks: [
      {
        label: "Visual Materials",
        description: [
          "Designed printed and digital materials for the coaching project."
        ],
        images: [dreambig1, dreambig2, dreambig3, dreambig4],
        scrollHorizontal: true
      },
      {
        label: "Instagram Content",
        description: [
          "Designed content to maintain a cohesive social media presence."
          ],
        images: [dreambigInsta],
        scrollHorizontal: true
      }
    ]
  }
];

export default MiniCaseStudiesData;