import { Link } from 'react-router';
import { useState } from 'react';

const UserForm = ({ details, onSubmit }) => {
  const {
    headerContext,
    mainContext,
    buttonContext,
    linkContext,
    linkName,
    linkURL,
  } = details;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className="min-h-screen bg-purple-400 flex justify-center items-center">
      <form
        className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20"
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
            {headerContext}
          </h1>
          <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
            {mainContext}
          </p>
        </div>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all"
          >
            {buttonContext}
          </button>
          <p className="mt-4 text-sm">
            {linkContext}{' '}
            <Link to={linkURL} className="btn-link">
              {linkName}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
