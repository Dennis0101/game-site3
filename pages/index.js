// pages/index.js
import AnnouncementBanner from '@/components/AnnouncementBanner'
import ProductList from '@/components/ProductList'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import ChatPopup from '@/components/ChatPopup'
import LoginModal from '@/components/LoginModal'
import { useState } from 'react'

export default function Home() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      <AnnouncementBanner />
      <ProductList onLoginClick={() => setShowLogin(true)} />
      <Testimonials />
      <FAQ />
      <ChatPopup />
      <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
    </>
  )
}
