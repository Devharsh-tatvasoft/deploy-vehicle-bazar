import config from "../utils/config";

const Contact = () => {
  return (
    <div className="pt-28">
      <h1>Hello my mister</h1>
      <h1>{config.title}</h1>
    </div>
  );
};

export default Contact;
