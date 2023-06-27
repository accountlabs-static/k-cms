import { IDocuNotionConfig, IPlugin } from "@sillsdev/docu-notion";

export const youtubeEmbed: IPlugin = {
  name: "youtube",
  regexMarkdownModifications: [
    {
      regex: /\[embed\]\((.*youtube\.com\/watch.*)\)/,
      imports: [`import ReactPlayer from "react-player";`],
      replacementPattern: `<ReactPlayer controls url="$1" />`,
    },
  ],
};

const config: IDocuNotionConfig = {
  plugins: [youtubeEmbed],
};
export default config;