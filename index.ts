import fs from "fs";
import * as colors from "./colors";
import config from "./config";

const test = "#f00";

const primary = colors.aqua700;
const primaryDark = colors.aqua400;
const primaryDarker = colors.aqua300;
const primaryTransparent = colors.aquaTransparent300;
const primaryTransparentDark = colors.aquaTransparent100;

const textColor = colors.white;

const border = colors.gray100;

const background = colors.black;
const backgroundAccentDark = colors.gray100;
const backgroundAccent = colors.gray200;
const backgroundAccentLighter = colors.gray300;

const theme = {
  name: "Oled Neon Theme",
  colors: {
    // Cntrast colors  --------------------------------------------------------
    contrastActiveBorder: primary,
    contrastBorder: border,

    // Base colors  ------------------------------------------------------------
    focusBorder: primary,
    foreground: colors.white,
    disabledForeground: colors.gray700,
    "widget.shadow": colors.aquaTransparent400,
    "selection.background": colors.aquaTransparent400,
    "icon.foreground": textColor,
    // descriptionForeground: colors.red,
    // errorForeground: colors.white,
    // "sash.hoverBorder": colors.red,

    // Window Border -----------------------------------------------------------
    // "window.activeBorder": colors.green,
    // "window.inactiveBorder": colors.red,

    // Text colors -------------------------------------------------------------
    "textLink.foreground": primaryDark,
    // "textBlockQuote.background": colors.red,
    // "textBlockQuote.border": colors.red,
    // "textCodeBlock.background": colors.red,
    // "textLink.activeForeground": colors.red,
    // "textPreformat.foreground": colors.red,
    // "textSeparator.foreground": colors.red,

    // Action colors -----------------------------------------------------------
    "toolbar.hoverBackground": backgroundAccent,
    "toolbar.hoverOutline": primary,
    "toolbar.activeBackground": primaryTransparent,

    // Button control ----------------------------------------------------------
    "button.background": primaryDarker,
    "button.foreground": textColor,
    "button.border": primary,

    "checkbox.background": colors.blue700,
    "checkbox.foreground": textColor,

    // Dropdown control --------------------------------------------------------
    "dropdown.background": backgroundAccent,
    "dropdown.listBackground": test,
    "dropdown.border": backgroundAccentLighter,
    "dropdown.foreground": textColor,

    // Input control -----------------------------------------------------------
    "input.background": backgroundAccent,
    "input.border": backgroundAccentLighter,
    "input.foreground": colors.white,
    "input.placeholderForeground": colors.gray500,
    "inputOption.activeBackground": primaryDarker,
    "inputOption.activeBorder": primary,
    "inputOption.activeForeground": colors.white,
    "inputOption.hoverBackground": primaryDarker,
    // "inputValidation.errorBackground": primaryDarker,

    // Scrollbar control -------------------------------------------------------
    "scrollbar.shadow": primary,
    "scrollbarSlider.activeBackground": primaryDarker,
    // "scrollbarSlider.background": colors.gray300,
    // "scrollbarSlider.hoverBackground": colors.gray300,

    // Badge -------------------------------------------------------------------
    "badge.foreground": textColor,
    "badge.background": primaryDarker,

    // Progress bar ------------------------------------------------------------
    "progressBar.background": primary,

    // Lists and trees ---------------------------------------------------------
    "list.activeSelectionBackground": primaryTransparent,
    "list.activeSelectionForeground": textColor,
    "list.dropBackground": primaryTransparent,
    "list.focusOutline": primaryTransparent,
    "list.hoverBackground": primaryTransparent,
    "list.hoverForeground": textColor,
    "list.inactiveSelectionBackground": primaryTransparentDark,
    "list.inactiveFocusOutline": primaryTransparent,
    "list.invalidItemForeground": test,

    // Activity Bar ------------------------------------------------------------
    "activityBar.background": background,
    "activityBar.dropBorder": primary,
    "activityBar.foreground": primary,
    "activityBar.inactiveForeground": primaryDarker,
    "activityBar.border": backgroundAccent,
    "activityBarBadge.background": primaryDarker,
    "activityBarBadge.foreground": textColor,
    "activityBar.activeBorder": primary,
    "activityBar.activeBackground": backgroundAccentDark,
    "activityBar.activeFocusBorder": primary,

    // Activity Bar ------------------------------------------------------------
    "sideBar.background": background,
    "sideBar.foreground": textColor,
    "sideBar.border": border,
    "sideBar.dropBackground": primaryTransparent,
    "sideBarTitle.foreground": textColor,
    "sideBarSectionHeader.background": primaryTransparentDark,
    "sideBarSectionHeader.foreground": textColor,
    "sideBarSectionHeader.border": border,

    // Minimap -----------------------------------------------------------------

    // "minimap.findMatchHighlight": primary,
    // "minimap.selectionHighlight": test,
    // "minimap.errorHighlight": test,
    // "minimap.warningHighlight": test,
    // "minimap.background": test,
    // "minimap.selectionOccurrenceHighlight": test,
    // "minimap.foregroundOpacity": test,
    // "minimapSlider.background": test,
    // "minimapSlider.hoverBackground": test,
    // "minimapSlider.activeBackground": test,
    // "minimapGutter.addedBackground": test,
    // "minimapGutter.modifiedBackground": test,
    // "minimapGutter.deletedBackground": test,

    // Editor widgets ----------------------------------------------------------
    "editorWidget.foreground": textColor,
    "editorWidget.background": backgroundAccentDark,

    // Editor Groups -----------------------------------------------------------
    "editorGroup.border": border,
    "editorGroupHeader.border": border,
    "editorGroupHeader.tabsBackground": background,
    "tab.activeBackground": backgroundAccent,
    "tab.inactiveBackground": background,
    //
    //
    // -------------------------------------------------------------------------

    "editor.foreground": textColor,
    "editor.background": background,
    "editorLineNumber.activeForeground": primary,
    "statusBar.background": background,
    "sidePanel.background": background,
    "panel.background": background,
  },

  tokenColors: [
    {
      scope: ["storage.type", "support.class.component", "storage.modifier"],
      settings: {
        foreground: colors.aqua700,
        fontStyle: "",
      },
    },
    {
      scope: [
        "entity.name.tag",
        "entity.name.type",
        "keyword.control.import",
        "keyword.operator.new",
        "keyword.control",
        "punctuation.support",
        "storage.modifier.async",
        "entity.other.inherited-class",
      ],
      settings: {
        foreground: colors.neonPink800,
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "support.type.property-name",
        "entity.name.function",
        "meta.require",
        "support.function.any-method",
        "variable.function",
        "entity.other.attribute-name",
      ],
      settings: {
        foreground: colors.green700,
        fontStyle: "",
      },
    },
    {
      scope: ["comment"],
      settings: {
        foreground: colors.gray400,
        fontStyle: "italic",
      },
    },
    {
      scope: ["support.type.primitive"],
      settings: {
        foreground: colors.blue600,
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "variable.other.constant",
        "variable.other.readwrite",
        "variable.other.object",
      ],
      settings: {
        foreground: colors.purple600,
        fontStyle: "",
      },
    },
    {
      scope: ["string.quoted"],
      settings: {
        foreground: colors.purple800,
        fontStyle: "",
      },
    },
    {
      scope: [
        "variable.other.readwrite.alias",
        "variable.parameter",
        "meta.object-literal.key",
      ],
      settings: {
        foreground: colors.white,
        fontStyle: "",
      },
    },
  ],
};

const stringfiedTheme = JSON.stringify(theme);

function writeThemeFile(path: string, stringfiedThemeJSON: string) {
  console.log(`Writing JSON file to ${path}`);

  fs.writeFile(path, stringfiedThemeJSON, "utf8", function (error) {
    if (error) {
      console.log("An error occured while writing JSON Object to File.");
      console.error(9821, error);
    }
  });
}

config.themePath.map((path) => writeThemeFile(path, stringfiedTheme));

console.log("themes saved");
