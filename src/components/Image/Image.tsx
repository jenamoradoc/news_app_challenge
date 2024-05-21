import ImageNotFound from '../../assets/image-not-found.jpg';

interface ImageProps {
  src: string | null;
  alt: string;
}

const Image = ({ alt, src }: ImageProps) => {
  return <img src={src ?? ImageNotFound} alt={alt} />;
};

export default Image;
