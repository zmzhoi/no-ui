import { Tooltip } from '@no-ui/tooltip';
import { faker } from '@faker-js/faker';

import Layout from './Layout';

const data = Array.from({ length: 30 }).map((_) => ({
  key: faker.datatype.uuid(),
  name: [faker.lorem.sentence(), faker.lorem.word(), faker.lorem.word()][
    Math.floor(Math.random() * 3)
  ],
}));

const Colors = ['red', 'blue', 'yellow', 'green', 'pink'];

function TooltipExample() {
  const type = '1';

  console.log(Tooltip.displayName);
  console.log(Tooltip.version);
  if (type === '1') {
    return (
      <Layout>
        <div style={{ margin: '5rem' }}>
          <Tooltip message={'dnqiowpdqwpnod'} extraStyle={{ background: 'red', color: 'black' }}>
            <button>over me</button>
          </Tooltip>
          <Tooltip message={'dnqiowpdqwpnod'} fire="over">
            <button>over me</button>
          </Tooltip>
          <Tooltip message={'dnqiowpdqwpnod'} fire="click">
            <button>click me</button>
          </Tooltip>
        </div>
      </Layout>
    );
  }

  const text = 'Albert Goodwiner';
  return (
    <Layout customStyle={{ height: '300vh' }}>
      <div className="TooltipExample">
        <div>
          <h3>Basic Tooltip</h3>
          <ul>
            <li>
              <Tooltip message={text} fire="ellipsis" arrow={false}>
                <span
                  style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    width: '100%',
                    display: 'inline-block',
                    padding: '0.5rem 0.7rem',
                    boxSizing: 'border-box',
                  }}
                >
                  {text}
                </span>
              </Tooltip>
            </li>
            {
              data.map((user) => (
                <li key={user.key}>
                  <Tooltip
                    message={user.name}
                    extraStyle={{ background: Colors[Math.floor(Math.random() * 5)] }}
                    arrow={false}
                  >
                    <span
                      style={{
                        width: '100%',
                        display: 'inline-block',
                        padding: '0.5rem 0.7rem',
                        boxSizing: 'border-box',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {user.name}
                    </span>
                  </Tooltip>
                </li>
              )) //
            }
          </ul>
        </div>
        <div>
          <h3>Click Tooltip</h3>
          <ul>
            {
              data.map((user) => (
                <li key={user.key}>
                  <Tooltip
                    message={user.name}
                    fire="click"
                    extraStyle={{ background: Colors[Math.floor(Math.random() * 5)] }}
                  >
                    <span
                      style={{
                        width: '100%',
                        display: 'inline-block',
                        padding: '0.5rem 0.7rem',
                        boxSizing: 'border-box',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {user.name}
                    </span>
                  </Tooltip>
                </li>
              )) //
            }
          </ul>
        </div>
        <div>
          <h3>Ellipsis Tooltip</h3>
          <ul>
            {
              data.map((user) => (
                <li key={user.key}>
                  <Tooltip message={user.name} fire={'ellipsis'}>
                    <span
                      style={{
                        // children must have style of ellipsis.
                        overflow: 'hidden', // style of ellipsis
                        whiteSpace: 'nowrap', // style of ellipsis
                        textOverflow: 'ellipsis', // style of ellipsis
                        // style of ellipsis requires belows.
                        width: '100%',
                        display: 'inline-block',
                        padding: '0.5rem 0.7rem',
                        boxSizing: 'border-box',
                      }}
                    >
                      {user.name}
                    </span>
                  </Tooltip>
                </li>
              )) //
            }
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default TooltipExample;
