import Link from 'next/Link';
import Page from '../components/Page';
import Button from '../components/Button';

const onClick = () => {};

const Index = () => (
  <Page>
    <h1>Example Buttons</h1>
    <Button onClick={onClick}>Button</Button>
    <Button onClick={onClick} disabled>Disabled</Button>
    <Button onClick={onClick} icon="coffee">Left Icon</Button>
    <Button onClick={onClick} icon="coffee" iconPosition="right">
      Right Icon
    </Button>
    <Button onClick={onClick} theme="blue">Blue</Button>
    <Button onClick={onClick} icon="check" theme="green" />
    <Button onClick={onClick} small theme="dark">
      Small
    </Button>
    <Button onClick={onClick} medium>Medium</Button>
    <Button onClick={onClick} large theme="red">
      Large
    </Button>
    <Button onClick={onClick} icon="check" theme="primary">Blue</Button>
  </Page>
);

export default Index;
