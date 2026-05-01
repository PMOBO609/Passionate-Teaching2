'use client'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const categories = [
  { icon: '💻', name: 'Web Development', desc: 'React, Next.js, Node.js', count: 148 },
  { icon: '🔐', name: 'Cybersecurity', desc: 'Ethical hacking, OSCP', count: 92 },
  { icon: '🤖', name: 'AI & Machine Learning', desc: 'PyTorch, LLMs, MLOps', count: 115 },
  { icon: '🐍', name: 'Programming', desc: 'Python, Java, C++, Go', count: 203 },
  { icon: '☁️', name: 'Cloud Computing', desc: 'AWS, Azure, GCP', count: 87 },
  { icon: '📡', name: 'Networking', desc: 'CCNA, CompTIA, Cisco', count: 64 },
]

const courses = [
  { emoji: '⚛️', tag: 'Web Dev', title: 'The Complete React & Next.js Bootcamp', instructor: 'Sarah Lin', rating: '4.9', price: '£49', bg: 'linear-gradient(135deg,#e8f7f5,#b2e5da)' },
  { emoji: '🤖', tag: 'AI & ML', title: 'Build LLM Apps with LangChain & GPT-4', instructor: 'Alex Kim', rating: '4.8', price: '£64', bg: 'linear-gradient(135deg,#fff0e8,#ffd4bb)' },
  { emoji: '🔐', tag: 'Security', title: 'Ethical Hacking & Penetration Testing', instructor: 'Marcus Park', rating: '4.9', price: '£79', bg: 'linear-gradient(135deg,#eef0ff,#c7ccf7)' },
]

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '120px 2rem 80px', textAlign: 'center',
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,184,158,0.12), transparent)'
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          padding: '5px 14px', background: 'rgba(59,184,158,0.1)',
          border: '0.5px solid rgba(59,184,158,0.3)', borderRadius: '20px',
          fontSize: '12px', color: '#2a8a78', fontWeight: 500, marginBottom: '28px'
        }}>
          <span style={{ width: 6, height: 6, background: '#3bb89e', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
          50,000+ learners already growing
        </div>

        <h1 style={{
          fontSize: 'clamp(42px,7vw,80px)', fontWeight: 700,
          lineHeight: 1.08, letterSpacing: '-3px',
          color: '#0f2f2a', marginBottom: '20px'
        }}>
          Learn Without<br />
          <span style={{
            background: 'linear-gradient(135deg,#2a8a78,#5bafd6)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>Limits</span>
        </h1>

        <p style={{
          fontSize: '18px', color: '#4a7a72', maxWidth: '520px',
          marginBottom: '40px', lineHeight: 1.6
        }}>
          Master in-demand skills with world-class instructors. From zero to expert — at your own pace.
        </p>

        <div style={{ display: 'flex', gap: '14px', marginBottom: '64px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/courses" style={{
            padding: '14px 32px', fontSize: '15px', fontWeight: 500,
            borderRadius: '28px', background: 'linear-gradient(135deg,#1a5c52,#2a8a78)',
            color: '#fff', textDecoration: 'none',
            boxShadow: '0 8px 24px rgba(26,92,82,0.3)'
          }}>Explore courses</Link>
          <Link href="/register" style={{
            padding: '14px 32px', fontSize: '15px', fontWeight: 500,
            borderRadius: '28px', background: 'rgba(255,255,255,0.8)',
            color: '#1a5c52', textDecoration: 'none',
            border: '0.5px solid rgba(59,184,158,0.35)'
          }}>Start for free</Link>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', background: 'rgba(255,255,255,0.7)',
          border: '0.5px solid rgba(59,184,158,0.2)', borderRadius: '16px',
          overflow: 'hidden', backdropFilter: 'blur(10px)'
        }}>
          {[['1,200+','Courses'],['320+','Instructors'],['50K+','Students'],['4.9★','Rating']].map(([num, label], i) => (
            <div key={i} style={{
              padding: '20px 32px', textAlign: 'center',
              borderRight: i < 3 ? '0.5px solid rgba(59,184,158,0.15)' : 'none'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#1a5c52', letterSpacing: '-1px' }}>{num}</div>
              <div style={{ fontSize: '11px', color: '#4a7a72', marginTop: '3px' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '80px 2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: '#3bb89e', marginBottom: '14px' }}>Categories</div>
        <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, letterSpacing: '-1px', marginBottom: '12px' }}>Explore by topic</h2>
        <p style={{ fontSize: '16px', color: '#4a7a72', maxWidth: '480px', margin: '0 auto 48px' }}>Dive into cutting-edge disciplines taught by industry professionals.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '14px', maxWidth: '900px', margin: '0 auto' }}>
          {categories.map((cat, i) => (
            <Link key={i} href="/courses" style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'rgba(255,255,255,0.8)', border: '0.5px solid rgba(59,184,158,0.2)',
                borderRadius: '14px', padding: '24px', cursor: 'pointer',
                transition: 'all 0.25s', textAlign: 'left'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(59,184,158,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{cat.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f2f2a', marginBottom: '4px' }}>{cat.name}</div>
                <div style={{ fontSize: '12px', color: '#4a7a72', marginBottom: '10px' }}>{cat.desc}</div>
                <div style={{ fontSize: '11px', color: '#3bb89e', fontWeight: 500 }}>{cat.count} courses</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section style={{ padding: '80px 2rem', background: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: '#3bb89e', marginBottom: '14px' }}>Featured</div>
        <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, letterSpacing: '-1px', marginBottom: '12px' }}>Top courses this week</h2>
        <p style={{ fontSize: '16px', color: '#4a7a72', maxWidth: '480px', margin: '0 auto 48px' }}>Hand-picked by our team for quality and relevance.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '18px', maxWidth: '960px', margin: '0 auto' }}>
          {courses.map((course, i) => (
            <div key={i} style={{
              background: '#fff', border: '0.5px solid rgba(59,184,158,0.18)',
              borderRadius: '16px', overflow: 'hidden', cursor: 'pointer',
              transition: 'all 0.28s'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(26,92,82,0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}>
              <div style={{ height: '140px', background: course.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '42px' }}>{course.emoji}</div>
              <div style={{ padding: '18px' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#3bb89e', marginBottom: '8px' }}>{course.tag}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f2f2a', marginBottom: '8px', lineHeight: 1.4 }}>{course.title}</div>
                <div style={{ fontSize: '11px', color: '#4a7a72', marginBottom: '12px' }}>by {course.instructor}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: '#4a7a72' }}>⭐ {course.rating}</span>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#1a5c52' }}>{course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 2rem 80px' }}>
        <div style={{
          background: 'linear-gradient(135deg,#1a5c52 0%,#2a8a78 60%,#3bb89e 100%)',
          borderRadius: '24px', padding: '80px 2rem', textAlign: 'center'
        }}>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: '#fff', letterSpacing: '-1px', marginBottom: '16px' }}>Start learning today</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', marginBottom: '36px' }}>Join 50,000 learners transforming their careers.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/register" style={{ padding: '14px 32px', fontSize: '15px', fontWeight: 600, borderRadius: '28px', background: '#fff', color: '#1a5c52', textDecoration: 'none' }}>Create free account</Link>
            <Link href="/courses" style={{ padding: '13px 32px', fontSize: '15px', fontWeight: 500, borderRadius: '28px', background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.5)', textDecoration: 'none' }}>Browse courses</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px 2rem', borderTop: '0.5px solid rgba(59,184,158,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <span style={{ fontSize: '12px', color: '#4a7a72' }}>© 2025 Passionate Teaching. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Privacy','Terms','Help','Contact'].map(l => (
            <Link key={l} href="#" style={{ fontSize: '12px', color: '#4a7a72', textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
      </footer>
    </main>
  )
}