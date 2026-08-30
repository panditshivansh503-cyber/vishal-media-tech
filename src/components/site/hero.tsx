 "use client";
import Link from "next/link"; import { motion } from "framer-motion"; import { ArrowRight, BarChart3, MousePointerClick, Search } from "lucide-react";
export function Hero(){
 return <section className="grid-bg relative overflow-hidden pt-32 md:pt-40">
  <div className="container-x grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-2">
   <div>
    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="mb-5 inline-flex rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-bold text-brand-red">Performance-first digital marketing</motion.div>
    <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.1}} className="text-5xl font-black leading-[1.03] tracking-tight md:text-7xl">Accelerate Your Business Growth with <span className="gradient-text">Data-Driven</span> Digital Marketing</motion.h1>
    <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">Vishal Media Tech helps businesses generate leads, increase sales, and build a powerful online presence through Meta Ads, Google Ads, SEO, Social Media Marketing, and Website Development.</p>
    <div className="mt-9 flex flex-wrap gap-4"><Link href="#contact"><button className="rounded-xl bg-brand-red px-6 py-4 font-bold text-white shadow-glow hover:bg-brand-dark">Get Free Consultation <ArrowRight className="ml-2 inline" size={18}/></button></Link><Link href="#services"><button className="rounded-xl border border-gray-200 bg-white px-6 py-4 font-bold hover:border-brand-red">View Services</button></Link></div>
    <div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-gray-600"><span>✓ ROI-focused</span><span>✓ Transparent reporting</span><span>✓ Dedicated support</span></div>
   </div>
   <div className="relative mx-auto w-full max-w-xl">
    <motion.div animate={{y:[0,-12,0],rotate:[0,2,0]}} transition={{duration:5,repeat:Infinity}} className="relative rounded-[2rem] border bg-white p-6 shadow-2xl">
      <div className="flex items-center justify-between"><div><p className="text-sm text-gray-500">Campaign performance</p><p className="text-4xl font-black">+184%</p></div><div className="rounded-2xl bg-red-50 p-4 text-brand-red"><BarChart3/></div></div>
      <div className="mt-8 h-44 rounded-2xl bg-gradient-to-b from-red-50 to-white p-4"><svg viewBox="0 0 500 170" className="h-full w-full"><polyline fill="none" stroke="#DC2626" strokeWidth="6" strokeLinecap="round" points="0,150 65,125 115,135 175,80 230,105 290,55 350,72 410,25 500,8"/></svg></div>
      <div className="mt-6 grid grid-cols-3 gap-3"><div className="rounded-xl bg-gray-50 p-3"><MousePointerClick size={18}/><b className="mt-2 block">12.8K</b><small>Clicks</small></div><div className="rounded-xl bg-gray-50 p-3"><Search size={18}/><b className="mt-2 block">4.9K</b><small>Leads</small></div><div className="rounded-xl bg-gray-50 p-3"><BarChart3 size={18}/><b className="mt-2 block">7.4x</b><small>ROAS</small></div></div>
    </motion.div>
   </div>
  </div>
 </section>
}
