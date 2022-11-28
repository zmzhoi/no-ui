import { boxLoader } from '@no-ui/loader';

function LoaderExample() {
  const onClick = () => {
    boxLoader.show();
    setTimeout(() => boxLoader.show(), 100);
    setTimeout(() => boxLoader.show(), 200);
    setTimeout(() => boxLoader.show(), 300);
    setTimeout(() => boxLoader.hide(), 1500);
    // setTimeout(() => boxLoader.hide(), 100);
    // setTimeout(() => boxLoader.hide(), 300);
  };

  return (
    <div>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default LoaderExample;
