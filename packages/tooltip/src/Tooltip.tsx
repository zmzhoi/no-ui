import { useEffect, useRef, useState, useReducer, cloneElement, CSSProperties } from 'react';
import { Portal } from '@no-ui/portal';

import Arrow from './Arrow';
import { getBackgroundColor, TOOLTIP_ZINDEX, debounce } from './utils';

export interface TooltipProps {
  message: string | number;
  fire?: 'always' | 'ellipsis' | 'click';
  extraStyle?: CSSProperties;
  arrow?: boolean;
  children: JSX.Element;
}

export function Tooltip({
  message,
  fire = 'always',
  extraStyle = undefined,
  arrow = true,
  children,
}: TooltipProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLElement>(null);
  const [style, setStyle] = useState<CSSProperties | null>(null);
  const [, forceUpdate] = useReducer(() => ({}), {});

  useEffect(() => {
    let unmounted = false;

    const debouncedForceUpdate = debounce(forceUpdate, 300);
    function onResize() {
      if (unmounted) {
        return;
      }

      setStyle(null);

      if (fire === 'ellipsis') {
        debouncedForceUpdate(); // forceUpdate는 ellipsis tooltip의 fire 조건을 위해 필요.
      }
    }

    window.addEventListener('resize', onResize);
    return function cleanup() {
      unmounted = true;
      window.removeEventListener('resize', onResize);
    };
  }, [fire]);

  useEffect(() => {
    const childrenRefCurrent = childrenRef.current;

    if (!childrenRefCurrent) {
      return;
    }

    let registeredMoveEvent = false;

    if (fire === 'click') {
      const onClickChildren = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        setStyle((previousStyle) =>
          previousStyle
            ? null
            : {
                top: clientY - 10,
                left: clientX,
                transform: 'translate3d(-50%, -100%, 0)',
              },
        );
      };

      const onClickWindow = (event: MouseEvent) => {
        const tooltipRefCurrent = tooltipRef.current;

        // 값이 없다면, 툴팁이 보이지 않고 있는 상태.
        if (!tooltipRefCurrent) {
          return;
        }

        // tooltip이 아닌 영역을 클릭한 경우에만 hide 처리한다.
        const isOutsideOfTooltip = !tooltipRefCurrent.contains(event.target as Node);
        if (isOutsideOfTooltip) {
          setStyle(null);
        }
      };

      const onScroll = (event: Event) => {
        const tooltipRefCurrent = tooltipRef.current;

        // 툴팁 내에서 스크롤하는 것은 허용한다.
        if (event.target === tooltipRefCurrent) {
          return;
        }

        setStyle(null);
      };

      childrenRefCurrent.addEventListener('click', onClickChildren);
      window.addEventListener('click', onClickWindow, { capture: true });
      window.addEventListener('scroll', onScroll, { capture: true });
      return function cleanup() {
        childrenRefCurrent.removeEventListener('click', onClickChildren);
        window.removeEventListener('click', onClickWindow, { capture: true });
        window.removeEventListener('scroll', onScroll, { capture: true });
      };
    }

    // This case :: ['ellipsis', 'always'].includes(fire)

    if (fire === 'ellipsis') {
      const { scrollWidth, clientWidth } = childrenRefCurrent;

      if (scrollWidth === clientWidth) {
        return;
      }
    }

    function onMouseMove(event: MouseEvent) {
      const { clientX, clientY } = event;
      setStyle({
        top: clientY - 10,
        left: clientX,
        transform: 'translate3d(-50%, -100%, 0)',
      });
    }

    function onMouseEnter(event: MouseEvent) {
      if (!childrenRefCurrent) {
        return;
      }

      const { clientX, clientY } = event;
      setStyle({
        top: clientY - 10,
        left: clientX,
        transform: 'translate3d(-50%, -100%, 0)',
      });
      childrenRefCurrent.addEventListener('mousemove', onMouseMove);
      registeredMoveEvent = true;
    }

    function onMouseLeave() {
      if (!childrenRefCurrent) {
        return;
      }

      childrenRefCurrent.removeEventListener('mousemove', onMouseMove);
      registeredMoveEvent = false;
      setStyle(null);
    }

    childrenRefCurrent.addEventListener('mouseenter', onMouseEnter);
    childrenRefCurrent.addEventListener('mouseleave', onMouseLeave);
    return function cleanup() {
      childrenRefCurrent.removeEventListener('mouseenter', onMouseEnter);
      childrenRefCurrent.removeEventListener('mouseleave', onMouseLeave);
      if (registeredMoveEvent) {
        childrenRefCurrent.removeEventListener('mousemove', onMouseMove);
      }
    };
  }, [fire]);

  const showPortal = !!style;
  const mergedStyle = { ...defaultTooltipStyle, ...(extraStyle && extraStyle) };

  return (
    <>
      {
        cloneElement(children, {
          ref: childrenRef,
        }) //
      }
      <Portal visible={showPortal}>
        <div
          style={{
            position: 'fixed',
            zIndex: TOOLTIP_ZINDEX,
            ...style,
          }}
        >
          <div ref={tooltipRef} style={mergedStyle}>
            {message}
            {arrow && <Arrow color={getBackgroundColor(mergedStyle)} />}
          </div>
        </div>
      </Portal>
    </>
  );
}

const defaultTooltipStyle: CSSProperties = {
  // width: 'auto',
  // maxWidth: '200px',
  background: 'rgba(0,0,0,0.85)',
  color: 'white',
  fontSize: '0.9rem',
  lineHeight: '1.1rem',
  boxShadow: '0 2px 4px rgb(0 0 0 / 10%)',
  padding: '10px 20px',
  borderRadius: '5px',
  wordBreak: 'break-all',
};

// Tooltip.version = __BUILD_VERSION__;
