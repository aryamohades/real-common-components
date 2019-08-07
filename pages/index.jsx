import Page from '../common/components/Page';
import Button from '../common/components/Button';
import TextInput from '../common/components/TextInput';
import TextInputWithIcon from '../common/components/TextInputWithIcon';

const onClick = () => {};
const onChange = value => {};

const Index = () => (
  <Page>
    <h1>Example Buttons</h1>
    <Button onClick={onClick}>Button</Button>
    <Button onClick={onClick} disabled>
      Disabled
    </Button>
    <Button onClick={onClick} icon="coffee">
      Icon
    </Button>
    <Button onClick={onClick} icon="check" theme="green" />
    <Button onClick={onClick} small theme="dark">
      Small
    </Button>
    <Button onClick={onClick} medium>
      Medium
    </Button>
    <Button onClick={onClick} large theme="red">
      Large
    </Button>
    <Button onClick={onClick} icon="check" theme="primary">
      Blue
    </Button>
    <h1>Example Inputs</h1>
    <div>
      <TextInput placeholder="Standard text input" />
    </div>
    <div>
      <TextInput placeholder="Disabled input" disabled />
    </div>
    <div>
      <TextInputWithIcon placeholder="Input with icon" icon="coffee" />
    </div>
  </Page>
);

export default Index;
