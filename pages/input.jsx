import Page from '../common/components/Page';
import TextInput from '../common/components/TextInput';

const Input = () => (
  <Page>
    <div style={{ padding: '30px' }}>
      <h1>Inputs</h1>
      <div>
        <h3>Input</h3>
        <TextInput />
      </div>
      <div>
        <h3>Input with placeholder text</h3>
        <TextInput placeholder="Placeholder text" />
      </div>
      <div>
        <h3>Input with label</h3>
        <TextInput label="http://" />
      </div>
      <div>
        <h3>Input with label (right)</h3>
        <TextInput label="right" labelPosition="right" />
      </div>
      <div>
        <h3>Input with label (empty)</h3>
        <TextInput label={''} labelPosition="right" />
      </div>
      <div>
        <h3>Input with icon</h3>
        <TextInput icon="coffee" />
      </div>
      <div>
        <h3>Input with icon (right)</h3>
        <TextInput icon="coffee" iconPosition="right" />
      </div>
      <div>
        <h3>Input with label and icon</h3>
        <TextInput label="wwwasdfgh" icon="check" />
      </div>
      <div>
        <h3>Input with label (left) and icon (right)</h3>
        <TextInput label="ayy" icon="check" iconPosition="right" />
      </div>
      <div>
        <h3>Input with label (right) and icon (left)</h3>
        <TextInput label="ayy" icon="check" labelPosition="right" />
      </div>
      <div>
        <h3>Input with icon props (spinning coffee)</h3>
        <TextInput icon={{ icon: 'coffee', spin: true }} />
      </div>
    </div>
  </Page>
);

export default Input;
