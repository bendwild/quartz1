import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "<digital swamp>",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google",
      tagId: "G-RCYN3NJ7Y9"
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
  theme: {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
  header: "Poppins",        // modern sans-serif, keep
  body: "Inter",            // very readable sans-serif, keep
  code: "IBM Plex Mono",    // excellent for code, keep
},
colors: {
  lightMode: {
    light: "#f3efe7",      // softer, warm paper tone (background)
    lightgray: "#e8e4da",  // subtle section backgrounds
    gray: "#ccc7b8",       // table/grid lines, faint dividers
    darkgray: "#7b7b6e",   // general text, soft earth
    dark: "#2f2f29",       // header text
    secondary: "hsl(80, 22%, 58%)",  // softened olive green
    tertiary: "hsl(60, 18%, 45%)",   // sand yellow-beige
    highlight: "rgba(155, 175, 165, 0.15)",  // faint highlight bg
    textHighlight: "#fff28f88",  // pastel yellow text highlight
  },
  darkMode: {
    light: "#181712",      // dark warm background
    lightgray: "#2d291f",  // blockquote or callouts
    gray: "#3f3a2f",       // dividers and subtle borders
    darkgray: "#918a77",   // body text in dark mode
    dark: "#e3e0d4",       // header text light mode
    secondary: "hsl(80, 20%, 40%)",  // deeper olive
    tertiary: "hsl(60, 15%, 35%)",   // muted gold sand
    highlight: "rgba(100, 120, 100, 0.15)",
    textHighlight: "#bfb36a88",  // muted yellow highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter({
      delims: "---",
      language: "yaml"
      }),
      Plugin.HardLineBreaks(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      // Custom transformer to remove Obsidian Spaced Repetition comments
      {
        name: "RemoveSRComments",
        textTransform(_ctx, src) {
          // Remove all <!--SR:...–-> comments that break Quartz parsing
          return src.replace(/<!--SR:.*?-->/gs, "")
        },
      },
      Plugin.ObsidianFlavoredMarkdown({ 
        enableInHtmlEmbed: true,
        enableCheckbox: true
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}
export default config
