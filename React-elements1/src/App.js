import React from "react";
import UserForm from "./pages/UserForm";

function App() {
  return (

    <div class="bg-gray-200 p-4 rounded-md shadow-md">
    <h2 class="text-xl font-bold mb-2">Card Title</h2>
    <UserForm />
    <p class="text-gray-700">This is a simple card component using Tailwind CSS.</p>
    <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click me</button>
</div>

  );
}

export default App;
