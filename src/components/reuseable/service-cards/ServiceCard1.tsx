import NextLink from "../links/NextLink";

import IconProps from "types/icon";
import { LinkType } from "types/demo-1";

// ===============================================================
interface ServiceCard1Props {
  title: string;
  linkUrl: string;
  linkType: LinkType;
  description: string;
  cardClassName?: string;
  iconClassName?: string;
  Icon: (props: IconProps) => JSX.Element;
}
// ===============================================================

export default function ServiceCard1({
  title,
  Icon,
  linkUrl,
  linkType,
  description,
  cardClassName = "",
  iconClassName = "",
}: ServiceCard1Props) {
  return (
    <div className="col-md-6 col-xl-3">
      <div className={`card shadow-lg ${cardClassName}`}>
        <div className="card-body">
          <div className="h-10 w-full mb-4 flex items-center justify-center">
            <Icon className={iconClassName} />
          </div>
          <h4>{title}</h4>
          <p className="mb-2">{description} hh</p>
          {/* <NextLink
            title="Learn More"
            href={linkUrl}
            className={`more hover link-${linkType}`}
          /> */}
        </div>
      </div>
    </div>
  );
}
