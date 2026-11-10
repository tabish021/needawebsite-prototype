'use client';

import Hero from './Hero';
import Cookies from './Cookies';
import GiftBoxes from './GiftBoxes';
import Reviews from './Reviews';
import Footer from './Footer';

export default function DaisyBakehouseDemo() {
  return (
    <main className="min-h-screen bg-[#F8EEE3]">
      <Hero />
      <Cookies />
      <GiftBoxes />
      <Reviews />
      <Footer />
    </main>
  );
}
