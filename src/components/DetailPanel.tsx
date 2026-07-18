import type { RefObject } from 'react'
import type { Tool } from '../toolkit'
import { ToolIcon } from './ToolIcon'

type DetailPanelProps = {
  closeButtonRef: RefObject<HTMLButtonElement | null>
  onClose: () => void
  tool: Tool | null
}

export function DetailPanel({ closeButtonRef, onClose, tool }: DetailPanelProps) {
  return (
    <aside className={`detail-panel${tool ? ' is-open' : ''}`} aria-label="Selected tool details">
      {tool ? (
        <>
          <button
            className="icon-button"
            type="button"
            aria-label="Close tool details"
            onClick={onClose}
            ref={closeButtonRef}
          >
            X
          </button>
          <ToolIcon className="panel-icon" tool={tool} />
          <div className="panel-content">
            <span className="category-chip panel-chip">{tool.category}</span>
            <h2>{tool.name}</h2>
            <p>{tool.description}</p>
            <VisitLink url={tool.url} />
          </div>
        </>
      ) : (
        <div className="empty-panel">
          <p>Select a tool to open its product notes.</p>
        </div>
      )}
    </aside>
  )
}

type VisitLinkProps = {
  url?: string
}

function VisitLink({ url }: VisitLinkProps) {
  const icon = <ExternalArrowIcon />

  if (!url) {
    return (
      <button className="visit-link is-disabled" type="button" disabled>
        Product link unavailable
        {icon}
      </button>
    )
  }

  return (
    <a className="visit-link" href={url} target="_blank" rel="noreferrer">
      Visit product website
      {icon}
    </a>
  )
}

function ExternalArrowIcon() {
  return (
    <svg className="visit-link-icon" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M5 3.5h7.5V11" />
      <path d="M12.5 3.5 3.5 12.5" />
    </svg>
  )
}
