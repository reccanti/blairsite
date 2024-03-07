const TABLET = 744;
const DESKTOP = 1200;
const MAX_CONTENT = 1200;

export const tabletSize = `${TABLET}px`;
export const desktopSize = `${DESKTOP}px`;
export const maxContentWidth = `${MAX_CONTENT}px`;

export const tabletQuery = `screen and (min-width: ${TABLET}px)`;
export const beforeTabletQuery = `screen and (max-width: ${TABLET - 1}px)`;
export const desktopQuery = `screen and (min-width: ${DESKTOP}px)`;
export const beforeDesktopQuery = `screen and (max-width: ${DESKTOP - 1}px)`;
