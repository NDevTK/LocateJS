import Block from './Block';
import Table from './Table';
import { getSystemData } from './main';

const SystemDataBlock = () => (
  <Block>
    <h1>System Data</h1>
    <Table data={getSystemData()} />
    <p>
      <b>Explanation:</b> Your IP address reveals information about your
      connection. Using a VPN or Tor will hide your connection info.
    </p>
  </Block>
);

export default SystemDataBlock;
