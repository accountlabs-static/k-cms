import { IDocuNotionConfig, IPlugin } from "@sillsdev/docu-notion";

export const youtubeEmbed: IPlugin = {
  name: "youtube",
  regexMarkdownModifications: [
    {
      regex: /\[image\]\((.*youtube\.com\/watch.*)\)/,
      imports: [`import ReactPlayer from "react-player";`],
      replacementPattern: `<ReactPlayer controls url="$1" />`,
    },
  ],
};

export const twitterEmbed: IPlugin = {
  name: "twitter",
  regexMarkdownModifications: [
    {
      regex: /\[embed\]\(https?:\/\/twitter\.com\/(?:\w+)\/status\/(\d+)(?:\?(?:[\w-]+=[\w-]+&)*(?:[\w-]+=[\w-]+))?\)/,
      imports: [`import { TwitterTweetEmbed } from "react-twitter-embed";`],
      replacementPattern: `<TwitterTweetEmbed tweetId="$1" />`,
    },
  ],
}

const config: IDocuNotionConfig = {
  plugins: [youtubeEmbed, twitterEmbed],
};
export default config;