import renderer from 'react-test-renderer';
import BtnLogin from '../components/BtnLogin'

it('verify if the button exits', () => {
    const component = renderer.create(<BtnLogin/>);
    expect(component).toBeTruthy();
});

it('verify if the button`s text is correct', () => {
  const component = renderer.create(<BtnLogin/>).toJSON();
  expect(component).toMatchSnapshot();
});