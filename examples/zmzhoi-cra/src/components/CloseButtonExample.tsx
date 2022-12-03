import { CloseButton, CloseIcon } from '@no-ui/close-button';

function CloseButtonExample() {
  return (
    <div style={{ overflow: 'auto' }}>
      <div>
        <CloseButton size="lg" onClick={() => alert('hi')} />
        <CloseButton
          size="md"
          onClick={(event) => {
            console.log(event);
          }}
        />
        <CloseButton size="sm" />
        <hr />
        <CloseButton
          size="lg"
          animate
          onMouseEnter={(event) => console.log('enter : ', event)}
          onMouseLeave={(event) => console.log('leave : ', event)}
          className={'whatever good man'}
          style={{ marginBottom: '5rem' }}
        />
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
