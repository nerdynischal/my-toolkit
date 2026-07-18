import type { Tool } from '../toolkit'

type ToolIconProps = {
  className: string
  tool: Tool
}

export function ToolIcon({ className, tool }: ToolIconProps) {
  return (
    <span className={className} aria-hidden="true">
      {tool.iconPath ? <img src={tool.iconPath} alt="" /> : tool.icon}
    </span>
  )
}
