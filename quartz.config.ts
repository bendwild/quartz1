import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "my digital swamp",
    pageTitleSuffix: "",
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
    header: "Poppins",        // More modern, friendly sans-serif for headings
    body: "Inter",            // Clean, highly legible sans-serif for body text
    code: "IBM Plex Mono",    // Keep for code, still excellent
  },
  colors: {
    lightMode: {
      light: "#fefefe",        // very bright base
      lightgray: "#f5f5f7",    // subtle gray for contrast
      gray: "#d1d1d6",         // slightly stronger mid-gray
      darkgray: "#3a3a3c",     // dark gray for text
      dark: "#1c1c1e",         // almost black for strong contrast
      secondary: "#ff5e57",    // vibrant coral/red accent (very "thumbnail")
      tertiary: "#ffb347",     // warm, modern orange highlight
      highlight: "rgba(255, 94, 87, 0.1)", // light hover highlight
      textHighlight: "#fffb0088", // vibrant yellow for highlights
    },
    darkMode: {
      light: "#121212",        // true dark mode base
      lightgray: "#1e1e1e",    // soft contrast
      gray: "#3c3c3c",         // mid-gray
      darkgray: "#cccccc",     // light text
      dark: "#f1f1f1",         // very light for strong contrast text
      secondary: "#ff5e57",    // keep accent strong in dark mode
      tertiary: "#ffb347",
      highlight: "rgba(255, 94, 87, 0.1)",
      textHighlight: "#ffe34788", 
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
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
