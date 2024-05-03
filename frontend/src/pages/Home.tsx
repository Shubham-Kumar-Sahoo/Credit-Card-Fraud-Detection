import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useOutput } from "../context/OutputContext.tsx";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("")
  const outputContext = useOutput();
  const handleUpload = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/review", {
        data: input,
      });
      outputContext?.setData(response.data);
    } catch (error) {
      console.error(error);
    }

    navigate("/result");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <span className="text-center font-bold bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent text-5xl tracking-wide">
          Credit Card Fraud Detection System
        </span>
        <div className="flex flex-col justify-center mt-16">
          <input
            type="text"
            name="input"
            id="input"
            onChange={(e) => setInput(e.target.value)}
            className="rounded-lg w-[30rem] h-[3rem] p-5 outline-none"
          />
          <div className="flex justify-center mt-16">
            <button
              className="bg-gradient-to-r from-orange-500 to-orange-800 rounded-lg px-5 py-2"
              onClick={handleUpload}
            >
              Submit
            </button>
          </div>
        </div>
        {/* <button
          className="mt-10 bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-5 rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button> */}
      </div>
    </div>
  );
};

export default Home;
