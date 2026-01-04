// Gallery.tsx
import React from "react";
import Masonry from "react-masonry-css";

interface GalleryProps {
  images: string[];
  label?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, label }) => {
  if (!images || images.length === 0) return null;

  return (
    <section className="w-full px-4 mb-20 text-left">
      {label && <h2 className="text-2xl font-bold mb-8 text-center">{label}</h2>}

      {images.length === 1 ? (
        <img
          src={images[0]}
          alt={label || "Image"}
          className="w-full h-auto rounded-lg"
        />
      ) : (
        <Masonry
  breakpointCols={2}
  className="flex gap-6"
  columnClassName="flex flex-col gap-6"
>
  {images.map((img, i) => (
    <img
      key={i}
      src={img}
      alt={`${label} ${i + 1}`}
      className="w-full rounded-lg"
    />
  ))}
</Masonry>
      )}
    </section>
  );
};

export default Gallery;