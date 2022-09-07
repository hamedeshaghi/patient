import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import Text from '../text';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'size'>;

export interface TextFieldProps extends InputProps {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  multiLine?: boolean;
  helperText?: string;
  error?: boolean;
  classNameWrapper?: string;
}

const inputSize = {
  small: 'p-3 text-sm',
  medium: 'p-4',
  large: 'p-5',
};

// eslint-disable-next-line react/display-name
export const TextField = forwardRef((props: TextFieldProps, ref: ForwardedRef<any>) => {
  const { label, className, classNameWrapper, size = 'medium', multiLine = false, helperText, error = false, ...inputProps } = props;

  const Component = multiLine ? 'textarea' : 'input';

  return (
    <div
      className={clsx(
        'flex flex-col space-y-3 w-full border-slate-300 outline-primary',
        {
          'text-red-600 border-red-200 !outline-red-200 ': error,
        },
        classNameWrapper,
      )}
    >
      {label && (
        <Text fontSize="sm" fontWeight="medium" className="text-black">
          {label}
        </Text>
      )}
      <Component
        ref={ref}
        className={clsx(
          'rounded-lg border-2 border-solid border-inherit outline-inherit w-full transition-all',
          inputSize[size],
          className,
        )}
        {...inputProps}
      />
      {helperText && <span className="text-xs">{helperText}</span>}
    </div>
  );
});

export default TextField;