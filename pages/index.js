function Home() {
  const p = (
    <p>Text</p>
  );

  return (
    <React.Fragment>
      <style jsx>{`
        p {
          color: red;
        }
      `}</style>
      <div>
        {p}
        <p>Other text</p>
      </div>
    </React.Fragment>
  );
}

export default Home;
