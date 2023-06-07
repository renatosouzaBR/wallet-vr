import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { Input, InputProps } from '../Input';

interface ControlledInputProps extends InputProps {
  name: string;
  control: Control<any>;
}

export function ControlledInput({ control, name, ...rest }: ControlledInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Input {...rest} onChangeText={field.onChange} value={field.value} />}
    />
  );
}