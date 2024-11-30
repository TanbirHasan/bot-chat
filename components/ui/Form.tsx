import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Generic Form Component
interface FormProps<TSchema extends z.ZodType> {
  schema: TSchema;
  onSubmit: (data: z.infer<TSchema>) => Promise<void> | void;
  children: (methods: ReturnType<typeof useForm>) => React.ReactNode;
}

export function Form<TSchema extends z.ZodType>({
  schema,
  onSubmit,
  children,
}: FormProps<TSchema>) {
  const methods = useForm<z.infer<TSchema>>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
      {children(methods)}
    </form>
  );
}
