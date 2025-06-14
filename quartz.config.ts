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
          light: "#e3dcd4",      // --color-base-00
          lightgray: "#f5f3e0", // --color-base-05
          gray: "#e2e4cc",      // --color-base-20
          darkgray: "#989988",  // --color-base-30
          dark: "#46473f",      // --color-base-40
          secondary: "hsl(79, 25%, 67%)", // --color-accent
          tertiary: "hsl(76, 25%, 57%)",  // --color-accent-1
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1c1a15",     // --color-base-00
          lightgray: "#352e23", // --color-base-05
          gray: "#4b4638",      // --color-base-30
          darkgray: "#8e7d58",  // --color-base-60
          dark: "#e3dcd4",      // --color-base-100
          secondary: "hsl(79, 20%, 45%)", // --color-accent
          tertiary: "hsl(79, 20%, 35%)",  // --color-accent-1
          highlight: "rgba(110, 140, 130, 0.15)",
          textHighlight: "#b7ad4e88",
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
