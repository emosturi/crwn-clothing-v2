<<<<<<< HEAD
import { Group, Input, FormInputLabel } from './form-input.styles';
=======
import { FormInputLabel, Input, Group } from './form-input.styles';
>>>>>>> lesson-34

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
<<<<<<< HEAD
        <FormInputLabel
          shrink={otherProps.value.length}
        >
=======
        <FormInputLabel shrink={otherProps.value.length}>
>>>>>>> lesson-34
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
