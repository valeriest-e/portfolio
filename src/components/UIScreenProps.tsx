import Masonry from "react-masonry-css";
import React from "react";

interface UIScreenProps {
  section: {
    label?: string;
    images: string[];
    layout?: "desktop-main" | "single" | "masonry";
    desktopRatio?: number;
    fullWidth?: boolean;
  };
}

const UIScreenSection: React.FC<UIScreenProps> = ({ section }) => {
  const { label, images, layout = "desktop-main", desktopRatio = 0.7, fullWidth = true } = section;

  // Single image
if (layout === "single" || images.length === 1) {
  return (
    <section className="w-full mb-20">
      {label && (
        <h2 className="text-2xl font-bold mb-8 text-center">
          {label}
        </h2>
      )}

      {fullWidth ? (
        // FULL WIDTH IMAGE
        <img
          src={images[0]}
          alt={label || "UI Screen"}
          className="w-full h-auto rounded-lg"
        />
      ) : (
        // CONTAINED IMAGE ✅
        <div className="px-4">
          <div className="max-w-5xl mx-auto">
            <img
              src={images[0]}
              alt={label || "UI Screen"}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}

  // Masonry layout
  if (layout === "masonry") {
    return (
      <section className={`w-full mb-20 ${fullWidth ? "px-0" : "px-4 text-left"}`}>
        {label && <h2 className="text-2xl font-bold mb-8 text-center">{section.label ?? ""}</h2>}
        <Masonry
          breakpointCols={2}
          className="flex gap-6"
          columnClassName="flex flex-col gap-6"
        >
          {images.map((img, i) => (
            <img key={i} src={img} alt={`${label || "UI Screen"} ${i + 1}`} className="w-full rounded-lg" />
          ))}
        </Masonry>
      </section>
    );
  }

  // Desktop-main layout
  const mobileRatio = 1 - desktopRatio;
  return (
    <section className={`w-full mb-20 ${fullWidth ? "px-0" : "px-4 text-left"}`}>
      {label && <h2 className="text-2xl font-bold mb-8 text-center">{section.label ?? ""}</h2>}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-start">
        {/* Desktop / main */}
        <div className="flex-shrink-0" style={{ width: `${desktopRatio * 100}%` }}>
          <img
            src={images[0]}
            alt={`${label || "UI Screen"} Desktop`}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        {/* Secondary / mobile */}
        {images[1] && (
          <div className="flex-shrink-0" style={{ width: `${mobileRatio * 100}%` }}>
            <img
              src={images[1]}
              alt={`${label || "UI Screen"} Mobile`}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default UIScreenSection;