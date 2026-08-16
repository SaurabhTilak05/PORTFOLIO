function BackgroundLayer({ image, position = "center", eager = false }) {
  const src = `${import.meta.env.BASE_URL}bgimgs/${image}`;

  return (
    <div className="bg-layer" aria-hidden="true">
      <img
        src={src}
        alt=""
        className="bg-layer-img"
        style={{ objectPosition: position }}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
      />
    </div>
  );
}

export default BackgroundLayer;
