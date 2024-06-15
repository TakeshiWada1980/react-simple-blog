import { useParams } from "react-router-dom";

const NotFound = () => {
  const { "*": path } = useParams();
  return (
    <div className="mt-5">
      <h1>NotFound</h1>
      <div>指定されたパス '/{path}' にコンテンツは存在しません。</div>
    </div>
  );
};

export default NotFound;
