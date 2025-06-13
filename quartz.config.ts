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
    header: "Poppins",        // bold, modern sans-serif
    body: "Inter",            // highly readable sans-serif
    code: "IBM Plex Mono",    // solid code font
  },
  colors: {
    lightMode: {
      light: "#fbf9f3",        // very light parchment-like base
      lightgray: "#f1eee3",    // light warm gray
      gray: "#d7d3c4",         // soft stone gray
      darkgray: "#5f5b4f",     // earthy dark gray
      dark: "#2f2e29",         // almost charcoal
      secondary: "hsl(79, 60%, 50%)", // vibrant swampy green-yellow
      tertiary: "hsl(35, 90%, 55%)",  // vibrant golden ochre (muddy orange)
      highlight: "rgba(152, 201, 142, 0.2)", // soft green highlight
      textHighlight: "#fff23688", // bright but warm yellow for highlights
    },
    darkMode: {
      light: "#181612",        // deep swamp black
      lightgray: "#2c2a24",    // soft muddy gray
      gray: "#4b4638",         // keep some of your original mid tones
      darkgray: "#b1a581",     // light warm sand for text
      dark: "#f2eedf",         // light sand for strong contrast
      secondary: "hsl(79, 55%, 45%)", // still swampy green
      tertiary: "hsl(35, 85%, 50%)",  // golden brown-orange
      highlight: "rgba(152, 201, 142, 0.15)", 
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
