 "use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar(){
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const f=()=>setScrolled(scrollY>12);addEventListener("scroll",f);return()=>removeEventListener("scroll",f)},[]);
  const links=[["Services","#services"],["Portfolio","#portfolio"],["About","#about"],["Contact","#contact"]];
  return <header className={`fixed top-0 z-50 w-full transition ${scrolled?"bg-white/95 shadow-sm backdrop-blur":"bg-transparent"}`}>
    <div className="container-x flex h-20 items-center justify-between">
      <Link href="/" className="text-xl font-black tracking-tight"><span className="text-brand-red">Vishal</span> Media Tech</Link>
      <nav className="hidden items-center gap-7 md:flex">{links.map(([n,h])=><Link key={n} href={h} className="text-sm font-semibold hover:text-brand-red">{n}</Link>)}<Link href="#contact"><Button className="bg-brand-red text-white hover:bg-brand-dark">Get Free Consultation</Button></Link></nav>
      <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<div className="border-t bg-white px-4 py-4 md:hidden">{links.map(([n,h])=><Link onClick={()=>setOpen(false)} className="block py-3 font-semibold" key={n} href={h}>{n}</Link>)}<Link onClick={()=>setOpen(false)} href="#contact"><Button className="w-full bg-brand-red text-white">Get Free Consultation</Button></Link></div>}
  </header>
}
