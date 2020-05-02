import {
  // outerHexagonColor,
  // outerHexagonDisabledColor,
  innerHexagonActiveEnabledColor,
  innerHexagonInactiveEnabledColor,
  innerHexagonActiveDisabledColor,
  innerHexagonInactiveDisabledColor
  // innerHexagonHoverColor
} from './css-constants';

export const defineInnerFillColor = (isActive?: boolean, isEnabled?: boolean) => {
  if (isActive && isEnabled) {
    return innerHexagonActiveEnabledColor;
  }

  if (isActive && !isEnabled) {
    return innerHexagonActiveDisabledColor;
  }

  if (!isActive && isEnabled) {
    return innerHexagonInactiveEnabledColor;
  } else {
    return innerHexagonInactiveDisabledColor;
  }
};

export const generateWallId = (id: string, side: string) => {
  return `wall-${id}-${side}`;
};
