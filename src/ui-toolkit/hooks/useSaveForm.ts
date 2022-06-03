import { BaseSyntheticEvent, useState } from "react";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";

export const useSaveForm = <TFormValues = any>({
  onSave,
  onSuccess,
  onError,
  initial,
  shouldUnregister = false,
}: SaveFormParams<TFormValues>): UseSaveFormReturn<TFormValues> => {
  const [isSaving, setIsSaving] = useState(false);
  const form = useForm<TFormValues>({
    defaultValues: (initial as any) || {},
    shouldUnregister,
  });

  const onValidSubmit: SubmitHandler<TFormValues> = async (data, event) => {
    try {
      setIsSaving(true);
      const saveResult = await onSave(data as TFormValues, event);
      onSuccess(saveResult, event);
    } catch (err) {
      setIsSaving(false);
      if (onError) {
        onError(err);
      }
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
  onError?: (error) => void;
  initial: TFormValues;
  shouldUnregister?: boolean;
}

export interface UseSaveFormReturn<TFormValues> extends UseFormReturn<TFormValues> {
  isSaving: boolean;
  onSubmit: (event: any) => void;
}
