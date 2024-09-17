function CurrentTime() {
  let time = new Date().toLocaleTimeString();

  return <p className="lead text-center">This is the current time: {time}</p>;
}

export default CurrentTime;
