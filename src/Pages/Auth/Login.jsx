import React from 'react'

const Login = () => {
    return (
        <div className=''>
            {/* <div className='bg-clip-padding backdrop-filter backdrop-brightness-75 backdrop-blur-sm  bg-opacity-10' > */}
            <div class="bg-gradient-to-tr from-gray-800 via-gray-500  to-gray-800 h-screen relative ">
                <div className='flex justify-center items-center h-full absolute z-50 w-full' >
                    <div class=" p-8 rounded-3xl shadow-lg bg-gray-600  bg-clip-padding backdrop-filter backdrop-brightness-75 backdrop-blur-md  bg-opacity-10  flex justify-center items-center flex-col">
                        <div class="flex justify-center mb-6">
                            <span class="inline-block bg-gradient-to-tr from-blue-400 text-gray-200  to-red-400 rounded-full p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
                            </span>
                        </div>
                        <h2 class="text-2xl text-gray-200  font-semibold text-center mb-4">Login</h2>
                        <form>
                            <div class="mb-4">
                                <label for="email" class="block text-gray-200 text-sm font-semibold mb-2">Email Address *</label>
                                <input type="email" id="email" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="hello@alignui.com" />
                            </div>
                            <div class="mb-6">
                                <label for="password" class="block text-gray-200 text-sm font-semibold mb-2">Password *</label>
                                <input type="password" id="password" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="••••••••" />
                                <p class="text-gray-300 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
                            </div>
                            <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none bg-gradient-to-tr from-blue-400 mb-5  to-red-400  focus:ring-2 focus:ring-opacity-50">Login</button>
                            <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none  backdrop-filter backdrop-brightness-75 backdrop-blur-sm  bg-opacity-10  focus:ring-2 focus:ring-opacity-50">Login with Google</button>
                            {/* <p class="text-gray-600 text-xs text-center mt-4">
                                By clicking Register, you agree to accept Apex Financial's
                                <a href="#" class="text-blue-500 hover:underline">Terms and Conditions</a>.
                            </p> */}
                        </form>
                    </div>

                </div>
                <div>
                    <img src="./pexels-garrett-morrow-736414.jpg" alt="" className='filter filter-md rounded-s-3xl object-center h-[100vh] w-screen object-cover overflow-hidden' />
                </div>
            </div>
        </div>
        // </div >
    )
}

export default Login