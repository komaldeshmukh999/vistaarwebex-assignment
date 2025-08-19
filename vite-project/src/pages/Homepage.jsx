import React from 'react'
import HeroSection from '../component/HeroSection'
import ShopByOcassion from '../component/ShopByOcassion'
import ShopbyFabric from '../component/ShopbyFabric'
import ShopByTrend from '../component/ShopByTrend'
import Testimonial from '../component/Testimonial'
import DrappedBykargri from '../component/DrappedBykargri'
export default function Home() {
  return (
    <main className="flex flex-col gap-15">
      <section><HeroSection /></section>
      <section><ShopByOcassion /></section>
      <section><ShopbyFabric /></section>
      <section><ShopByTrend /></section>
      <section><Testimonial /></section>
      <section><DrappedBykargri /></section>
    </main>
  );
}


