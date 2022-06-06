import { useEffect, useState } from "react";
import { Tabs, TabPane, Heading, Button, Root } from '@athena/forge'

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <Root>
      <ControlledTabs />
      <p>Message:{data && data.message}</p>
    </Root>
  );
}

function ControlledTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleTabsChange(e) {
    let value = e.target.value;
    if (value === undefined) {
      value = selectedIndex ? 0 : 1;
    }
    const selectedTab = parseInt(value, 10);
    if (selectedTab !== selectedIndex) {
      setSelectedIndex(selectedTab);
    }
  }

  return (
    <div>
      <Tabs selectedIndex={selectedIndex} onTabsChange={handleTabsChange}>
        <TabPane label="Tab 1" padded>
          <Heading text="Tab 1" variant="subsection" headingTag="h2" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </TabPane>
        <TabPane label="Tab 2" padded>
          <Heading text="Tab 2" variant="subsection" headingTag="h2" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </TabPane>
      </Tabs>
      <div>
        <Button variant="tertiary" text="Set Inactive Tab To Active" onClick={handleTabsChange} />
      </div>
    </div>
  );
}

export default App;
