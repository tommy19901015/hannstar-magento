type CarouselItem = {
  thumb: string;
  img: string;
  full: string;
  caption: string;
  position: string;
  isMain: boolean;
  type: string;
  videoUrl: any;
};

export interface I_Carousel {
  imgs: CarouselItem[];
}
