import React from 'react';
import Image, { StaticImageData } from 'next/image';

type cardProps = {
  icon?: StaticImageData | string;
  title: string;
  description?: string;
  img?: StaticImageData | string;
  className?: string;
  titleClass?: string;
  descriptionClass?: string;
  imageClass?: string;
  iconClass?: string;
  desImageClass?: string;
};

const Card = ({
  img,
  title,
  description,
  icon,
  className,
  titleClass,
  descriptionClass,
  imageClass,
  iconClass,
  desImageClass
}: cardProps) => {
  return (
    <div className={className}>
      {icon ? (
        <span className={iconClass}>
          {/* Render Image only if icon is present */}
          <Image src={icon} alt='icon' width={42} height={42} />
        </span>
      ) : null}

      <h1 className={titleClass}>{title}</h1>

      <div className={desImageClass}>
        <p className={descriptionClass}>{description}</p>

        {img ? (
          <span className={imageClass}>
            {/* Render Image only if img is present */}
            <Image src={img} alt='image' />
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
