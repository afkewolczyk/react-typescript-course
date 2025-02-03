import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
} from "react";

export type FormHandle = {
  clear: () => void;
};

// All of the props that are acccepted by the form element:
type FormProps = ComponentPropsWithoutRef<"form"> & {
  // unknown - wont know what the form data will look like ahead of time
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps }: FormProps,
  ref: Ref<FormHandle>
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("CLEARING");
        form.current?.reset();
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // convert to a simpler object:
    const data = Object.fromEntries(formData);
    onSave(data);
    // native form element
    form.current?.reset();
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;
