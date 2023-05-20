interface Props extends GCommonCompnentProperties {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  loading?: 'lazy' | 'eager';
}

export function Image({
  src,
  className,
  alt = 'Bozzt',
  width = '100%',
  height = 'auto',
  loading = 'lazy'
}: Props) {
  return (
    <img
      alt={alt}
      src={src}
      width={width}
      height={height}
      loading={loading}
      className={className}
    />
  );
}
