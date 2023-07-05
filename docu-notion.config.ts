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

const config: IDocuNotionConfig = {
  plugins: [youtubeEmbed, twitterEmbed],
};
export default config;