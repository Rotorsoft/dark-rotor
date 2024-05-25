import { themes } from "./themes.mjs"
import { template } from "./template.mjs"
import { readFileSync, writeFileSync } from "fs"

/**
 * Generates the theme files, and updates package.json.
 * @param {type} name Just to show jsdoc colors
 */
function main() {
  themes.forEach((theme) => {
    console.log(`Generating ${theme.label} theme...`)
    const file = structuredClone(template)
    file.name = file.name.replace("#theme-name", theme.label)
    Object.keys(file.colors).forEach((key) => {
      file.colors[key] = file.colors[key].replace(
        "#background",
        theme.background
      )
      file.colors[key] = file.colors[key].replace(
        "#foreground",
        theme.foreground
      )
      file.colors[key] = file.colors[key].replace("#border", theme.border)
      file.colors[key] = file.colors[key].replace("#constant", theme.constant)
    })
    file.tokenColors.forEach((group) => {
      const foreground = group.settings.foreground
      foreground && (group.settings.foreground = theme[foreground.substring(1)])
    })
    writeFileSync(
      `./themes/dark-rotor-${theme.label}.json`,
      JSON.stringify(file, null, 2)
    )
  })

  console.log("Updating package.json...")
  const pkgjson = JSON.parse(readFileSync("./package.json"))
  pkgjson.contributes = {
    themes: themes.map((theme) => ({
      label: `dark-rotor-${theme.label}`,
      uiTheme: "vs-dark",
      path: `./themes/dark-rotor-${theme.label}.json`,
    })),
  }
  writeFileSync("./package.json", JSON.stringify(pkgjson, null, 2))
}

main()
