function Form(
) {
  return (
    <form className="flex flex-col gap-2 p-10 ">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Username"
        autoComplete="username"
      />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="Email" autoComplete="email" />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
      />

      <label htmlFor="message">Message</label>
      <textarea id="message" placeholder="Message" />

      <label htmlFor="checkbox">Remember me</label>
      <input type="checkbox" id="checkbox" />
      <button className="bg-blue-500 text-white">Submit</button>
    </form>
  );
}
export default Form;