import HashLoader from "react-spinners/HashLoader";

function Loader(props) {
  return (
    <div className="my-12 mx-auto flex justify-center">
      <HashLoader loading={props.loading} color={"#0C4A6E"}></HashLoader>
    </div>
  )
}

export default Loader;