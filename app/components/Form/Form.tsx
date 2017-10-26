import { dropRight, toArray } from 'lodash';
import * as React from 'react';

import { FormProps } from './FormProps';

export class Form extends React.Component<FormProps> {

  constructor(props: FormProps) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  private onSubmit(event: any) {
    event.preventDefault();
    const elements: any = {};
    toArray(dropRight(event.currentTarget.elements)).map((element: any) => {
      elements[element.name] = element.value;
    });

    this.props.onSubmit(elements);
  }

  public render() {
    return (
      <form onSubmit={ this.onSubmit }>
        { this.props.children }
      <input type="submit" value="Submit" />
      </form>
    );
  }
}
