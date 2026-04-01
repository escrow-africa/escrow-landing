export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999, // ensures studio covers navbar and footer
        backgroundColor: 'white',
      }}
    >
      {children}
    </div>
  )
}
