'use client'
import Navbar from '../../components/Navbar'

const courses = [
  { title: 'React & Next.js Bootcamp', progress: 78, emoji: '⚛️' },
  { title: 'Build LLM Apps with LangChain', progress: 45, emoji: '🤖' },
  { title: 'Ethical Hacking Masterclass', progress: 22, emoji: '🔐' },
  { title: 'AWS Solutions Architect', progress: 60, emoji: '☁️' },
]

export default function Dashboard() {
  return (
    <main style={{ minHeight: "100vh", padding: "100px 2rem 60px" }}>
      <Navbar />
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#0f2f2a", marginBottom: "6px" }}>
          Welcome back, Jordan 👋
        </h1>
        <p style={{ fontSize: "15px", color: "#4a7a72", marginBottom: "36px" }}>
          Keep learning — you are making great progress.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px", marginBottom: "36px" }}>
          {[["7","Courses enrolled"],["3","Completed"],["142h","Hours learned"],["3","Certificates"]].map(([num, label], i) => (
            <div key={i} style={{ background: "#e8f7f5", borderRadius: "12px", padding: "18px" }}>
              <div style={{ fontSize: "26px", fontWeight: 700, color: "#1a5c52" }}>{num}</div>
              <div style={{ fontSize: "11px", color: "#4a7a72", marginTop: "4px" }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(59,184,158,0.2)", borderRadius: "16px", padding: "28px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#0f2f2a", marginBottom: "20px" }}>
            Continue learning
          </h3>
          {courses.map((course, i) => (
            <div key={i} style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#4a7a72", marginBottom: "8px" }}>
                <span>{course.emoji} {course.title}</span>
                <span style={{ fontWeight: 500, color: "#1a5c52" }}>{course.progress}%</span>
              </div>
              <div style={{ height: "6px", background: "rgba(59,184,158,0.15)", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${course.progress}%`, background: "linear-gradient(90deg,#2a8a78,#3bb89e)", borderRadius: "3px" }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}