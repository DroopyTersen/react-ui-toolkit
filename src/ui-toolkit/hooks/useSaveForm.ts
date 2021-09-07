import { BaseSyntheticEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const useSaveForm = <TFormValues = any>({
  onSave,
  onSuccess,
  initial,
}: SaveFormParams<TFormValues>) => {
  const [isSaving, setIsSaving] = useState(false);
  const form = useForm<TFormValues>({
    defaultValues: (initial as any) || {},
  });

  const onValidSubmit: SubmitHandler<TFormValues> = async (data, event) => {
    try {
      setIsSaving(true);
      const saveResult = await onSave(data as TFormValues, event);
      onSuccess(saveResult, event);
    } catch (err) {
      setIsSaving(false);
    }
  };
  const onSubmit = form.handleSubmit(onValidSubmit);

  return {
    ...form,
    isSaving,
    onSubmit: (event) => {
      onSubmit(event);
    },
  };
};

export interface SaveFormParams<TFormValues = any> {
  onSave: (formValues: TFormValues, event: BaseSyntheticEvent) => Promise<TFormValues>;
  onSuccess: (result: TFormValues, event: BaseSyntheticEvent) => void;
  initial: TFormValues;
}
