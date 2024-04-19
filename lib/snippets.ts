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
    console.log("Text copied to clipboard");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};

export { isNullOrEmpty, copyToClipboard };
