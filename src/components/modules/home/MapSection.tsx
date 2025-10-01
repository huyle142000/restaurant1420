import React from "react";

type Props = {};

const MapSection = (props: Props) => {
  return (
    <div className="h-full">
      <iframe
        src="https://www.google.com/maps?q=20.929306,106.987463&z=13&t=k&output=embed"
        className="h-full w-full"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default MapSection;
