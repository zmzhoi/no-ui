# @no-ui/loader

## Installation

```sh
npm i @no-ui/loader
```

## Usage

```javascript
import { boxLoader } from '@no-ui/loader';

function LoaderExample() {
  const onClick = () => {
    boxLoader.show('데이터를 가져오는 중입니다...');
    setTimeout(() => boxLoader.hide(), 2000);
  };

  return (
    <div>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
```
