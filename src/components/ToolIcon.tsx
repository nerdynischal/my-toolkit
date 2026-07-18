import type { Tool } from '../toolkit'
import { publicAssetPath } from '../asset-path'

type ToolIconProps = {
  className: string
  tool: Tool
}

export function ToolIcon({ className, tool }: ToolIconProps) {
  return (
    <span className={className} aria-hidden="true">
      {tool.iconPath ? <img src={publicAssetPath(tool.iconPath)} alt="" /> : tool.icon}
    </span>
  )
}
