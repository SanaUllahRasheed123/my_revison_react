import PropTypes from "prop-types";

const MyComponents = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id} className="p-4 bg-gray-100 rounded shadow mb-4">
            <p className="font-bold">{item.name}</p>
            <p>{item.email}</p>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

MyComponents.propTypes = {
  data: PropTypes.string.isRequired,
};

export default MyComponents;
