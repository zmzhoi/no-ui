import { CloseButton, CloseIcon } from '@no-ui/close-button';

function CloseButtonExample() {
  return (
    <div style={{ overflow: 'auto' }}>
      <div
        style={{
          width: '800px',
          height: '700px',
          border: '1px solid black',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <CloseButton size="lg" />
        <CloseButton size="md" />
        <CloseButton size="sm" />
        <hr />
        <CloseButton size="lg" animate />
        <CloseButton size="md" animate />
        <CloseButton size="sm" animate />
        <hr />
        <CloseButton size="lg" color="blue" animate />
        <CloseButton size="md" color="red" animate />
        <CloseButton size="sm" color="pink" animate />
        <hr />
        <h3>Icon</h3>
        <CloseIcon size="lg" />
        <CloseIcon size="md" color="blue" />
        <CloseIcon size="sm" color="red" />
      </div>
    </div>
  );
}

export default CloseButtonExample;
