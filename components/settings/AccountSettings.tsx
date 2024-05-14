"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useSession } from "next-auth/react";
import { UserAvatar } from "../Avatar";
// import { toast } from "./ui/use-toast";

const profileFormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  image: z.string().url(),
});

// This can come from your database or API.

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function AccountSettings() {
  const { data: session } = useSession();

  const defaultValues: Partial<ProfileFormValues> = {
    email: session?.user?.email || "",
    image: session?.user?.image || "",
  };
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    console.log(JSON.stringify(data));

    // Update the avatarSrc in your database or API
  }

  // Function to handle file input change
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result?.toString();
        if (base64String) {
          form.setValue("image", base64String);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 h-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>
                You can manage verified email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile picture</FormLabel>
              <FormControl>
                <span className="flex gap-2">
                  <UserAvatar
                    src={field.value}
                    alt={"profile"}
                    fallBack={defaultValues.email || ""}
                  />
                  <Input type="file" onChange={handleFileChange} />
                </span>
              </FormControl>
              <FormDescription>
                Your profile picture is visible to everyone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="fixed bottom-10">
          Update profile
        </Button>
      </form>
    </Form>
  );
}
