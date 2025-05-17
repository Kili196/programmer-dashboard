export default function PageLayout({ heading, children }) {
  return (
    <div className="p-7">
      <h1 className="text-2xl mb-1 uppercase"> {heading}</h1>
      <div className="h-0.5 bg-gray-300 rounded-3xl"> </div>
      {children}
    </div>
  );
}
