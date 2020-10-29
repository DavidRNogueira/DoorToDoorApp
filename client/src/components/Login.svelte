<script>
  import { isAuth } from "./GlobalState";
  // import axios from "axios";
  let email;
  let password;

  const handleLogin = async () => {
    if (email.length && password.length) {
      isAuth.set(true);
      // const response = await axios.post("/login", { email, password });
      // if (response.status === 200) {
      //   isAuth.set(true);
      // }
    }
  };
</script>

<style>
  main {
    display: grid;
    width: 100vw;
    height: 100vh;
    place-items: center;
  }

  .loginContainer {
    width: 600px;
    background-color: whitesmoke;
    padding: 2em 1em;
    border-radius: 5px;
  }

  .loginInput {
    align-self: center;
    width: 100%;
    box-sizing: border-box;
  }

  .loginHeader {
    text-align: center;
  }

  .spacingDiv {
    margin: 0.5em 0;
    display: flex;
    flex-direction: column;
  }

  .blockBtn {
    margin-top: 1em;
    padding: 0.25em 0;
    width: 100%;
    background-color: #003a8c;
    color: white;
    font-size: 1.25em;
    font-weight: bold;
  }
</style>

<main>
  <div class="loginContainer">
    <h1 class="loginHeader">Every House</h1>
    <div class="spacingDiv">
      <label for="email">Email</label>
      <input
        type="text"
        name="email"
        class="loginInput"
        on:change={(event) => (email = event.currentTarget.value)} />
    </div>
    <div class="spacingDiv">
      <label for="password">Password</label>
      <input
        type="password"
        class="loginInput"
        on:change={(event) => (password = event.currentTarget.value)} />
    </div>
    <div class="spacingDiv">
      <button class="blockBtn" on:click={() => handleLogin()}>Login</button>
    </div>
  </div>
</main>
