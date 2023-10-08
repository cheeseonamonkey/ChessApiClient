import OpeningsPage from "./pages/stats/OpeningsPage";

const Link = (props: JSX.IntrinsicElements['a']) => (
  <a
    className="text-pink-500 underline hover:no-underline dark:text-pink-400"
    {...props}
  />
);

export default function App() {

  const searchParams = new URLSearchParams(window.location.search);
  const user = searchParams.get("user");


  return (
    <div className="mx-auto my-8 mt-10 w-8/12 rounded border border-gray-200 p-4 shadow-md dark:border-neutral-600 dark:bg-neutral-800 dark:shadow-none">
      <OpeningsPage user={user ?? "magnus-carlsen"} />
    </div>
  );
}
