import { useEffect, useRef, useState } from 'react'
import './App.css'
import { DetailPanel } from './components/DetailPanel'
import { Header } from './components/Header'
import { ToolGrid } from './components/ToolGrid'
import { boardItems, tools, type Tool } from './toolkit'

function App() {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(tools[0])
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedTool(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    closeButtonRef.current?.focus()
  }, [selectedTool])

  return (
    <main className="toolkit-shell">
      <Header />
      <section className="workspace" aria-label="Design tools">
        <ToolGrid items={boardItems} selectedTool={selectedTool} onSelectTool={setSelectedTool} />
        <DetailPanel closeButtonRef={closeButtonRef} onClose={() => setSelectedTool(null)} tool={selectedTool} />
      </section>
    </main>
  )
}

export default App
