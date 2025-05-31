export default function Login() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white">
      {/* Content Row */}
      <main className="flex flex-row justify-start gap-50 row-start-2 w-full">
        {/* Left Side - Headings */}
        <div className="flex flex-col gap-8 items-start">
          <div className="space-y-2">
            <h1 style={{ fontSize: '3.2rem', fontWeight: '800', color: 'black' }}>
              Welcome to the
            </h1>
            <h1 style={{ fontSize: '3.2rem', fontWeight: '800', color: 'black' }}>
              Webdev Hub
            </h1>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'black' }}>
            The place for all things web development
          </h2>
        </div>

        {/* Right Side - Login Box */}
        <div className="bg-white p-8 rounded-lg shadow-md w-100 h-100 self-start border border-black-200">
          <h2 style = {{ fontSize: '2.2rem', color: 'black', fontWeight: '200'}}>
            Login
          </h2>
          <form className="space-y-10">
            <input
              type="text"
              placeholder="Username"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="submit"
              value="Sign In"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
            />
          </form>
        </div>
      </main>
    </div>
  );
}
