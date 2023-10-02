import { useOrigin } from "@/hooks/user-orgin";
import { useParams, useRouter } from "next/navigation";

type HeadingsProps = {
  title: string;
  description: string;
};

const Heading: React.FC<HeadingsProps> = ({ title, description }) => {
  const params = useParams();
  const navigation = useOrigin();
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default Heading;
