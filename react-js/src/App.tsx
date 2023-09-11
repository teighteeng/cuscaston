import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

function App() {
  return (
    <>
      <TheHeader />
      <main className="pt-content-s min-h-screen">Content</main>
      <TheFooter />
    </>
  );
}

export default App;
