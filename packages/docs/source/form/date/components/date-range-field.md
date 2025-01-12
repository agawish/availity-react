---
title: <DateRangeField />
---

The same as `DateRange` but with a `Label` that appears above the input and a `Feedback` that appears below the input.

## Example

```jsx live=true viewCode=true
import { Form } from '@availity/form';
import { DateRange } from '@availity/date';
import * as yup from 'yup';
import '@availity/yup';
import '@availity/yup/moment';
import moment from 'moment';

<div className="w-100 d-flex flex-row justify-content-around align-items-center">
  <Form
    initialValues={{
      dateOfService: '',
    }}
    onSubmit={values => console.log(values)}
    validationSchema={yup.object().shape({
      dateOfService: yup
        .dateRange(
          {
            min: moment()
              .subtract(7, 'day')
              .format('MM/DD/YYYY'),
            max: moment()
              .add(7, 'day')
              .format('MM/DD/YYYY'),
            format: 'MM/DD/YYYY',
          },
          `Date must be between ${moment()
            .subtract(7, 'day')
            .format('MM/DD/YYYY')} and ${moment()
            .add(7, 'day')
            .format('MM/DD/YYYY')}`
        )
        .typeError('This field is invalid.')
        .required('This field is required.'),
    })}
  >
    <DateRangeField
      id="dateOfService"
      label="Date of Service"
      name="dateOfService"
      min={{ value: 7, units: 'day' }}
      max={{ value: 7, units: 'day' }}
    />
    <Button color="primary" type="submit">
      Submit
    </Button>
  </Form>
</div>;
```

## Props

Extends [DateRange Props](/form/date/components/date-range/#props).

### `name: string`

The name of the field. Will be the key of the selected date that comes through in the values of the `onSubmit` callback.

### `startKey: string`

Key to return start date as on form submit. Should match the yup schema `startKey`.

### `endKey: string`

Key to return end date as on form submit. Should match the yup schema `endKey`.

### `label?: string`

The text that renders inside the `Label` above the input.
