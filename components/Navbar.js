'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(240,250,248,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '0.5px solid rgba(59,184,158,0.2)' : 'none',
      padding: '0 2rem', display: 'flex',
      alignItems: 'center', justifyContent: 'space-between',
      height: '64px', transition: 'all 0.3s ease'
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="6" y="10" width="24" height="16" rx="2" stroke="#2a8a78" strokeWidth="1.8" fill="none"/>
          <path d="M14 10 Q18 5 22 10" stroke="#5bafd6" strokeWidth="1.8" fill="none"/>
          <ellipse cx="18" cy="18" rx="4" ry="6" stroke="#1a5c52" strokeWidth="1.5" fill="none"/>
          <line x1="15" y1="28" x2="21" y2="28" stroke="#1a5c52" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="16" y1="30.5" x2="20" y2="30.5" stroke="#1a5c52" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span style={{ fontSize: '15px', fontWeight: 600, color: '#1a5c52' }}>Passionate Teaching</span>
      </Link>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {[['Courses','/courses'],['Dashboard','/dashboard'],['Teach','/instructor'],['Admin','/admin']].map(([label, href]) => (
          <Link key={label} href={href} style={{ fontSize: '13px', color: '#4a7a72', textDecoration: 'none' }}>{label}</Link>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Link href="/login" style={{ padding: '7px 16px', fontSize: '13px', background: 'none', border: '0.5px solid rgba(59,184,158,0.4)', borderRadius: '20px', color: '#2a8a78', textDecoration: 'none' }}>Sign in</Link>
        <Link href="/register" style={{ padding: '8px 20px', fontSize: '13px', background: 'linear-gradient(135deg,#2a8a78,#3bb89e)', borderRadius: '20px', color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Get started</Link>
      </div>
    </nav>
  )
}