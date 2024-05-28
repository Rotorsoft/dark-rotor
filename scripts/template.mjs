export const template = {
  name: "dark-rotor-#theme-name",
  type: "dark",
  author: "rotorsoft",
  colors: {
    "activityBar.background": "#background",
    "activityBar.border": "#background",
    "activityBarBadge.background": "#background",
    "banner.background": "#background",
    "breadcrumb.background": "#background",
    "dropdown.background": "#background",
    "dropdown.listBackground": "#background",
    "editor.background": "#background",
    "editorGroupHeader.border": "#background",
    "editorGroupHeader.tabsBackground": "#background",
    "editorOverviewRuler.border": "#background",
    "editorHoverWidget.background": "#background",
    "editorWidget.background": "#background",
    "menu.background": "#background",
    "minimap.background": "#background",
    "panel.background": "#background",
    "sideBar.background": "#background",
    "statusBar.background": "#background",
    "statusBar.noFolderBackground": "#background",
    "tab.activeBackground": "#background",
    "tab.border": "#background",
    "tab.inactiveBackground": "#background",
    "terminal.background": "#background",
    "terminal.border": "#background",
    "titleBar.activeBackground": "#background",
    "titleBar.border": "#background",
    "titleBar.inactiveBackground": "#background",

    "badge.background": "#border",
    "button.background": "#border",
    "checkbox.background": "#border",
    "dropdown.border": "#border",
    "editorGroup.border": "#border",
    focusBorder: "#border",
    "input.background": "#border",
    "input.border": "#border",
    "list.activeSelectionBackground": "#border",
    "list.hoverBackground": "#border77",
    "panel.border": "#border",
    "scrollbar.shadow": "#border",
    "scrollbarSlider.background": "#border77",
    "scrollbarSlider.activeBackground": "#border",
    "scrollbarSlider.hoverBackground": "#border",
    "sideBySideEditor.horizontalBorder": "#border",
    "sideBySideEditor.verticalBorder": "#border",
    "statusBar.border": "#border",
    "widget.border": "#border",

    "activityBarBadge.foreground": "#foreground77",
    disabledForeground: "#foreground77",
    "editor.lineHighlightBackground": "#foreground11",
    "editorLineNumber.foreground": "#foreground77",
    "editorWidget.border": "#foreground77",
    "icon.foreground": "#foreground77",
    "statusBar.foreground": "#foreground77",
    "tab.inactiveForeground": "#foreground77",

    "activityBar.foreground": "#foreground",
    "badge.foreground": "#foreground",
    "button.foreground": "#foreground",
    "checkbox.foreground": "#foreground",
    "dropdown.foreground": "#foreground",
    "editor.foreground": "#foreground",
    "editorLineNumber.activeForeground": "#foreground",
    foreground: "#foreground",
    "input.foreground": "#foreground",
    "list.activeSelectionForeground": "#foreground",
    "panelSectionHeader.foreground": "#foreground",
    "progressBar.background": "#foreground",
    "sideBar.foreground": "#foreground",
    "tab.activeForeground": "#foreground",
    "terminal.foreground": "#foreground",

    "tab.activeBorderTop": "#constant",
  },
  tokenColors: [
    {
      scope: [
        "comment",
        "comment keyword",
        "comment markup.underline.link",
        "comment string",
        "comment punctuation.definition",
        "comment punctuation",
        "comment text",
      ],
      settings: {
        foreground: "#comment",
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "variable",
        "variable.other",
        "variable.parameter",
        "comment variable",
        "support.variable",
        "string constant.other.placeholder",
        "constant.other.color",
        "meta.object-literal.key",
      ],
      settings: {
        foreground: "#variable",
        fontStyle: "",
      },
    },
    {
      scope: [
        "entity.name.function.operator",
        "keyword",
        "keyword.control",
        "keyword.operator",
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.other.template",
        "keyword.other.substitution",
        "keyword.operator.logical",
        "keyword.operator.comparison",
        "keyword.operator.assignment",
        "storage.modifier",
        "storage.type",
        "variable.language",
        "constant.language",
        "support.class",
        "support.type",
        "meta.brackets entity.name.function.operator",
        "meta.tag",
        "meta.brace",
        "constant.other.color",
        "storage.type.function.arrow",
      ],
      settings: {
        foreground: "#keyword",
        fontStyle: "",
      },
    },
    {
      scope: [
        "punctuation",
        "punctuation.definition",
        "punctuation.definition.tag",
        "punctuation.definition.tag.html",
        "punctuation.definition.tag.begin.html",
        "punctuation.definition.tag.end.html",
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded",
        "punctuation.separator",
        "punctuation.terminator",
      ],
      settings: {
        foreground: "#punctuation",
        fontStyle: "",
      },
    },
    {
      scope: [
        "entity.name.function",
        "entity.name.function.templated",
        "entity.name.function.member.static",
        "entity.name.section",
        "entity.other.attribute-name.id",
        "keyword.other.special-method",
        "meta.require",
        "meta.function-call",
        "support.function",
        "variable.function",
      ],
      settings: {
        foreground: "#function",
        fontStyle: "",
      },
    },
    {
      scope: [
        "constant",
        "constant.numeric",
        "constant.language",
        "constant.character.escape",
        "entity.name.operator.custom-literal",
        "string.quoted",
        "string.template",
        "string.quoted.docstring",
        "string.quoted.docstring punctuation.definition",
      ],
      settings: {
        foreground: "#literal",
        fontStyle: "",
      },
    },
    {
      scope: [
        "constant.other",
        "constant.other.caps",
        "constant.other.property",
        "constant.other.color",
        "constant.character.escape",
        "constant.other.character-class.escape",
        "entity.name.constant",
        "support.type.property-name",
        "string.quoted.double.json",
      ],
      settings: {
        foreground: "#constant",
        fontStyle: "",
      },
    },

    {
      scope: ["invalid", "invalid.illegal"],
      settings: {
        foreground: "#invalid",
        fontStyle: "",
      },
    },

    {
      scope: [
        "text.html.basic entity.other.attribute-name.html",
        "text.html.basic entity.other.attribute-name",
      ],
      settings: {
        foreground: "#attribute",
        fontStyle: "",
      },
    },
    {
      scope: [
        "comment entity.name.type",
        "comment storage.type",
        "entity.name.class",
        "entity.name.namespace",
        "entity.name.type",
        "entity.name.type.class",
        "entity.name.type.namespace",
        "entity.other.inherited-class",
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.parent-selector-suffix.css",
        "entity.other.attribute-name.parent-selector-suffix.css punctuation.definition.entity.css",
        "entity.other.attribute-name.css",
        "meta.class",
        "source.css support.type.property-name",
        "source.sass support.type.property-name",
        "source.scss support.type.property-name",
        "source.less support.type.property-name",
        "source.stylus support.type.property-name",
        "source.postcss support.type.property-name",
      ],
      settings: {
        foreground: "#type",
        fontStyle: "",
      },
    },

    {
      scope: [
        "entity.name.tag",
        "string.regexp",
        "meta.tag.sgml",
        "tag.decorator.js entity.name.tag.js",
        "tag.decorator.js punctuation.definition.tag.js",
      ],
      settings: {
        foreground: "#decorator",
        fontStyle: "",
      },
    },

    {
      scope: ["*url*", "*link*", "*uri*"],
      settings: {
        fontStyle: "underline",
      },
    },

    {
      scope: ["markup.heading"],
      settings: {
        fontStyle: "bold",
      },
    },
    {
      scope: ["markup.italic", "markup.quote"],
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: ["markup.bold", "markup.bold string"],
      settings: {
        fontStyle: "bold",
      },
    },
    {
      scope: [
        "markup.bold markup.italic",
        "markup.italic markup.bold",
        "markup.quote markup.bold",
        "markup.bold markup.italic string",
        "markup.italic markup.bold string",
        "markup.quote markup.bold string",
      ],
      settings: {
        fontStyle: "bold italic",
      },
    },
    {
      scope: ["markup.underline"],
      settings: {
        fontStyle: "underline",
      },
    },
  ],
}
