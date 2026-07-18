import toolsData from './data/tools.json'

export type ToolStatus = 'Main' | 'Exploring' | 'Watchlist' | 'Obsolete'

export type Tool = {
  name: string
  category: ToolStatus
  icon: string
  iconPath?: string
  description: string
  url?: string
}

export type BoardItem =
  | { type: 'tool'; tool: Tool }
  | { type: 'gap'; id: string }
  | { type: 'empty'; id: string }

const categoryOrder: ToolStatus[] = ['Main', 'Exploring', 'Watchlist', 'Obsolete']
const categoryGapCount = 2
const trailingEmptyCellCount = 12

export const tools = toolsData as Tool[]

export const boardItems: BoardItem[] = [
  ...categoryOrder.flatMap((category, categoryIndex) => {
    const categoryTools: BoardItem[] = tools
      .filter((tool) => tool.category === category)
      .map((tool) => ({ type: 'tool', tool }))
    const isLastCategory = categoryIndex === categoryOrder.length - 1
    const categoryGaps: BoardItem[] = isLastCategory
      ? []
      : Array.from({ length: categoryGapCount }, (_, gapIndex) => ({
          type: 'gap',
          id: `${category}-gap-${gapIndex}`,
        }))

    return [...categoryTools, ...categoryGaps]
  }),
  ...Array.from({ length: trailingEmptyCellCount }, (_, index) => ({
    type: 'empty' as const,
    id: `empty-${index}`,
  })),
]
