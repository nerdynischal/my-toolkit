import type { BoardItem, Tool } from '../toolkit'
import { ToolIcon } from './ToolIcon'

type ToolGridProps = {
  items: BoardItem[]
  selectedTool: Tool | null
  onSelectTool: (tool: Tool) => void
}

export function ToolGrid({ items, selectedTool, onSelectTool }: ToolGridProps) {
  return (
    <div className="tool-board">
      <div className="tool-grid">
        {items.map((item) => {
          if (item.type !== 'tool') {
            return <span className="empty-tile" aria-hidden="true" key={item.id} />
          }

          return (
            <ToolTile
              isSelected={selectedTool?.name === item.tool.name}
              key={item.tool.name}
              onSelect={onSelectTool}
              tool={item.tool}
            />
          )
        })}
      </div>
    </div>
  )
}

type ToolTileProps = {
  isSelected: boolean
  onSelect: (tool: Tool) => void
  tool: Tool
}

function ToolTile({ isSelected, onSelect, tool }: ToolTileProps) {
  return (
    <button
      className={`tool-tile${isSelected ? ' is-selected' : ''}`}
      type="button"
      onClick={() => onSelect(tool)}
      aria-pressed={isSelected}
    >
      <ToolIcon className="product-icon" tool={tool} />
      <span className="tool-meta">
        <span className="tool-name">{tool.name}</span>
        <span className="category-chip">{tool.category}</span>
      </span>
    </button>
  )
}
