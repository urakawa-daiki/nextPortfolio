import type { Metadata } from "next";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  title: string;
  description?: string;
  url?: Url;
  path?: string;
  imageUrl?: string;
};

export const setMetadata = ({
  title,
  description = "",
  url = new URL("https://urakawa.one"),
  path = "/",
  imageUrl = url + "opengraph-image.jpg",
}: Props): Metadata => {
  const template = {
    title: "浦川大輝のポートフォリオサイト",
    description:
      "浦川大輝のポートフォリオサイトです。フロントエンドエンジニアとしてのスキルや、これまでの制作物を紹介しています。",
  };

  const metadata: Metadata = {
    title: {
      absolute: title + template.title,
    },
    description: description + template.description,
    icons: "/favicon.ico",
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
    twitter: {
      card: "summary_large_image",
      images: [imageUrl],
    },
    openGraph: {
      title: {
        absolute: title + template.title,
      },
      description: description + template.description,
      url: url + path,
      siteName: title,
      images: {
        url: imageUrl,
        width: 1200,
        height: 630,
      },
    },
  };
  return metadata;
};
