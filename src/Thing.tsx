import { useUserData } from "@nhost/react";

export const Thing = () => {
  const data = useUserData();
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
