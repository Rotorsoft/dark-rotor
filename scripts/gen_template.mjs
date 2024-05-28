import { writeFileSync } from "fs"
import { colors } from "./colors.mjs"

function main() {
  const map = new Map()
  colors.forEach((item) => {
    const color = item.settings.foreground
    const font = item.settings.fontStyle
    const key = `${color}${font}`
    !map.has(key) && map.set(key, { color, font, scope: [] })
    const mapItem = map.get(key)
    mapItem.scope = mapItem.scope.concat(item.scope)
  })
  const template = [...map.values()]
    .map((item) => {
      return {
        scope: item.scope.sort(),
        settings: {
          foreground: item.color,
          fontStyle: item.font,
        },
      }
    })
    .sort((a, b) => b.scope.length - a.scope.length)
  writeFileSync("./scripts/out.json", JSON.stringify(template, null, 2))
}

main()
