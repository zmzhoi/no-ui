import styles from './index.module.scss';
export interface OverlayProps {
  color?: string;
}

export function Overlay({ color }: OverlayProps) {
  return (
    <div
      className={styles['no-ui__overlay']}
      style={{ background: color || 'rgba(240, 240, 240, 0.8)' }}
    ></div>
  );
}

Overlay.version = __VERSION__;
Overlay.displayName = 'overlay';
