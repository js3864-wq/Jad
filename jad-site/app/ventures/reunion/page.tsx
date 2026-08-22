import type { Metadata } from "next";
import { VentureDetail } from "../VentureDetail";
import { getVenture } from "../ventures-data";

const venture = getVenture("reunion");

export const metadata: Metadata = {
  title: `${venture.name} | Jad Saouma`,
  description: venture.tagline,
  openGraph: {
    title: `${venture.name} | Jad Saouma`,
    description: venture.tagline,
    images: [{ url: venture.image, alt: venture.imageAlt }],
  },
};

export default function VenturePage() {
  return <VentureDetail venture={venture} />;
}
