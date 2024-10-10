import Image from "next/image";
import Typography from "../Typography/Typography";
import LinkButton from "../LinkButton/LinkButton";

interface TradingPlatformCardProps {
  title: string;
  excerpt: string;
  content: string;
  icon: "tv" | "mt4" | "mt5" | "ctrader" | "bb";
  link_to: string;
}

export default function TradingPlatformCard({
  title,
  link_to,
  icon,
  excerpt,
}: TradingPlatformCardProps) {
  return (
    <div className="w-1/3 p-8 bg-white rounded-sm flex flex-col justify-start items-start border-2 border-primary-default rounded-xm gap-5">
      <div className="flex gap-2 items-center mb-2">
        <Image
          src={`/platform_icons/${icon}.svg`}
          width={50}
          height={50}
          alt={excerpt}
        />
        <Typography variant="h4" color="text-black-default">
          {title}
        </Typography>
      </div>
      <Typography variant="body" color="text-black-50">
        {excerpt}
      </Typography>
      <LinkButton
        variant="light"
        href={link_to}
        label="Learn more"
        size="base"
        bold
      />
    </div>
  );
}
