export const colors = [
  {
    scope: ["comment"],
    settings: { foreground: "#5C6370", fontStyle: "italic" },
  },
  {
    scope: ["comment markup.link", "punctuation.definition.comment"],
    settings: { foreground: "#5C6370" },
  },
  {
    scope: [
      "entity.name.type",
      "entity.other.inherited-class",
      "support.class",
      "entity.name.class",
      "entity.name.type.class",
      "meta.class",
      "string.regexp source.ruby.embedded",
      "meta.array.literal.js variable",
      "meta.array.literal.jsx variable",
      "meta.array.literal.ts variable",
      "meta.array.literal.tsx variable",
    ],
    settings: { foreground: "#E5C07B" },
  },
  {
    scope: ["punctuation.definition.bold"],
    settings: { foreground: "#E5C07B", fontStyle: "bold" },
  },
  {
    scope: [
      "keyword",
      "keyword.control",
      "keyword.operator",
      "storage",
      "storage.type.annotation",
      "storage.type.primitive",
      "keyword.operator.expression.in.js",
      "keyword.operator.expression.in.jsx",
      "keyword.operator.expression.in.ts",
      "keyword.operator.expression.in.tsx",
      "keyword.operator.new.ts",
      "keyword.operator.new.j",
      "keyword.operator.new.tsx",
      "meta.selector",
      "source.js keyword.operator.delete",
      "source.js keyword.operator.in",
      "source.js keyword.operator.of",
      "source.js keyword.operator.instanceof",
      "source.js keyword.operator.new",
      "source.js keyword.operator.typeof",
      "source.js keyword.operator.void",
      "keyword.operator.expression.instanceof.js",
      "keyword.operator.expression.instanceof.ts",
      "keyword.operator.expression.instanceof.tsx",
      "keyword.operator.expression.of.js",
      "keyword.operator.expression.of.ts",
      "keyword.operator.expression.of.tsx",
    ],
    settings: { foreground: "#C678DD" },
  },
  {
    scope: ["punctuation.definition.italic"],
    settings: { foreground: "#C678DD", fontStyle: "italic" },
  },
  {
    scope: [
      "keyword.other.special-method",
      "punctuation.definition.heading",
      "punctuation.definition.identity",
      "support.function.any-method",
      "entity.name.function",
      "entity.name.section",
      "entity.other.attribute-name.id",
      "meta.require",
    ],
    settings: { foreground: "#61AFEF" },
  },
  {
    scope: [
      "keyword.other.unit",
      "constant",
      "constant.variable",
      "constant.numeric",
      "entity.other.attribute-name",
      "meta.link",
      "support.constant",
      "meta.array-binding-pattern-variable.js variable.other.readwrite.js",
      "meta.array-binding-pattern-variable.ts variable.other.readwrite.ts",
      "meta.array-binding-pattern-variable.tsx variable.other.readwrite.tsx",
      "variable.other.constant.property.js",
      "variable.other.constant.property.ts",
      "variable.other.constant.property.tsx",
      "variable.other.constant.js",
      "variable.other.constant.ts",
      "variable.other.constant.jsx",
      "variable.other.constant.tsx",
      "variable.other.constant.object.js",
      "variable.other.constant.object.jsx",
      "variable.other.constant.object.ts",
      "variable.other.constant.object.tsx",
    ],
    settings: { foreground: "#D19A66" },
  },
  {
    scope: [
      "constant.character.escape",
      "constant.other.color",
      "constant.other.symbol",
      "string.regexp",
      "support.type",
      "support.function",
      "source.js keyword.operator",
      "source.ts keyword.operator",
      "source.flow keyword.operator",
      "source.json meta.structure.dictionary.json > constant.language.json",
      "source.json meta.structure.array.json > constant.language.json",
      "punctuation.separator.key-value.ts",
      "punctuation.separator.key-value.js",
      "punctuation.separator.key-value.tsx",
      "source.js.embedded.html keyword.operator",
      "source.ts.embedded.html keyword.operator",
      "source.ts keyword.operator",
      "source.tsx keyword.operator",
      "constant.language.import-export-all.jsx",
      "constant.language.import-export-all.tsx",
      "constant.language.json",
      "storage.type.property.js",
      "storage.type.property.jsx",
      "storage.type.property.ts",
      "storage.type.property.tsx",
    ],
    settings: { foreground: "#56B6C2" },
  },
  {
    scope: ["storage.modifier.package", "storage.modifier.import"],
    settings: { foreground: "#ABB2BF" },
  },
  {
    scope: ["variable.parameter"],
    settings: { foreground: "#ABB2BF" },
  },
  {
    scope: ["string > source", "string embedded"],
    settings: { foreground: "#ABB2BF" },
  },
  {
    scope: [
      "punctuation.definition.method-parameters",
      "punctuation.definition.function-parameters",
      "punctuation.definition.parameters",
      "punctuation.definition.separator",
      "punctuation.definition.seperator",
      "punctuation.definition.array",
    ],
    settings: { foreground: "#ABB2BF" },
  },
  {
    scope: [
      "punctuation.section.method",
      "punctuation.section.class",
      "punctuation.section.inner-class",
    ],
    settings: { foreground: "#ABB2BF" },
  },
  {
    scope: ["meta.class.body"],
    settings: { foreground: "#ABB2BF" },
  },
  {
    scope: ["meta.method-call", "meta.method"],
    settings: { foreground: "#ABB2BF" },
  },

  {
    scope: ["variable"],
    settings: { foreground: "#E06C75" },
  },
  {
    scope: ["variable.interpolation"],
    settings: { foreground: "#BE5046" },
  },

  {
    scope: ["string"],
    settings: { foreground: "#98C379" },
  },

  {
    scope: ["string.other.link"],
    settings: { foreground: "#E06C75" },
  },

  {
    scope: ["punctuation.section.embedded"],
    settings: { foreground: "#BE5046" },
  },

  {
    scope: ["entity.name.tag"],
    settings: { foreground: "#E06C75" },
  },

  {
    scope: ["meta.definition.variable"],
    settings: { foreground: "#E06C75" },
  },

  {
    scope: ["meta.separator"],
    settings: { foreground: "#ABB2BF" },
  },
  {
    scope: ["meta.tag"],
    settings: { foreground: "#ABB2BF" },
  },
  {
    scope: ["underline"],
    settings: { "text-decoration": "underline" },
  },
  {
    scope: ["none"],
    settings: { foreground: "#ABB2BF" },
  },
  {
    scope: ["invalid.deprecated"],
    settings: { foreground: "#523D14", background: "#E0C285" },
  },
  {
    scope: ["invalid.illegal"],
    settings: { foreground: "white", background: "#E05252" },
  },

  {
    name: "Source Json Meta Structure Dictionary Json > String Quoted Json",
    scope: ["source.json meta.structure.dictionary.json > string.quoted.json"],
    settings: { foreground: "#E06C75" },
  },
  {
    name: "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
    scope: [
      "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
    ],
    settings: { foreground: "#E06C75" },
  },
  {
    name: "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
    scope: [
      "source.json meta.structure.dictionary.json > value.json > string.quoted.json",
      "source.json meta.structure.array.json > value.json > string.quoted.json",
      "source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation",
      "source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
    ],
    settings: { foreground: "#98C379" },
  },

  {
    name: "customrule",
    scope: "customrule",
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] Support Type Property Name",
    scope: "support.type.property-name",
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] Punctuation for Quoted String",
    scope: "string.quoted.double punctuation",
    settings: { foreground: "#98C379" },
  },

  {
    name: "[VSCODE-CUSTOM] JSON Property Name",
    scope: "support.type.property-name.json",
    settings: { foreground: "#E06C75" },
  },
  {
    name: "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
    scope: "support.type.property-name.json punctuation",
    settings: { foreground: "#E06C75" },
  },

  {
    name: "[VSCODE-CUSTOM] JS/TS Variable Other Readwrite",
    scope: [
      "variable.other.readwrite.js",
      "variable.other.readwrite.ts",
      "variable.other.readwrite.tsx",
    ],
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Support Variable Dom",
    scope: ["support.variable.dom.js", "support.variable.dom.ts"],
    settings: { foreground: "#E06C75" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Support Variable Property Dom",
    scope: [
      "support.variable.property.dom.js",
      "support.variable.property.dom.ts",
    ],
    settings: { foreground: "#E06C75" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Interpolation String Punctuation",
    scope: [
      "meta.template.expression.js punctuation.definition",
      "meta.template.expression.ts punctuation.definition",
    ],
    settings: { foreground: "#BE5046" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Punctuation Type Parameters",
    scope: [
      "source.ts punctuation.definition.typeparameters",
      "source.js punctuation.definition.typeparameters",
      "source.tsx punctuation.definition.typeparameters",
    ],
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Definition Block",
    scope: [
      "source.ts punctuation.definition.block",
      "source.js punctuation.definition.block",
      "source.tsx punctuation.definition.block",
    ],
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Punctuation Separator Comma",
    scope: [
      "source.ts punctuation.separator.comma",
      "source.js punctuation.separator.comma",
      "source.tsx punctuation.separator.comma",
    ],
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Variable Property",
    scope: [
      "support.variable.property.js",
      "support.variable.property.ts",
      "support.variable.property.tsx",
    ],
    settings: { foreground: "#E06C75" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Default Keyword",
    scope: [
      "keyword.control.default.js",
      "keyword.control.default.ts",
      "keyword.control.default.tsx",
    ],
    settings: { foreground: "#E06C75" },
  },

  {
    name: "[VSCODE-CUSTOM] JS/TS Braces/Brackets",
    scope: [
      "meta.brace.round.js",
      "meta.array-binding-pattern-variable.js",
      "meta.brace.square.js",
      "meta.brace.round.ts",
      "meta.array-binding-pattern-variable.ts",
      "meta.brace.square.ts",
      "meta.brace.round.tsx",
      "meta.array-binding-pattern-variable.tsx",
      "meta.brace.square.tsx",
    ],
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Punctuation Accessor",
    scope: [
      "source.js punctuation.accessor",
      "source.ts punctuation.accessor",
      "source.tsx punctuation.accessor",
    ],
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Punctuation Terminator Statement",
    scope: [
      "punctuation.terminator.statement.js",
      "punctuation.terminator.statement.ts",
      "punctuation.terminator.statement.tsx",
    ],
    settings: { foreground: "#ABB2BF" },
  },

  {
    name: "[VSCODE-CUSTOM] JS/TS Support Variables",
    scope: [
      "source.js support.variable",
      "source.ts support.variable",
      "source.tsx support.variable",
    ],
    settings: { foreground: "#E06C75" },
  },

  {
    name: "[VSCODE-CUSTOM] JS/TS Punctuation Parameter Separator",
    scope: [
      "punctuation.separator.parameter.js",
      "punctuation.separator.parameter.ts",
      "punctuation.separator.parameter.tsx ",
    ],
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Import",
    scope: [
      "constant.language.import-export-all.js",
      "constant.language.import-export-all.ts",
    ],
    settings: { foreground: "#E06C75" },
  },

  {
    name: "[VSCODE-CUSTOM] JS/TS Keyword Control As",
    scope: [
      "keyword.control.as.js",
      "keyword.control.as.ts",
      "keyword.control.as.jsx",
      "keyword.control.as.tsx",
    ],
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Variable Alias",
    scope: [
      "variable.other.readwrite.alias.js",
      "variable.other.readwrite.alias.ts",
      "variable.other.readwrite.alias.jsx",
      "variable.other.readwrite.alias.tsx",
    ],
    settings: { foreground: "#E06C75" },
  },

  {
    name: "[VSCODE-CUSTOM] JS/TS Export Variable",
    scope: [
      "meta.export.default.js variable.other.readwrite.js",
      "meta.export.default.ts variable.other.readwrite.ts",
    ],
    settings: { foreground: "#E06C75" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Template Strings Punctuation Accessor",
    scope: [
      "source.js meta.template.expression.js punctuation.accessor",
      "source.ts meta.template.expression.ts punctuation.accessor",
      "source.tsx meta.template.expression.tsx punctuation.accessor",
    ],
    settings: { foreground: "#98C379" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Import equals",
    scope: [
      "source.js meta.import-equals.external.js keyword.operator",
      "source.jsx meta.import-equals.external.jsx keyword.operator",
      "source.ts meta.import-equals.external.ts keyword.operator",
      "source.tsx meta.import-equals.external.tsx keyword.operator",
    ],
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Type Module",
    scope:
      "entity.name.type.module.js,entity.name.type.module.ts,entity.name.type.module.jsx,entity.name.type.module.tsx",
    settings: { foreground: "#98C379" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Meta Class",
    scope: "meta.class.js,meta.class.ts,meta.class.jsx,meta.class.tsx",
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Property Definition Variable",
    scope: [
      "meta.definition.property.js variable",
      "meta.definition.property.ts variable",
      "meta.definition.property.jsx variable",
      "meta.definition.property.tsx variable",
    ],
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Meta Type Parameters Type",
    scope: [
      "meta.type.parameters.js support.type",
      "meta.type.parameters.jsx support.type",
      "meta.type.parameters.ts support.type",
      "meta.type.parameters.tsx support.type",
    ],
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Meta Tag Keyword Operator",
    scope: [
      "source.js meta.tag.js keyword.operator",
      "source.jsx meta.tag.jsx keyword.operator",
      "source.ts meta.tag.ts keyword.operator",
      "source.tsx meta.tag.tsx keyword.operator",
    ],
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Meta Tag Punctuation",
    scope: [
      "meta.tag.js punctuation.section.embedded",
      "meta.tag.jsx punctuation.section.embedded",
      "meta.tag.ts punctuation.section.embedded",
      "meta.tag.tsx punctuation.section.embedded",
    ],
    settings: { foreground: "#ABB2BF" },
  },

  {
    name: "[VSCODE-CUSTOM] JS/TS Module Exports",
    scope: [
      "support.type.object.module.js",
      "support.type.object.module.jsx",
      "support.type.object.module.ts",
      "support.type.object.module.tsx",
    ],
    settings: { foreground: "#E06C75" },
  },

  {
    name: "[VSCODE-CUSTOM] JS/TS Single Quote Inside Templated String",
    scope: [
      "meta.template.expression.js string.quoted punctuation.definition",
      "meta.template.expression.jsx string.quoted punctuation.definition",
      "meta.template.expression.ts string.quoted punctuation.definition",
      "meta.template.expression.tsx string.quoted punctuation.definition",
    ],
    settings: { foreground: "#98C379" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Backtick inside Templated String",
    scope: [
      "meta.template.expression.js string.template punctuation.definition.string.template",
      "meta.template.expression.jsx string.template punctuation.definition.string.template",
      "meta.template.expression.ts string.template punctuation.definition.string.template",
      "meta.template.expression.tsx string.template punctuation.definition.string.template",
    ],
    settings: { foreground: "#98C379" },
  },

  {
    name: "[VSCODE-CUSTOM] JS/TS Variable Other Object",
    scope: ["variable.other.object.js", "variable.other.object.ts"],
    settings: { foreground: "#ABB2BF" },
  },
  {
    name: "[VSCODE-CUSTOM] JS/TS Meta Object Literal Key",
    scope: ["meta.object-literal.key.js", "meta.object-literal.key.ts"],
    settings: { foreground: "#E06C75" },
  },
]
