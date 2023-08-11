import { IDocuNotionConfig, IPlugin } from "@codeharbor/docu-notion";

export const youtubeEmbed: IPlugin = {
  name: "youtube",
  regexMarkdownModifications: [
    {
      regex: /\[image\]\((.*youtube\.com\/watch.*)\)/,
      imports: [`import ReactPlayer from "react-player";`],
      replacementPattern: `
<div
  style={{
    position: 'relative',
    paddingTop: '56.25%',
  }}
>
  <ReactPlayer
    url="$1"
    width="100%"
    height="100%"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
    }}
  />
</div>`,
    },
  ],
};

export const replaceTabsWithSpaces: IPlugin = {
  name: "replace-tabs",
  regexMarkdownModifications: [
    {
      regex: /\t/g,
      replacementPattern: "    ",
    },
  ],
};

export const twitterEmbed: IPlugin = {
  name: "twitter",
  regexMarkdownModifications: [
    {
      regex: /\[embed\]\(https?:\/\/twitter\.com\/(?:\w+)\/status\/(\d+)(?:\?(?:[\w-]+=[\w-]+&)*(?:[\w-]+=[\w-]+))?\)/,
      imports: [`import { TwitterTweetEmbed } from "react-twitter-embed";`],
      replacementPattern: `
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
  }}
>
  <div style={{
    maxWidth: '420px',
    width: '100%',
  }}>
    <TwitterTweetEmbed tweetId="$1" />
  </div>
</div>
`,
    },
  ],
}

export const removeSpacesBeforeTags: IPlugin = {
  name: "remove-spaces-before-tags",
  regexMarkdownModifications: [
    {
      regex: /(^|\n)[ \t]*(\<\/?.*?\>)/g,
      replacementPattern: "$1$2",
    },
  ],
};

const config: IDocuNotionConfig = {
  plugins: [youtubeEmbed, twitterEmbed, replaceTabsWithSpaces],
};
export default config;