import { useParams } from 'react-router-dom';

const URLParamTest = () => {
  const params = useParams();
  return (
    <div>
      <h1>Hello World! Query = {params.id}</h1>
    </div>
  );
};

export default URLParamTest;
