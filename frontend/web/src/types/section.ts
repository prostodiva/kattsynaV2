import React from 'react';

export type ResponsiveImage = {
  alt?: string;
  fallbackSrc: string;
  avifSrcSet: string;
  webpSrcSet: string;
};

export interface BaseSectionProps {
  className?: string;
  style?: React.CSSProperties;
  backgroundImage?: ResponsiveImage;
  children?: React.ReactNode;
}
