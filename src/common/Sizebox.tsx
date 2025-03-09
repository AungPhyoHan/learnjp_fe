interface SizeBoxFC {
  width?: string;
  height?: string;
}

const Sizebox: React.FC<SizeBoxFC> = ({ width, height }) => {
  return <div style={{ width, height }} />;
};

export default Sizebox;
