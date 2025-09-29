import Landing from "@/Components/Landing";

export default function Home() {
  const styleStuff = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
  };
  return (
      <div style={styleStuff}>
        <Landing />
      </div>
  );
}
