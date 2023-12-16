import type { MetaFunction } from "@remix-run/node";
import LinkContactUs from "~/components/ui/LinkContactUs";

import imageAboutJpg from "public/images/the-milk-of-human-kindness_crop.jpg";
import imageAboutWebp from "public/images/the-milk-of-human-kindness_crop.webp";
import data from "../assets/data/data.json";
const SOCIAL = data.SOCIAL;

export const meta: MetaFunction = () => {
  return [
    { name: "description", content: "Learn about artist Seanne Buoy and kinesthetic synesthesia in their art." },
    { title: "Seanne Buoy | About" },
  ];
};

export default function AboutRoute() {
  return (
    <section aria-labelledby="headline--about">
      <figure className="image-container--marquee">
        {/* <img src={imageAbout} alt="Art piece called The Milk of Human Kindness" /> */}
        <picture>
          <source srcSet={imageAboutWebp} alt="" type="image/webp" />
          <img src={imageAboutJpg} alt="" />
        </picture>
        {/* <!-- <figcaption>Bleached Black Fabric, 2023</figcaption> --> */}
      </figure>
      <h2 id="headline--about">About the Artist</h2>
      <p>Seanne Buoy is an emerging, self-taught artist from Austin, Texas. Their body of work spans diverse mediums, experimenting with charcoal, printmaking, collage, drawing, painting, and ceramics to converge into a style marked by an enigmatic cohesiveness. Within this style, shapes intermingle, lines dissipate, and a playful yet shadowed ambiguity arises, swaying along the lines between androgyneity, being, and the unknown.</p>
      <p>Buoy's creations consistently present images that are stark and emotionally resonant, delving into existentially challenging concepts with a profound compassion for the pain, wanting, and curious beauty of the human condition. This combination makes Seanne Buoy's artwork defy easy categorization, offering viewers an introspective and evocative lens into the polymorphic facets of our existence.</p>
      <p>Out of these nebulous artforms emerge shapes and anthropomorphic figures. Humanoid forms engage at a point between the tangible and the elusive, drawing from the raw essence of life while layering these forms with subconscious impressions.</p>
      <p>Email the artist at <LinkContactUs social={SOCIAL} /><br />
      Instagram: <a href={SOCIAL.instagram.link} target="_blank">{SOCIAL.instagram.handle}</a>
      </p>
    </section>
  );
}