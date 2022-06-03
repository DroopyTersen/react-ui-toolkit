import { UseFormReturn, useWatch } from "react-hook-form";

export function useCharacterCounter(fieldName: string, form: UseFormReturn, maxChars = null) {
  let watchedValue = useWatch({ control: form?.control, name: fieldName });

  return {
    total: watchedValue?.length || 0,
    remaining: maxChars !== null ? maxChars - watchedValue?.length || 0 : null,
  };
}
