'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'

const allCourses = [
  { emoji: '⚛️', tag: 'Web Development', title: 'The Complete React & Next.js Bootcamp', instructor: 'Sarah Lin', rating: '4.9', reviews: '2.1k', price: '£49', bg: 'linear-gradient(135deg,#e8f7f5,#b2e5da)' },
  { emoji: '🤖', tag: 'AI & ML', title: 'Build LLM Apps with LangChain & GPT-4', instructor: 'Alex Kim', rating: '4.8', reviews: '1.6k', price: '£64', bg: 'linear-gradient(135deg,#fff0e8,#ffd4bb)' },
  { emoji: '🔐', tag: 'Cybersecurity', title: 'Ethical Hacking & Penetration Testing', instructor: 'Marcus Park', rating: '4.9', reviews: '3.2k', price: '£79', bg: 'linear-gradient(135deg,#eef0ff,#c7ccf7)' },
  { emoji: '☁️', tag: 'Cloud Computing', title: 'AWS Solutions Architect — Professional', instructor: 'James Davis', rating: '4.7', reviews: '1.8k', price: '£89', bg: 'linear-gradient(135deg,#f0fff4,#b7f5d0)' },
  { emoji: '🐍', tag: 'Programming', title: 'Python for Data Science & Automation', instructor: 'Riya Nair', rating: '4.9', reviews: '4.1k', price: '£39', bg: 'linear-gradient(135deg,#fffbea,#fde68a)' },
  { emoji: '📡', tag: 'Networking', title: 'CCNA 200-301 Complete Study Guide', instructor: 'Tom Chen', rating: '4.6', reviews: '980', price: '£54', bg: 'linear-gradient(135deg,#fce4ec,#f8bbd0)' },
]

const categories = ['All', 'Web Development', 'AI & ML', 'Cybersecurity', 'Cloud Computing', 'Programming', 'Networking']

export default function Courses() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = allCourses.filter(c => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === 'All' || c.tag === category
    return matchSearch && matchCat
  })

  return (
    <main style={{ minHeight: '100vh', padding: '100px 2rem 60px' }}>
      <Navbar />
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#0f2f2a', letterSpacing: '-1px', marginBottom: '6px' }}>All Courses</h1>
        <p style={{ fontSize: '15px', color: '#4a7a72', marginBottom: '32px' }}>Explore 1,200+ courses across every discipline.</p>

        <input type="text" placeholder="🔍 Search courses..." value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ width: '100%', padding: '12px 18px', border: '0.5px solid rgba(59,184,158,0.3)', borderRadius: '12px', fontSize: '14px', fontFamily: 'Inter,sans-serif', outline: 'none', marginBottom: '16px', background: '#fff', color: '#0f2f2a' }} />

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setCategory(cat)}
              style={{ padding: '6px 16px', fontSize: '13px', borderRadius: '20px', border: '0.5px solid rgba(59,184,158,0.3)', background: category === cat ? 'linear-gradient(135deg,#1a5c52,#2a8a78)' : '#fff', color: category === cat ? '#fff' : '#4a7a72', cursor: 'pointer', fontFamily: 'Inter,sans-serif' }}>
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '18px' }}>
          {filtered.map((course, i) => (
            <div key={i} style={{ background: '#fff', border: '0.5px solid rgba(59,184,158,0.18)', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.28s' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(26,92,82,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}>
              <div style={{ height: '130px', background: course.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>{course.emoji}</div>
              <div style={{ padding: '16px' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#3bb89e', marginBottom: '8px' }}>{course.tag}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f2f2a', marginBottom: '6px', lineHeight: 1.4 }}>{course.title}</div>
                <div style={{ fontSize: '11px', color: '#4a7a72', marginBottom: '12px' }}>by {course.instructor}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: '#4a7a72' }}>⭐ {course.rating} ({course.reviews})</span>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#1a5c52' }}>{course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px', color: '#4a7a72' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>🔍</div>
            <p>No courses found. Try a different search.</p>
          </div>
        )}
      </div>
    </main>
  )
}