import React from "react";
import { UseFormReturn } from "react-hook-form";
import { useCharacterCounter } from "./useCharacterCounter";

interface CharacterLimitTrackerProps {
  /** The react hook from field name */
  name: string;
  /** The result of useForm (or useSaveForm) */
  form: UseFormReturn<any>;
  maxChars: number;
}

export function CharacterLimitTracker({ name, form, maxChars }: CharacterLimitTrackerProps) {
  let charCount = useCharacterCounter(name, form, maxChars);

  const remainingNoteChars = charCount.remaining;

  return (
    <p className="text-muted text-xs">
      {Math.max(remainingNoteChars, 0)} character
      {Math.max(remainingNoteChars, 0) !== 1 ? "s" : ""} remaining
      {remainingNoteChars < 0 && (
        <span className="text-danger ps-1">
          Over character limit by {Math.abs(remainingNoteChars)} character
          {remainingNoteChars !== -1 ? "s" : ""}
        </span>
      )}
    </p>
  );
}
