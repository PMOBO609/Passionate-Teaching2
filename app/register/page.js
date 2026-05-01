'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setError('')
    setLoading(true)
    try {
      const res = await fetch('https://passionate-teaching-backend.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.token) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        window.location.href = '/dashboard'
      } else {
        setError(data.message || 'Registration failed. Please try again.')
      }
    } catch (err) {
      setError('The server is starting up — this can take up to 30 seconds on the free plan. Please wait a moment and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 2rem" }}>
      <Navbar />
      <div style={{ background: "#fff", border: "1px solid rgba(59,184,158,0.2)", borderRadius: "20px", padding: "40px", width: "100%", maxWidth: "420px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#0f2f2a", marginBottom: "6px" }}>Create your account</h2>
        <p style={{ fontSize: "14px", color: "#4a7a72", marginBottom: "28px" }}>Join 50,000+ learners today - it is free.</p>
        <div style={{ display: "flex", gap: "4px", background: "rgba(59,184,158,0.08)", borderRadius: "10px", padding: "4px", marginBottom: "24px" }}>
          {['student','instructor'].map(role => (
            <button key={role} onClick={() => setForm({...form, role})}
              style={{ flex: 1, padding: "8px", fontSize: "13px", borderRadius: "7px", cursor: "pointer", border: "none", background: form.role === role ? "#fff" : "transparent", color: form.role === role ? "#1a5c52" : "#4a7a72", fontWeight: form.role === role ? 500 : 400 }}>
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          ))}
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ fontSize: "12px", fontWeight: 500, color: "#4a7a72", display: "block", marginBottom: "6px" }}>Full name</label>
          <input type="text" placeholder="Jordan Wells" value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
            style={{ width: "100%", padding: "10px 14px", border: "1px solid rgba(59,184,158,0.3)", borderRadius: "10px", fontSize: "14px", outline: "none", color: "#0f2f2a", background: "#f8fdfc" }} />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ fontSize: "12px", fontWeight: 500, color: "#4a7a72", display: "block", marginBottom: "6px" }}>Email address</label>
          <input type="email" placeholder="you@example.com" value={form.email}
            onChange={e => setForm({...form, email: e.target.value})}
            style={{ width: "100%", padding: "10px 14px", border: "1px solid rgba(59,184,158,0.3)", borderRadius: "10px", fontSize: "14px", outline: "none", color: "#0f2f2a", background: "#f8fdfc" }} />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <label style={{ fontSize: "12px", fontWeight: 500, color: "#4a7a72", display: "block", marginBottom: "6px" }}>Password</label>
          <input type="password" placeholder="At least 8 characters" value={form.password}
            onChange={e => setForm({...form, password: e.target.value})}
            style={{ width: "100%", padding: "10px 14px", border: "1px solid rgba(59,184,158,0.3)", borderRadius: "10px", fontSize: "14px", outline: "none", color: "#0f2f2a", background: "#f8fdfc" }} />
        </div>
        {error && (
          <div style={{ background: "#fff8f0", border: "1px solid #f5a623", borderRadius: "10px", padding: "10px 14px", marginBottom: "16px", fontSize: "13px", color: "#7a4a00" }}>
            {error}
          </div>
        )}
        <button onClick={handleSubmit} disabled={loading} style={{ width: "100%", padding: "12px", background: loading ? "#aaa" : "linear-gradient(135deg,#1a5c52,#2a8a78)", border: "none", borderRadius: "12px", color: "#fff", fontSize: "15px", fontWeight: 600, cursor: loading ? "not-allowed" : "pointer" }}>
          {loading ? 'Creating account…' : 'Create account'}
        </button>
        <p style={{ textAlign: "center", fontSize: "13px", color: "#4a7a72", marginTop: "16px" }}>
          Already have an account? <Link href="/login" style={{ color: "#2a8a78", textDecoration: "none" }}>Sign in</Link>
        </p>
      </div>
    </main>
  )
}
