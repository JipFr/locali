import type { AnyZodObject, z } from "zod";

export type FormOptions<TInput extends z.infer<TSchema>, TSchema extends AnyZodObject> = {
  id: string;
  init: () => TInput,
  schema: TSchema,
  plugins?: FormPlugin[];
}

export type FormValidateResult<TOutput> = {
  success: true,
  data: TOutput,
} | {
  success: false,
}

export type FormPlugin<TOutput = any> = {
  onAfterError?: (form: FormControls<TOutput>) => void;
}

export type FormError = {
  text: string;
  id: string;
  clear: () => void;
}

export type FormControls<TOutput> = {
  id: string;
  validate: () => FormValidateResult<TOutput>;
  reset: () => void;
  data: () => TOutput;
  error: (key: string) => FormError | null;
  errors: {
    clear: () => void;
    all: () => Readonly<Record<string, string | undefined>>;
    insert(err: FormError | FormError[]): void;
  }
}

export const FORM_PREFIX = "LCL_FORM::";

export function createFormComposable<TSchema extends AnyZodObject>(ops: FormOptions<z.infer<TSchema>, TSchema>): FormControls<z.infer<TSchema>> {
  const data = ref(ops.init()) as Ref<z.infer<TSchema>>;
  const errors = ref<Record<string, string | undefined>>({});
  const readOnlyErrors = readonly(errors);

  return {
    id: ops.id,
    reset() {
      data.value = ops.init();
    },
    error(key) {
      const err = errors.value[key];
      if (!err) return null;
      return {
        id: FORM_PREFIX + ops.id + "::" + key,
        clear() {
          errors.value[key] = undefined;
        },
        text: err,
      }
    },
    validate() {
      errors.value = {};
      const parsed = ops.schema.safeParse(data.value);
      if (!parsed.success) {
        Object.entries(parsed.error.flatten().fieldErrors).forEach(e => {
          if (e[1]) errors.value[e[0]] = e[1][0];
        });
        ops.plugins?.forEach(p => p.onAfterError?.(this));
        return { success: false };
      }
      return {
        success: true,
        data: parsed.data,
      }
    },
    data() {
      return data.value;
    },
    errors: {
      clear() {
        errors.value = {};
      },
      all() {
        return readOnlyErrors.value;
      },
      insert(err) {
        if (Array.isArray(err)) {
          err.forEach(e => {
            errors.value[e.id] = e.text;
          })
          return;
        }

        errors.value[err.id] = err.text;
      },
    }
  }
}