import Block from './Block';
import Table from './Table';

const WebRTCBlock = ({ title, data }) => (
  <Block>
    <h1>WebRTC {title}</h1>
    <Table data={data} />
    <p>
      <b>Explanation:</b> Date and language data can be used to identify your
      location. Changing the settings on your computer can prevent this.
    </p>
  </Block>
);

export default WebRTCBlock;
