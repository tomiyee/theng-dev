import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

interface TabPanelProps<T> {
  /** The value of this panel */
  index: T;
  /** The value of the active panel */
  value: T;
}

const TabPanel = <T,>({
  children,
  value,
  index,
}: PropsWithChildren<TabPanelProps<T>>) => {
  return (
    <div role="tabpanel" hidden={value !== index} style={{ width: '100%' }}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};
export default TabPanel;
