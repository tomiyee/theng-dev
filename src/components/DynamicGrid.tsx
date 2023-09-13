import { styled } from '@mui/system';
import { CSSProperties, FC, PropsWithChildren } from 'react';

type DynamicGridProps = PropsWithChildren<{
  /** The desired width of each element. True width will range from 1x to 2x this value */
  elementWidth: number;
  /** The same type as MUI spacing in Grid and Stack */
  spacing?: number;
  style?: Omit<CSSProperties, 'display' | 'gridTemplateColumns'>;
}>;

/**
 * Displays a grid of equal width cards that automatically adjust to fill the available
 * space. Cards on partially filled rows will stay the same size as the others.
 *
 * Specifications
 * --------------
 * - Wraps a list of objects that will be placed in the grid
 * - The width of each card is at minimum the given `elementWidth` pixels each
 * - Any child in an incomplete row is the same size as the child in a parent row
 * - The number of columns depends on the size of the `DynamicGrid` and not the window
 *
 * Notes
 * -----
 * - You cannot override the display or gridTemplateColumns style properties.
 * These are important for the grid functionality.
 */
const DynamicGrid: FC<DynamicGridProps> = styled('div')<DynamicGridProps>(
  ({ elementWidth, spacing = 0, style, theme }) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(min(${elementWidth}px, 100%), 1fr))`,
    gridGap: theme.spacing(spacing),
    ...style,
  }),
);

export default DynamicGrid;
