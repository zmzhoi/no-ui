import { Popper, Position } from '@no-ui/popper';
import { useCallback, useState } from 'react';

const positionList: Position[] = [
  ['top', 'left'],
  ['top', 'center'],
  ['top', 'right'],
  ['right', 'top'],
  ['right', 'center'],
  ['right', 'bottom'],
  ['bottom', 'left'],
  ['bottom', 'center'],
  ['bottom', 'right'],
  ['left', 'top'],
  ['left', 'center'],
  ['left', 'bottom'],
];

function PopperExample() {
  const [open, setOpen] = useState(true);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <>
      <div className="PopperExample" onClick={() => console.log('This is a App')}>
        <Popper
          position={['bottom', 'center']}
          // margin={10}
          // bubble
          // showOnMount
          // disableOutsideClick
          isOpen={open}
          onClose={onClose}
          arrow={{
            color: 'rgba(0,0,0,0.5)',
            size: 5,
            // distance: 5,
          }}
          content={
            <div
              style={{
                width: '300px',
                height: '200px',
                background: 'rgba(0,0,0,0.5)',
              }}
            >
              <button onClick={onClose}>close</button>
            </div>
          }
        >
          <button onClick={() => setOpen((previous) => !previous)}>{'Controlled'}</button>
        </Popper>
        {
          positionList.map((position, index) => (
            <div className="inner" key={index}>
              <Popper
                position={position}
                // margin={10}
                // bubble
                // showOnMount
                // disableOutsideClick
                arrow={{
                  color: 'rgba(0,0,0,0.5)',
                  size: 5,
                  // distance: 5,
                }}
                content={
                  <div
                    style={{
                      width: '300px',
                      height: '200px',
                      background: 'rgba(0,0,0,0.5)',
                    }}
                  ></div>
                }
              >
                <button onClick={() => console.log('This click event was fired on button.')}>
                  {position.join('-')}
                </button>
              </Popper>
            </div>
          )) //
        }
      </div>
      <div className="block"></div>
    </>
  );
}

export default PopperExample;
