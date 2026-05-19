type Props = {
  index: string;
  label: string;
};

export default function SectionMarker({ index, label }: Props) {
  return (
    <span className="section-marker">
      {index}&nbsp;&nbsp;//&nbsp;&nbsp;{label}
    </span>
  );
}
