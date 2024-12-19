import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((user: any) => user.username === username && user.password === password);

        if (user) {
            alert('Login successful!');
            router.push('/');
        } else {
            setErrorMessage('Invalid username or password!');
        }
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-60 py-3 text-xl font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition disabled:bg-gray-300"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-center text-gray-800">
                    Don't have an account?{" "}
                    <a href="/auth/register" className="text-blue-600 hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;