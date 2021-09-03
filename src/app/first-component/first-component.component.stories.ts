import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import {FirstComponentComponent} from './first-component.component';
import {ExtendComponentComponent} from '../extend-component/extend-component.component';
import {EnumData} from '../data/data';

export default {
  title: 'FirstComponent',
  component: FirstComponentComponent,
  decorators: [
    moduleMetadata({
      declarations: [ExtendComponentComponent],
      imports: [],
    }),
  ],
} as Meta;

const Template: Story<FirstComponentComponent> = (args: FirstComponentComponent) => ({
  component: FirstComponentComponent,
  props: args,
});

export const FirstComp = Template.bind({});

FirstComp.args = {
  firstMessage: 'firstMessage',
  extendedMessage: 'extendMessage',
  enumData: EnumData.INFO,
  extendedData: {
    message: 'extendedDataMessage',
    enumData: EnumData.ERROR
  }
};
