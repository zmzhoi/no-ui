import { boxLoader } from '@no-ui/loader';

function LoaderExample() {
  const onClick = () => {
    boxLoader.show();
    setTimeout(() => boxLoader.hide(), 1000);
  };

  return (
    <div>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default LoaderExample;
