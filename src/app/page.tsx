"use client"

import { Hero3D } from '@/components/sections/hero-3d'
import { ServicesSimple } from '@/components/sections/services-simple'
import { PortfolioSimple } from '@/components/sections/portfolio-simple'
import { ContactMinimal } from '@/components/sections/contact-minimal'
import { FooterMinimal } from '@/components/layout/footer-minimal'
import { NavbarMinimal } from '@/components/layout/navbar-minimal'
import { AnimatedCursor } from '@/components/ui/animated-cursor'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Return null for faster initial load
  }

  return (
    <>
      <AnimatedCursor />
      <NavbarMinimal />
      <main>
        <Hero3D />
        <ServicesSimple />
        <PortfolioSimple />
        <ContactMinimal />
      </main>
      <FooterMinimal />
    </>
  )
}