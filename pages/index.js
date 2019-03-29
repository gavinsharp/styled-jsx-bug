function Home() {
  const p = (
    <p>this should be red, but isn&#39;t</p>
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
        <p>this will be red</p>
      </div>
    </React.Fragment>
  );
}

export default Home;
