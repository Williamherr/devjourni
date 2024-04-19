import { toast } from "sonner";
function isNullOrEmpty(value: any): boolean {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    (Array.isArray(value) && value.length === 0)
  );
}

const copyToClipboard = async (textToCopy: any) => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    toast("Copy successful!");
  } catch (err) {
    toast.error("Copy failed. Error: " + err);
  }
};

export { isNullOrEmpty, copyToClipboard };
