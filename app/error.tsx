"use client"; // Error components must be Client components
import { Heading, Button } from "./src/common";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <Heading mb={4}>予期せぬエラーが発生しました。</Heading>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
