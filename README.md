# dark-rotor: Minimalist Dark Theme for VSCode

Welcome to **dark-rotor**. This theme aims to provide a calm, zen-like coding experience by using a minimal number of colors. It primarily highlights constants and function names, while other tokens are displayed in shades of grey.

## Features

- **Minimalistic Color Scheme**: The theme uses a limited color palette to reduce visual clutter.
- **Focus on Constants and Functions**: Constants and function names are distinctly colorized for quick recognition.
- **Zen-like Experience**: Most other tokens are rendered in various shades of grey to maintain focus and reduce eye strain.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
3. Search for `dark-rotor`.
4. Click `Install` to install the theme.
5. Once installed, go to `Preferences` > `Color Theme` and select `dark-rotor` from the list.

## Color Scheme

### Colors Used

### Charcoal Theme

- **Background**: #121212
- **Foreground**: #b4b4b4
- **Borders**: #222222
- **Shadows, Comments**: #525050, #707070
- **Constants**: #57a46e
- **Functions, Methods**: #5990bc
- **Keywords, Operators, Punctuation**: #888888

### Blue Theme

- **Background**: #0d1b2a
- **Foreground**: #a3b9cc
- **Borders**: #1b263b
- **Shadows, Comments**: #475d77, #6b7b94
- **Constants**: #69c19e
- **Functions, Methods**: #d9b27a
- **Keywords, Operators, Punctuation**: #859bb2

## Recommended Settings

```json
{
  "editor.guides.indentation": false,
  "editor.guides.bracketPairs": false,
  "editor.language.colorizedBracketPairs": [],
  "editor.occurrencesHighlight": "singleFile",
  "editor.codeLens": true,
  "editor.formatOnType": false,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.fontFamily": "JetBrainsMono Nerd Font",
  "editor.fontLigatures": true,
  "editor.fontSize": 18,
  "editor.lineHeight": 1.5,
  "editor.tabSize": 2,
  "editor.tabCompletion": "on",
  "editor.renderControlCharacters": true,
  "editor.accessibilitySupport": "off",
  "editor.rulers": [],
  "editor.inlineSuggest.suppressSuggestions": true,
  "editor.minimap.enabled": false,
  "editor.lightbulb.enabled": "off",
  "editor.colorDecorators": true,

  "breadcrumbs.enabled": false,
  "zenMode.hideLineNumbers": false,
  "zenMode.centerLayout": false,
  "zenMode.hideStatusBar": false,

  "terminal.integrated.fontFamily": "JetBrainsMono Nerd Font",
  "terminal.integrated.fontSize": 12,
  "terminal.integrated.env.osx": {},
  "terminal.integrated.tabs.enabled": true,
  "terminal.integrated.defaultProfile.osx": "zsh",
  "terminal.integrated.lineHeight": 1.2,
  "terminal.integrated.allowChords": true,
  "terminal.integrated.fontWeight": "normal",
  "terminal.integrated.fontWeightBold": "bold",
  "terminal.integrated.drawBoldTextInBrightColors": false,
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "underline",
  "terminal.integrated.minimumContrastRatio": 1,

  "debug.console.fontFamily": "JetBrainsMono Nerd Font",
  "debug.javascript.autoAttachFilter": "disabled",

  "workbench.colorTheme": "dark-rotor-blue",
  "workbench.preferredDarkColorTheme": "dark-rotor-blue",
  "workbench.editor.empty.hint": "hidden",
  "workbench.panel.defaultLocation": "right",
  "workbench.sideBar.location": "right",
  "workbench.fontAliasing": "antialiased",
  "workbench.colorCustomizations": {},

  "typescript.updateImportsOnFileMove.enabled": "prompt",

  "eslint.codeAction.showDocumentation": {
    "enable": true
  },

  "diffEditor.ignoreTrimWhitespace": false,

  "scm.inputFontSize": 12,

  "markdown.preview.fontFamily": "JetBrainsMono Nerd Font"
}
```

## Customization

If you wish to further customize the theme, you can edit your user settings in VSCode:

1. Go to `Preferences` > `Settings`.
2. Search for `workbench.colorCustomizations`.
3. Add your custom color settings in the JSON configuration.

Example:

```json
"workbench.colorCustomizations": {
    "editor.background": "#1e1e1e",
    "editor.foreground": "#d4d4d4",
    "editorCursor.foreground": "#d4d4d4",
    "editor.lineHighlightBackground": "#2e2e2e",
    "editor.selectionBackground": "#3e3e3e",
    "editor.selectionHighlightBackground": "#4e4e4e",
    "editorIndentGuide.background": "#3e3e3e",
    "editorIndentGuide.activeBackground": "#d4d4d4"
}
```

## Feedback and Contributions

We welcome any feedback or contributions to improve this theme. Please feel free to open an issue or submit a pull request on our [GitHub repository](https://github.com/rotorsoft/dark-rotor).

## License

This theme is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Thank you for using **dark-rotor**. Enjoy your zen-like coding experience!
